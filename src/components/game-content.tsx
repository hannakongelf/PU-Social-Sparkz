'use client';

import * as React from 'react';
import { GameWithReviews } from '@/db/queries/game';
import Image from 'next/image';

const GameContent = ({ game }: { game: GameWithReviews }) => {
  return (
    <>
      <Image
        src={
          'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
        }
        alt='Sample Image'
        width={500}
        height={300}
        objectFit='cover'
      />
      {game.type} {game.description}
    </>
  );
};

export default GameContent;
