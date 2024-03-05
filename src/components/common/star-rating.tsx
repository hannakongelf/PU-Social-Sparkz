import { Rating, styled } from '@mui/material';

const StarRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#845EC2',
  },
  '& .MuiRating-iconHover': {
    color: '#845FF9',
  },
});

export default StarRating;
