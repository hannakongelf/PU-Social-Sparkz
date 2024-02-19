'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Game } from '@prisma/client';
import { GameWithReviews } from '@/db/queries/game';
import Image from 'next/image';
import { Rating } from '@mui/material';
import ReviewContent from './review-content';

const GameContent = ({ game }: { game: GameWithReviews }) => {
  return (
    <div className='max-w-4xl'>
      <div className='bg-[#845EC2] min-h-14'>
        <h1 className='text-white text-center'> {game.type} </h1>
      </div>
      <Image
        src={
          'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
        }
        alt='Sample Image'
        width={900}
        height={300}
        objectFit='cover'
      />
      <div className='bg-[#845EC2] min-h-14'>
        <span className='text-white text-center'>
          Brukeres vurdering av leken
        </span>
        <Rating
          name='read-only'
          value={
            game.Review.map((r) => r.rating).reduce((a, b) => a + b, 0) /
            game.Review.filter((r) => !!r.rating).length
          }
          readOnly
          className='margin-y-3'
        />
      </div>
      <h2 className='text-4xl'>{game.name}</h2>
      <p>{game.description}</p>
      {game.Review.map((review) => (
        <ReviewContent key={review.id} review={review} />
      ))}
    </div>
  );
};

export default GameContent;
