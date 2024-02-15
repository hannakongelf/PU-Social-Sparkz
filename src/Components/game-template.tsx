'use client';
import * as React from 'react';
import * as actions from '@/actions';
import { useFormState } from 'react-dom';
import { usePathname } from 'next/navigation';

export default function GameTemplate() {
  const [formState, action] = useFormState(actions.createGame, {
    errors: {},
  });

  const path = usePathname();
  return (
    <form action={action} id='newGameForm' name='newGameForm' className=''>
      <h1>Make a new game!</h1>
      <p>
        Please fill out the fields below. Please note that some of the fields
        are required, while some are optional.
      </p>

      <p className='bg-red-500'>
        {formState.errors._form}
        {formState.errors.name}
      </p>

      <div>
        <label htmlFor='name'>Game name:</label>
        <br></br>
        <input type='text' id='gname' name='name' required />
        <br></br>
      </div>

      <div>
        <label htmlFor='pic'>Upload a picture-url</label>
        <br></br>
        <input type='text' id='pic' name='pic' />
        <br></br>
      </div>

      <div>
        <label htmlFor='description'>Game description:</label>
        <br></br>
        <textarea id='desc' name='description' rows={4} cols={50} required />
        <br></br>
      </div>

      <div>
        <label htmlFor='equipment'>Equipment list:</label>
        <br></br>
        <textarea
          id='equipment'
          name='equipment'
          rows={4}
          cols={50}
          className='content-\2022 block '
        />
        <br></br>
      </div>

      <div>
        <label htmlFor='minplayers'>Minimum number of players:</label>
        <br></br>
        <input
          type='number'
          id='minplayers'
          name='minplayers'
          value={1}
          required
        />
        <br></br>
        <label htmlFor='maxplayers'>Maximum number of players:</label>
        <br></br>
        <input type='number' id='maxplayers' name='maxplayers' required />
        <br></br>
      </div>

      <div>
        <label htmlFor='gcategory'>Choose a suitable category:</label>
        <br></br>
        <select id='gcategory' name='gcategory' required>
          <option value='CARD'>Card</option>
          <option value='pregame'>Pregame</option>
          <option value='boardgames'>Boardgames</option>
        </select>
        <br></br>
      </div>

      <div>
        <button
          type='submit'
          className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'
        >
          Create game
        </button>
      </div>
    </form>
  );
}
