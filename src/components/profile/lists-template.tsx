'use client';

import * as React from 'react';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as paths from '@/paths';
import { Queue } from '@prisma/client';

export default function PersonalListCard({ list }: { list: Queue }) {
  if (!list) return <div>You dont have any personal lists.</div>;
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: 'none',
        border: 'solid',
        borderWidth: '0px',
        borderTopWidth: '5px',
        borderBottomWidth: '5px',
        borderRadius: 0,
        borderColor: '#845EC2',
        '&:hover': {
          borderColor: 'darkpurple',
        },
      }}
      className='static content-center'
    >
      <Link href={paths.personalList(list.id)}>
        <CardMedia
          sx={{ height: 140 }}
          image={'/stock_game.jpg'}
          title={list.name}
        />
        <CardContent className='relative top-2'>
          <Typography gutterBottom variant='h5' component='div'>
            {list.name}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
