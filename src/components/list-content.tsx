'use client';

import { useState, useEffect } from 'react';
import ListCard from '@/components/list-card';
import type { FavoriteWithGameId, GameWithReviews } from '@/db/queries';
import { gameType } from '@prisma/client';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export default function ListContent({
  games,
  favorite,
}: {
  games: GameWithReviews[];
  favorite: FavoriteWithGameId;
}) {
  const [filteredGames, setFilteredGames] = useState<GameWithReviews[]>(games);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<gameType | null>(null);
  const [sortKey, setSortKey] = useState<keyof GameWithReviews | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [animationParent] = useAutoAnimate();

  useEffect(() => {
    let tempFilteredGames = games.filter((game) => {
      const matchesSearchTerm =
        searchTerm === '' ||
        game.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === null || game.type === category;
      return matchesSearchTerm && matchesCategory;
    });

    if (sortKey) {
      tempFilteredGames.sort((a, b) => {
        let valueA = a[sortKey];
        let valueB = b[sortKey];

        if (typeof valueA === 'string' && typeof valueB === 'string') {
          valueA = valueA.toLowerCase();
          valueB = valueB.toLowerCase();
        }

        if (!valueA || !valueB) return 0;

        if (sortDirection === 'asc') {
          return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        } else {
          return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
        }
      });
    }

    setFilteredGames(tempFilteredGames);
  }, [searchTerm, category, games, sortKey, sortDirection]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (key: keyof GameWithReviews) => {
    setSortKey(key);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div>
      <Paper
        elevation={1}
        className='pt-1 pb-1 pr-6 pl-6 mb-8 mt-10  flex justify-between'
      >
        <div className='my-6 flex justify-center'>
          <TextField
            id='outlined-basic'
            label='Search'
            variant='outlined'
            value={searchTerm}
            onChange={handleSearchChange}
            size='small'
          />
        </div>

        <div className='flex justify-center my-9'>
          <Button onClick={() => handleSortChange('name')} size='small'>
            Sort by Name {sortDirection}
          </Button>
        </div>

        <div className='flex justify-center my-9 flex-wrap gap-2'>
          {Object.values(gameType).map((t) => (
            <Button
              size='small'
              key={t}
              onClick={() => {
                setCategory(t);
              }}
            >
              {t}
            </Button>
          ))}
          <Button
            onClick={() => {
              setCategory(null);
            }}
            variant='contained'
            size='small'
          >
            Reset category filter
          </Button>
        </div>
      </Paper>

      <div className='grid grid-cols-5 gap-5' ref={animationParent}>
        {filteredGames.map((g) => (
          <ListCard game={g} key={g.id} favorite={favorite} />
        ))}
      </div>
    </div>
  );
}
