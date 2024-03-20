'use client';

import * as actions from '@/actions';
import Image from 'next/image';
import { Queue } from '@prisma/client';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import * as paths from '@/paths';
import { useState } from 'react';
import ListCard from '../list-card';
import { FavoriteWithGames, GameWithReviews } from '@/db/queries';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const UserInfoBox = ({
  games,
  user,
  favorites,
  queues,
}: {
  games: GameWithReviews[];
  favorites: FavoriteWithGames;
  queues: Queue[];
  user: {
    image?: string | null;
    name?: string | null;
    email?: string | null;
  };
}) => {
  const [active, setActive] = useState<'games' | 'favorite' | 'list'>('games');
  return (
    <section className='w-4/5'>
      <div className='flex justify-start items-center'>
        <div className='w-1/3'>
          <Avatar sx={{ height: 200, width: 200 }}>
            <Image
              src={user.image || ''}
              width={200}
              height={200}
              alt='Profile image'
            />
          </Avatar>
        </div>
        <div className='flex flex-col gap-1'>
          <h1 className='text-2xl font-semibold mb-2 border-b'>My Profile</h1>
          <Typography>{user.name}</Typography>
          <Typography>{user.email}</Typography>

          <form action={actions.signOut} className='mt-4'>
            <Button type='submit' variant='contained' size='small'>
              Sign out
            </Button>
          </form>
        </div>
      </div>
      <div className='flex justify-between my-4 border-b shadow-sm px-4'>
        <section className='flex items-center gap-4'>
          <Button onClick={() => setActive('games')}>My Games</Button>
          <Button onClick={() => setActive('favorite')}>
            My favorite games
          </Button>
          <Button onClick={() => setActive('list')}>My Lists</Button>
        </section>
        {active !== 'games' && (
          <Link
            href={
              active === 'favorite'
                ? paths.favorite()
                : active === 'list'
                ? paths.personalList()
                : ''
            }
          >
            <Button size='small' variant='contained'>
              Advanced view
            </Button>
          </Link>
        )}
      </div>
      <div className='grid grid-cols-4 gap-5'>
        {active === 'games' ? (
          <>
            {games.map((game) => (
              <ListCard key={game.id} game={game} favorite={'not needed'} />
            ))}
          </>
        ) : active === 'favorite' ? (
          <>
            {favorites?.games.map((game) => (
              <ListCard key={game.id} game={game} favorite={'not needed'} />
            ))}
          </>
        ) : (
          active === 'list' && (
            <>
              {queues.map((queue) => (
                <Card
                  sx={{
                    maxWidth: 345,
                    boxShadow: 'none',
                    border: 'solid',
                    borderWidth: '0px',
                    borderTopWidth: '5px',
                    borderBottomWidth: '5px',
                    borderRadius: 0,
                    borderColor: '#845EC2',
                    '&:hover': {
                      borderColor: 'darkpurple',
                    },
                  }}
                  key={queue.id}
                  className='static content-center'
                >
                  <Link href={paths.personalList(queue.id)}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image='/stock_game.jpg'
                      title={queue.name}
                    />
                    <CardContent className='relative bottom-5'>
                      <Typography gutterBottom variant='h5' component='div'>
                        {queue.name}
                      </Typography>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </>
          )
        )}
      </div>
    </section>
  );
};

export default UserInfoBox;
