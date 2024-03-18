'use client';

import DeleteForever from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from 'next/link';
import * as paths from '@/paths';
import { deleteReview } from '@/actions';
import { ReviewWithAuthor } from '@/db/queries';

const ReviewTable = ({ reviews }: { reviews: ReviewWithAuthor[] }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Review ID</TableCell>
            <TableCell align='right'>Game ID</TableCell>
            <TableCell align='right'>Author</TableCell>
            <TableCell align='right'>Description</TableCell>
            <TableCell align='right'>Rating</TableCell>
            <TableCell align='right'>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reviews?.map((review) => (
            <TableRow
              key={review.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {review.id}
              </TableCell>
              <TableCell align='right'>
                <Link
                  className='border-b text-blue-500 border-blue-500'
                  href={paths.gamePath(review.gameId)}
                  target='_blank'
                >
                  {review.gameId}
                </Link>
              </TableCell>
              <TableCell align='right'>{review.author.name}</TableCell>
              <TableCell align='right'>
                {review.description ? (
                  <>
                    {review.description.substring(0, 100)}
                    {review.description.length > 100 ? '...' : null}
                  </>
                ) : (
                  'Undefined'
                )}
              </TableCell>
              <TableCell align='right'>{review.rating}</TableCell>
              <TableCell align='right'>
                <form action={() => deleteReview(review.id)}>
                  <IconButton type='submit' color='error'>
                    <DeleteForever />
                  </IconButton>
                </form>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReviewTable;
