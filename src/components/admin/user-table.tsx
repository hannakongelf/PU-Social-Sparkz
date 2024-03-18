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
import Link from 'next/link';
import { Button } from '@mui/material';
import { deleteUser } from '@/actions/delete/delete-user-action';

export default function UserTable({ users }: Readonly<{ users: User[] }>) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='right'>User ID</TableCell>
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
              <TableCell align='right'>{u.id}</TableCell>
              <TableCell align='right'>
                <Link className={'text-blue-500'} href={`/user/${u.id}`}>
                  {u.name}
                </Link>
              </TableCell>
              <TableCell align='right'>{u.email}</TableCell>
              <TableCell align='right'>
                <form action={() => deleteUser(u.id)}>
                  <Button type='submit'>Delete User</Button>
                </form>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
