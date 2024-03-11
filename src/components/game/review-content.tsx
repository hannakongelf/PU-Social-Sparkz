'use client';

import { ReviewWithAuthor } from '@/db/queries';
import { Button, Rating } from '@mui/material';
import { FlagOutlined } from '@mui/icons-material';
import ReportForm from '@/components/report-form';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

const ReviewContent = ({ review }: { review: ReviewWithAuthor }) => {
  const session = useSession()
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className='border border-sky-500 my-2 p-2'>
      <section className='flex justify-between'>
        <div>
          <h3>{review.author.name}</h3>
          <Rating
            name='read-only'
            value={review.rating}
            readOnly
            className='margin-y-3'
          />
        </div>
        {session.data?.user ?
          <>
            <Button
              onClick={() => setOpen(true)}
              className='size-8'
              variant='outlined'
              color='error'
            >
              <FlagOutlined />
            </Button>

            <ReportForm
              type='REVIEW'
              id={review.id}
              open={open}
              setOpen={setOpen}
            />
          </>
        : null}
      </section>
      <p>{review.description}</p>
    </div>
  );
};

export default ReviewContent;
