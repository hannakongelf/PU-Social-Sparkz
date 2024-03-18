'use client';

import { useState } from 'react';
import { useFormState } from 'react-dom';
import Send from '@mui/icons-material/Send';
import FlagOutlined from '@mui/icons-material/FlagOutlined';
import ReportForm from '@/components/report-form';
import * as actions from '@/actions';
import StarRating from '@/components/common/star-rating';
import { ReviewWithAuthor } from '@/db/queries';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ReviewContent = ({
  review,
  userId,
}: {
  review: ReviewWithAuthor;
  userId: string | null;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [formState, action] = useFormState(
    actions.createRating.bind(null, review.gameId),
    {
      errors: {},
    }
  );

  return (
    <div className='border border-sky-500 my-2 p-2'>
      <section className='flex justify-between'>
        <div>
          <h3>{review.author.name}</h3>
          {!edit && (
            <Rating
              name='read-only'
              value={review.rating}
              readOnly
              className='margin-y-3'
            />
          )}
        </div>
        <div className='flex content-start space-x-1'>
          {userId && userId === review.author.id && (
            <Button
              onClick={() => setEdit(!edit)}
              className='size-8'
              variant='outlined'
              color='error'
            >
              {edit ? 'Cancel' : 'Edit'}
            </Button>
          )}
          {review?.author.id !== userId && (
            <Button
              onClick={() => setOpen(true)}
              className='size-8'
              variant='outlined'
              color='error'
            >
              <FlagOutlined />
            </Button>
          )}
        </div>
        <ReportForm
          type='REVIEW'
          id={review.id}
          open={open}
          setOpen={setOpen}
        />
      </section>
      {!edit ? (
        <p>{review.description}</p>
      ) : (
        <form
          action={action}
          className='flex flex-col gap-4'
          onSubmit={() => {
            setEdit(false);
          }}
        >
          <StarRating
            precision={1}
            name='rating'
            defaultValue={review.rating}
          />
          <TextField
            id='description'
            name='description'
            label='Description'
            defaultValue={review.description}
            error={!!formState?.errors.description}
            helperText={formState?.errors.description}
            multiline
            rows={4}
          />
          <Button
            variant='outlined'
            size='small'
            endIcon={<Send />}
            type='submit'
            className='mt-4'
          >
            Update Review
          </Button>
        </form>
      )}
    </div>
  );
};

export default ReviewContent;
