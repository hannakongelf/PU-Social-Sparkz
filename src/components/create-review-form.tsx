'use client';

import { useFormState } from 'react-dom';
import * as actions from '@/actions';
import Button from './common/button';

interface ReviewFormProps {
  gameId: number;
}

const ReviewForm = ({ gameId }: ReviewFormProps) => {
  const [formState, action] = useFormState(
    actions.createRating.bind(null, gameId),
    { errors: {} }
  );
  return (
    <form action={action}>
      <div className='flex flex-col'>
        <label htmlFor='rating'>Rating</label>
        <input type='number' id='rating' name='rating' />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='description'>Review</label>
        <input type='text' id='description' name='description' />
      </div>
      <Button type='submit'>Add review</Button>
    </form>
  );
};

export default ReviewForm;
