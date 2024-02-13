'use client';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Game } from '@prisma/client';
import { useRouter } from 'next/navigation';

export default function ListCard({ game }: { game: Game }) {
  const router = useRouter();

  return (
    <Card sx={{ maxWidth: 345 }} className='content-center'>
      <CardMedia
        sx={{ height: 140 }}
        image='/static/images/cards/contemplative-reptile.jpg'
        title='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {game.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {game.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          onClick={() => {
            router.push(`/detail/${game.id}/`);
          }}
        >
          Read more
        </Button>
      </CardActions>
    </Card>
  );
}
