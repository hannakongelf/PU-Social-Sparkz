'use client';

import * as actions from '@/actions';
import { useSession } from 'next-auth/react';
import { StarRating } from '@/components/common';
import { Button, Paper, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useFormState } from 'react-dom';

export const RatingCard = ({ game }: { game: number }) => {
  const session = useSession();
  const [formState, action] = useFormState(
    actions.createRating.bind(null, game),
    {
      errors: {},
    }
  );

  if (session.status === 'loading') return null;
  return (
    <Paper
      elevation={3}
      className='text-center flex flex-col items-center justify-center p-4 gap-5 w-1/4'
    >
      {session.data?.user ? (
        <form action={action}>
          <Typography>What do you think about this game?</Typography>
          <StarRating precision={1} name='rating' />
          {formState?.errors.rating && (
            <p className='text-xs text-red-500'>{formState.errors.rating}</p>
          )}

          <div className='py-4'>
            <TextField
              id='description'
              name='description'
              label='Description'
              error={!!formState?.errors.description}
              helperText={formState?.errors.description}
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
      ) : (
        <section>
          <Typography>You have to be signed in to rate this game.</Typography>

          <form action={actions.signIn} className='pt-5'>
            <Button variant='contained' type='submit'>
              Sign in
            </Button>
          </form>
        </section>
      )}
    </Paper>
  );
};
