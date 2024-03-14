"use client";

import * as React from "react";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
import { Button, Paper, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

const PersonalList = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [formState, action] = useFormState(actions.createPersonalList, {
    errors: {},
  });

  return (
    <div className="flex-col justify-center mt-10">
      <div className="flex justify-center pt-8 pb-8 bg-[#845EC2] bg-im">
        <h1 className="text-4xl flex justify-center text-white">
          Create a new personal list!
        </h1>
      </div>

      <Paper elevation={3} className="flex justify-center mb-5 pb-10">
        <form action={action} noValidate className="w-4/5">
          <div className="flex flex-col mb-3">
            <label htmlFor="name">
              Name for your personal list:{" "}
              <span className="text-red-500">*</span>
            </label>
            <TextField
              name="name"
              error={!!formState.errors.name}
              helperText={formState.errors.name}
            />
            <div className="mt-3">
              <Button type="submit" variant="contained" className="mb-5">
                Create personal list
              </Button>
            </div>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default PersonalList;
