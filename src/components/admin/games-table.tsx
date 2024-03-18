import * as React from 'react';
import { Game } from '@prisma/client';
import Link from 'next/link';
import * as paths from '@/paths';
import * as actions from '@/actions';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForever from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';

export default function GamesTable({ data }: { data: Game[] }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align='right'>Created At</TableCell>
            <TableCell align='right'>Name</TableCell>
            <TableCell align='right'>Description</TableCell>
            <TableCell align='right'>Category</TableCell>
            <TableCell align='right'>Max players</TableCell>
            <TableCell align='right'>Min players</TableCell>
            <TableCell align='right'>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((game) => (
            <TableRow
              key={game.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {game.id}
              </TableCell>
              <TableCell align='right'>
                {game.createdAt.toUTCString()}
              </TableCell>
              <TableCell align='right'>
                <Link
                  target='_blank'
                  href={paths.gamePath(game.id)}
                  className='border-b text-blue-500 border-blue-500'
                >
                  {game.name}
                </Link>
              </TableCell>
              <TableCell align='right' className='max-w-48 truncate'>
                {game.description.substring(0, 100)}
                {game.description.length > 100 ? '...' : null}
              </TableCell>
              <TableCell align='right'>{game.type}</TableCell>
              <TableCell align='right'>{game.playerMax}</TableCell>
              <TableCell align='right'>{game.playerMin}</TableCell>
              <TableCell align='right'>
                <form action={actions.deleteGame.bind(null, game.id)}>
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
}
