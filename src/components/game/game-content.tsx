'use client';

import { Rating } from '@mui/material';
import ReviewContent from '@/components/game/review-content';
import RatingCard from '@/components/game/rating-card';
import Image from 'next/image';
import { Game } from '@prisma/client';
import { ReviewWithAuthor } from '@/db/queries';

const GameContent = ({
  game,
  reviews,
}: {
  game: Game;
  reviews: ReviewWithAuthor[];
}) => {
  return (
    <>
      <div className='flex gap-2'>
        <section className='bg-[#845EC2] text-white shadow-2xl rounded'>
          <h1 className='text-center p-4'>{game.type}</h1>
          <Image
            src={
              game.image && game.image?.length > 0
                ? game.image
                : '/stock_game.jpg'
            }
            alt='Sample Image'
            width={900}
            height={300}
            objectFit='cover'
          />
          <div className='flex gap-2 p-2'>
            <div className='flex flex-col'>
              <p>Brukeres vurdering av leken</p>
              <p>
                Fra {game.playerMin} til {game.playerMax} spillere
              </p>
            </div>

            <Rating
              name='read-only'
              value={
                reviews.map((r) => r.rating).reduce((a, b) => a + b, 0) /
                reviews.filter((r) => !!r.rating).length
              }
              readOnly
            />
          </div>
        </section>
        <RatingCard game={game.id} />
      </div>

      <h2 className='text-4xl'>{game.name}</h2>
      <p>{game.description}</p>

      {reviews.map((review) => (
        <ReviewContent key={review.id} review={review} />
      ))}
    </>
  );
};

export default GameContent;
