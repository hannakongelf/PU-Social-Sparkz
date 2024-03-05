'use client';

import { Box, Button, Modal, TextField } from '@mui/material';
import { SetStateAction, Dispatch } from 'react';
import { useFormState } from 'react-dom';
import * as actions from '@/actions';
import { reportType } from '@prisma/client';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
      <Box sx={style}>
        <form action={action} className='space-y-4'>
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
      </Box>
    </Modal>
  );
};

export default ReportForm;
