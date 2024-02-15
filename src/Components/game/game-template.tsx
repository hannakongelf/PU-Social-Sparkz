'use client';

import * as React from 'react';
import Input from '../common/input';
import Button from '../common/button';
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

      <div className='flex-col'>
        <label htmlFor='gname'>Game name:</label>
        <Input name='gname' required></Input>
      </div>

      <div className='flex-col'>
        <label htmlFor='pic'>Upload a picture-url</label>
        <Input name='pic'></Input>
      </div>

      <div className='flex-col'>
        <label htmlFor='pic'>Upload a picture-url</label>
        <input type='text' id='pic' name='pic' />
      </div>

      <div className='flex-col'>
        <label htmlFor='description'>Game description:</label>
        <textarea id='desc' name='description' rows={4} cols={50} required />
      </div>

      <div className='flex-col'>
        <label htmlFor='minplayers'>Minimum number of players:</label>
        <Input type='number' name='minplayers' value={1} required></Input>
        <label htmlFor='maxplayers'>Maximum number of players:</label>
        <Input type='number' name='maxplayers' required></Input>
      </div>

      <div className='flex-col'>
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
