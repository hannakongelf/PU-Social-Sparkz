'use client';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ReportWithContentAndAuthor } from '@/db/queries';
import { deleteGame, deleteReview } from '@/actions';
import Link from 'next/link';
import { Button, IconButton } from '@mui/material';
import { deleteReport } from '@/actions/delete/delete-report-action';
import * as paths from '@/paths';
import { DeleteForever } from '@mui/icons-material';

export default function ReportTable({
  reports,
}: {
  reports: ReportWithContentAndAuthor[];
}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align='right'>Reported By</TableCell>
            <TableCell align='right'>Description</TableCell>
            <TableCell align='right'>Content Type</TableCell>
            <TableCell align='right'>Object ID</TableCell>
            <TableCell align='right'>Object Description</TableCell>
            <TableCell align='right'>Delete reported item</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reports?.map((r) => (
            <TableRow
              key={r.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                <Link
                  href={paths.gamePath(r.gameId)}
                  target='_blank'
                  className='border-b text-blue-500 border-blue-500'
                >
                  {r.id}
                </Link>
              </TableCell>
              <TableCell align='right'>{r.author.name}</TableCell>
              <TableCell align='right'>{r.description}</TableCell>
              <TableCell align='right'>{r.contentType}</TableCell>
              <TableCell align='right'>{r.reportId}</TableCell>
              <TableCell align='right'>
                {r.contentDescription.substring(0, 100)}
                {r.contentDescription.length > 100 ? '...' : ''}
              </TableCell>
              <TableCell align='right'>
                {r.contentType === 'GAME' ? (
                  <form
                    action={() => {
                      deleteGame(r.reportId);
                      deleteReport(r.id);
                    }}
                  >
                    <IconButton type='submit' color='error'>
                      <DeleteForever />
                    </IconButton>
                  </form>
                ) : (
                  <form
                    action={() => {
                      deleteReview(r.reportId);
                      deleteReport(r.id);
                    }}
                  >
                    <IconButton type='submit' color='error'>
                      <DeleteForever />
                    </IconButton>
                  </form>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
