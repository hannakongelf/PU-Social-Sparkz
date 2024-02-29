'use client';

import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

export const StarRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#845EC2',
  },
  '& .MuiRating-iconHover': {
    color: '#845FF9',
  },
});
