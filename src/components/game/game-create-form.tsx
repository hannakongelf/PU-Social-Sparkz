'use client';

import { useFormState } from 'react-dom';
import * as actions from '@/actions';

interface GameCreateFormProps {}

const GameCreateForm = () => {
  const [formState, action] = useFormState(actions.createGame, {
    errors: {},
  });
};

export default GameCreateForm;
