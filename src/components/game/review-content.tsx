import { ReviewWithAuthor } from '@/db/queries';
import { Rating } from '@mui/material';

const ReviewContent = ({ review }: { review: ReviewWithAuthor }) => {
  return (
    <div className='border border-sky-500 my-2 p-2'>
      <h3>{review.author.name}</h3>
      <Rating
        name='read-only'
        value={review.rating}
        readOnly
        className='margin-y-3'
      />
      <p>{review.description}</p>
    </div>
  );
};

export default ReviewContent;
