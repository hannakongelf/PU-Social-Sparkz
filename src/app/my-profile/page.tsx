'use server';
import * as React from 'react';
import { GameWithReviews, getAllGames, getGameById, getReviewsByGame } from '@/db/queries';
import UserInfoBox from '@/components/my-profile/user-info-box';


export default async function Home() {
  return (

    <main className='flex justify-center items-center'>

        <UserInfoBox/>
        {/* <ListContent games={games} /> */}
        
    </main>
  );
}
