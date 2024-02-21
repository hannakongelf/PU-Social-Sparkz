'use client';

import * as React from 'react';
import Input from '../common/input';
import { Button } from '@mui/material';
import { useFormState } from 'react-dom';
import * as actions from '@/actions';

export default function GameTemplate() {
  const [formState, action] = useFormState(actions.createGame, {
    errors: {},
  });

  return (
    <form action={action}>
      <h1>Make a new game!</h1>
      <p>
        Please fill out the fields below. Please note that some of the fields
        are required, while some are optional.
      </p>

      <div className='flex flex-col'>
        <label htmlFor='name'>Game name:</label>
        <Input name='name' required error={!!formState.errors.name}></Input>
        <p className='bg-red-500 text-white'>{formState.errors.name}</p>
      </div>

      <div className='flex flex-col'>
        <label htmlFor='pic'>Upload a picture-url</label>
        <Input name='pic'></Input>
      </div>

      <div className='flex flex-col'>
        <label htmlFor='description'>Game description:</label>
        <textarea id='desc' name='description' rows={4} cols={50} required />
        <p className='bg-red-500 text-white'>(formState.errors.description)</p>
      </div>

      <div className='flex flex-col'>
        <label htmlFor='minplayers'>Minimum number of players:</label>
        <Input
          type='number'
          name='minplayers'
          required
          error={!!formState.errors.playerMin}
        ></Input>
        <p className='bg-red-500 text-white'>{formState.errors.playerMin}</p>

        <label htmlFor='maxplayers'>Maximum number of players:</label>
        <Input
          type='number'
          name='maxplayers'
          required
          pattern='[0-9]*'
          error={!!formState.errors.playerMax}
        ></Input>
        <p className='bg-red-500 text-white'>
          {formState.errors.playerMax && formState.errors.playerMax[0]}
        </p>
      </div>

      <div className='flex flex-col'>
        <label htmlFor='minplayers'>Minimum number of players:</label>
        <input
          type='number'
          id='minplayers'
          name='minplayers'
          value={1}
          required
        />
        <label htmlFor='maxplayers'>Maximum number of players:</label>
        <input type='number' id='maxplayers' name='maxplayers' required />
      </div>

      <div>
        <Button
          type='submit'
          className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'
        >
          Create game
        </Button>
      </div>
    </form>
  );
}
