'use client';

import * as actions from '@/actions';
import { useSession } from 'next-auth/react';
import StarRating from '@/components/common/star-rating';
// import TextArea from '@/components/common/text-Area';
import { Button, Paper, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useFormState } from 'react-dom';

const RatingCard = ({ game }: { game: number }) => {
  const session = useSession();
  const [formState, action] = useFormState(actions.createRating.bind(null, 1), {
    errors: {},
  });

  if (session.status === 'loading') return null;
  else if (session.data?.user)
    return (
      <Paper
        elevation={3}
        className='text-center flex flex-col items-center justify-center p-4 gap-5 w-1/4'
      >
        <form action={action}>
          <Typography>What do you think about this game?</Typography>
          <StarRating name='rating' />

          {/* Will not be  implemented before milestone 2 */}
          {/* <TextArea/> */}
          <div className='py-4'>
            <TextField
              id='description'
              name='description'
              label='Description'
            />
          </div>

          <Button
            variant='outlined'
            size='small'
            endIcon={<SendIcon />}
            className='mt-4'
            type='submit'
          >
            Add your rating
          </Button>
        </form>
      </Paper>
    );
  else
    return (
      <Paper
        elevation={3}
        className='text-center flex flex-col items-center justify-center p-4 gap-5 w-1/4'
      >
        <section>
          <Typography>You have to be signed in to rate this game.</Typography>

          <form action={actions.signIn} className='pt-5'>
            <Button variant='contained' type='submit'>
              Sign in
            </Button>
          </form>
        </section>
      </Paper>
    );
};

export default RatingCard;
