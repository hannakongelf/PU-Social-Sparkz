import { Rating } from "@mui/material";
import { Review } from "@prisma/client";

const ReviewContent = ({ review }: { review: Review }) => {
  return (
    <div className="border border-sky-500 my-2 p-2">
      <h3>{review.username}</h3>
      <Rating
        name="read-only"
        value={review.rating}
        readOnly
        className="margin-y-3"
      />
      <p>{review.description}</p>
    </div>
  );
};
export default ReviewContent;
