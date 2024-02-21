'use client';

import { GameWithReviews } from '@/db/queries/game';
import Image from 'next/image';
import { Rating } from '@mui/material';
import ReviewContent from './review-content';
import RatingCard from '@/components/game/rating-card';

const GameContent = ({ game }: { game: GameWithReviews }) => {
  return (
    <>
      <div className='flex gap-2'>
        <section className='bg-[#845EC2] text-white shadow-2xl rounded'>
          <h1 className='text-center p-4'>{game.type}</h1>
          <Image
            src={
              'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
            }
            alt='Sample Image'
            width={900}
            height={300}
            objectFit='cover'
          />
          <div className='flex gap-2 p-2'>
            <p>Brukeres vurdering av leken</p>
            <Rating
              name='read-only'
              value={
                game.Review.map((r) => r.rating).reduce((a, b) => a + b, 0) /
                game.Review.filter((r) => !!r.rating).length
              }
              readOnly
            />
          </div>
        </section>
        <RatingCard game={game.id} />
      </div>

      <h2 className='text-4xl'>{game.name}</h2>
      <p>{game.description}</p>

      {game.Review.map((review) => (
        <ReviewContent key={review.id} review={review} />
      ))}
    </>
  );
};

export default GameContent;
