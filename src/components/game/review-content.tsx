"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { Button, Rating, TextField } from "@mui/material";
import { FlagOutlined, Send } from "@mui/icons-material";
import ReportForm from "@/components/report-form";
import * as actions from "@/actions";
import StarRating from "@/components/common/star-rating";
import { ReviewWithAuthor } from "@/db/queries";
import { User } from "@prisma/client";

const ReviewContent = ({
  review,
  user,
}: {
  review: ReviewWithAuthor;
  user: User;
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
    <div className="border border-sky-500 my-2 p-2">
      <section className="flex justify-between">
        <div>
          <h3>{review.author.name}</h3>
          {!edit && (
            <Rating
              name="read-only"
              value={review.rating}
              readOnly
              className="margin-y-3"
            />
          )}
        </div>
        <div className="flex content-start space-x-1">
          {user?.id && user?.id === review.author.id && (
            <Button
              onClick={() => setEdit(!edit)}
              className="size-8"
              variant="outlined"
              color="error"
            >
              {edit ? "Cancel" : "Edit"}
            </Button>
          )}
          {review?.author.id !== user?.id && (
            <Button
              onClick={() => setOpen(true)}
              className="size-8"
              variant="outlined"
              color="error"
            >
              <FlagOutlined />
            </Button>
          )}
        </div>
        <ReportForm
          type="REVIEW"
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
          className="flex flex-col gap-4"
          onSubmit={() => {
            setEdit(false);
          }}
        >
          <StarRating
            precision={1}
            name="rating"
            defaultValue={review.rating}
          />
          <TextField
            id="description"
            name="description"
            label="Description"
            defaultValue={review.description}
            error={!!formState?.errors.description}
            helperText={formState?.errors.description}
            multiline
            rows={4}
          />
          <Button
            variant="outlined"
            size="small"
            endIcon={<Send />}
            type="submit"
            className="mt-4"
          >
            Update Review
          </Button>
        </form>
      )}
    </div>
  );
};

export default ReviewContent;
