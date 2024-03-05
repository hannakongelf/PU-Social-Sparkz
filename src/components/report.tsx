'use client';

import { Modal, TextField } from '@mui/material';
import { SetStateAction, Dispatch } from 'react';
import { useFormState } from 'react-dom';
import * as actions from '@/actions';
import { reportType } from '@prisma/client';

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
      <form action={action}>
        <TextField
          multiline
          name='report'
          label='Report'
          placeholder='Why do you wan tto report this?'
          error={!!formState.errors.report}
          helperText={formState.errors.report}
        />
      </form>
    </Modal>
  );
};

export default ReportForm;
