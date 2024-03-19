'use client';

import PersonalListCard from './lists-template';
import Paper from '@mui/material/Paper';
import { Queue } from '@prisma/client';

export default function PersonalListContent({ list }: { list: Queue[] }) {
  if (!list) return null;
  return (
    <div>
      <Paper
        elevation={1}
        className='pt-1 pb-1 pr-6 pl-6 mb-8 mt-10  flex justify-between'
      ></Paper>

      <div className='grid grid-cols-5 gap-5'>
        {list.map((l) => (
          <PersonalListCard list={l} key={l.id} />
        ))}
      </div>
    </div>
  );
}
