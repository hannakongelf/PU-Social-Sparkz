'use client';

import { SetStateAction, Dispatch } from 'react';
import { useFormState } from 'react-dom';
import * as actions from '@/actions';
import { reportType } from '@prisma/client';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ReportForm = ({
  open,
  setOpen,
  id,
  type,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  id: number;
  type: reportType;
}) => {
  const [formState, action] = useFormState(
    actions.createReport.bind(null, id, type),
    {
      errors: {},
    }
  );
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div className='absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 bg-white p-8 rounded shadow'>
        <form action={action} className='space-y-4'>
          <label htmlFor='report' className='font-bold'>
            {type[0].toUpperCase() + type.slice(1).toLowerCase()}
          </label>
          <TextField
            className='w-full'
            multiline
            minRows={4}
            name='report'
            label='Report'
            placeholder='Why do you want to report this?'
            error={!!formState.errors.report}
            helperText={formState.errors.report}
          />
          <Button
            className='w-full'
            type='submit'
            variant='contained'
            color='error'
          >
            Submit
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default ReportForm;
