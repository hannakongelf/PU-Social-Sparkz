'use client';
import { useState, useEffect } from 'react';
import ListCard from '@/components/list-card';
import Grid from '@/components/common/grid';
import { Button, TextField } from '@mui/material';
import { GameWithReviews } from '@/db/queries/game';
import { gameType } from '@prisma/client';

export default function ListContent({ games }: { games: GameWithReviews[] }) {
  const [filteredGames, setFilteredGames] = useState<GameWithReviews[]>(games);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<gameType | null>(null);
  const [sortKey, setSortKey] = useState<keyof GameWithReviews | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

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
      <div className='my-6 flex justify-center'>
        <TextField
          id='outlined-basic'
          label='Søk'
          variant='outlined'
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <Button onClick={() => handleSortChange('name')}>
        Sort by Name {sortDirection}
      </Button>

      <div className='flex justify-center my-6 flex-wrap gap-2'>
        {Object.values(gameType).map((t) => (
          <Button
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
        >
          Reset
        </Button>
      </div>

      <Grid className='grid-cols-5 gap-5'>
        {filteredGames.map((g) => (
          <ListCard game={g} key={g.id} />
        ))}
      </Grid>
    </div>
  );
}
