import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { FavoriteWithGameId, GameWithReviews } from '@/db/queries';
import FavoriteGame from './favorite';
import Rating from '@mui/material/Rating';

export default function ListCard({
  game,
  favorite,
}: {
  game: GameWithReviews;
  favorite: FavoriteWithGameId;
}) {
  return (
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
      className='static content-center'
    >
      <Link href={`/detail/${game.id}/`}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            game.image && game.image?.length > 0
              ? game.image
              : '/stock_game.jpg'
          }
          title={game.name}
        />
      </Link>

      <FavoriteGame
        className='absolute bottom-10 right-0 mb-2 mr-2'
        gameId={game.id}
        favorite={favorite}
      />

      <Link href={`/detail/${game.id}/`}>
        <CardContent className='relative bottom-5'>
          <Typography gutterBottom variant='h5' component='div'>
            {game.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {`${game.description.slice(0, 25)}...`}
          </Typography>
          {game.review?.length > 0 ? (
            <Rating
              name='read-only'
              value={
                game.review.map((r) => r.rating).reduce((a, b) => a + b, 0) /
                game.review.filter((r) => !!r.rating).length
              }
              readOnly
            />
          ) : (
            'No reviews'
          )}
        </CardContent>
      </Link>
    </Card>
  );
}
