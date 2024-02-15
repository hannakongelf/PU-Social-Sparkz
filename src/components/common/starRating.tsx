"use client";

import React from "react";
import Rating from "@mui/material/Rating";
import { styled } from '@mui/material/styles';


const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#845EC2',
  },
  '& .MuiRating-iconHover': {
    color: '#845FF9',
  },
});

export default function CustomizedRating() {
  return (

      <StyledRating
        defaultValue={3}
        precision={1}
      />
  );
}
