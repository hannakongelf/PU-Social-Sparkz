"use client";

import * as actions from "@/actions";
import { useSession } from "next-auth/react";
import StarRating from "@/components/common/star-Rating";
// import TextArea from '@/components/common/text-Area';
import { Button, Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const RatingCard = () => {
  const session = useSession();

  if (session.status === "loading") return null;
  else if (session.data?.user)
    return (
      <Paper
        elevation={3}
        className="text-center flex flex-col items-center justify-center p-4 gap-5 w-1/4"
      >
        <Typography>What do you think about this game?</Typography>
        <StarRating />

        {/* Will not be  implemented before milestone 2 */}
        {/* <TextArea/> */}

        <Button
          variant="outlined"
          size="small"
          endIcon={<SendIcon />}
          className="mt-4"
        >
          Add your rating
        </Button>
      </Paper>
    );
  else
    return (
      <Paper
        elevation={3}
        className="text-center flex flex-col items-center justify-center p-4 gap-5 w-1/4"
      >
        <section>
          <Typography>You have to be signed in to rate this game.</Typography>

          <form action={actions.signIn} className="pt-5">
            <Button variant="contained" type="submit">
              Sign in
            </Button>
          </form>
        </section>
      </Paper>
    );
};

export default RatingCard;
