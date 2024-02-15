'use client';
import * as React from 'react';
import Link from 'next/link';
import Input from './common/input';
import Button from './common/button';
import { usePathname } from 'next/navigation';

export default function GameTemplate() {
  const path = usePathname();
  return (
    <form id='newGameForm' name='newGameForm' className=''>
      <h1>Make a new game!</h1>
      <p>
        Please fill out the fields below. Please note that some of the fields
        are required, while some are optional.
      </p>

      <div>
        <label htmlFor='gname'>Game name:</label>
        <br></br>
        <Input name='gname' required></Input>
        <br></br>
      </div>

      <div>
        <label htmlFor='pic'>Upload a picture-url</label>
        <br></br>
        <Input name='pic'></Input>
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
        <label htmlFor='minplayers'>Minimum number of players:</label>
        <br></br>
        <Input type='number' name='minplayers' value={1} required></Input>
        <br></br>
        <label htmlFor='maxplayers'>Maximum number of players:</label>
        <br></br>
        <Input type='number' name='maxplayers' required></Input>
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
        <Button className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>
          Create game
        </Button>
      </div>
    </form>
  );
}
