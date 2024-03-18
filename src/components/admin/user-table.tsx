'use client';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { User } from '@prisma/client';
import IconButton from '@mui/material/IconButton';
import { deleteUser } from '@/actions/delete/delete-user-action';
import { DeleteForever } from '@mui/icons-material';

export default function UserTable({ users }: Readonly<{ users: User[] }>) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell align='right'>User name</TableCell>
            <TableCell align='right'>User email</TableCell>
            <TableCell align='right'>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((u) => (
            <TableRow
              key={u.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {u.id}
              </TableCell>
              <TableCell align='right'>{u.name}</TableCell>
              <TableCell align='right'>{u.email}</TableCell>
              <TableCell align='right'>
                <form action={() => deleteUser(u.id)}>
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
