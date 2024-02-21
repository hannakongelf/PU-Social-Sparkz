'use client';

import * as React from 'react';
import Input from '../common/input';

import { useFormState } from 'react-dom';
import * as actions from '@/actions';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

export default function GameTemplate() {
  const [formState, action] = useFormState(actions.createGame, {
    errors: {},
  });

  const [selectedCategory, setSelectedCategory] = React.useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <form action={action}>
      <h1>Make a new game!</h1>
      <p className='mb-4'>
        Please fill out the fields below. Please note that some fields are
        required, while others are optional.
      </p>

      <div className='flex flex-col mb-3'>
        <label htmlFor='name'>
          Game name: <span className='text-red-500'>*</span>
        </label>
        <Input name='name' required error={!!formState.errors.name}></Input>
        <p className='bg-red-500 text-white'>{formState.errors.name}</p>
      </div>

      <div className='flex flex-col mb-3'>
        <label htmlFor='pic'>Upload a picture-url:</label>
        <Input name='pic'></Input>
      </div>

      <div className='flex flex-col mb-3'>
        <label htmlFor='description'>
          Game description: <span className='text-red-500'>*</span>
        </label>
        <TextField id='desc' name='description' required />
      </div>

      <div className='flex flex-col mb-3'>
        <label htmlFor='minplayers'>
          Minimum number of players: <span className='text-red-500'>*</span>
        </label>
        <Input
          type='number'
          name='minplayers'
          required
          error={!!formState.errors.playerMin}
        ></Input>
        <p className='bg-red-500 text-white'>{formState.errors.playerMin}</p>
      </div>

      <div className='flex flex-col mb-3'>
        <label htmlFor='maxplayers'>
          Maximum number of players: <span className='text-red-500'>*</span>
        </label>
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

      <div className='flex flex-col mb-3'>
        <label htmlFor='category'>
          Please select a suiting category for your game:
        </label>
      </div>
      <div>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id='category'>Select a category:</InputLabel>
          <Select
            labelId='category'
            id='category'
            value={selectedCategory}
            label='Category'
            name='category'
            onChange={handleCategoryChange}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value='CARD'>Card</MenuItem>
            <MenuItem value='DICE'>Dice</MenuItem>
            <MenuItem value='PHONE'>Phone</MenuItem>
            <MenuItem value='OTHER'>Other</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className='mt-3'>
        <Button
          type='submit'
          className='text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'
        >
          Create game
        </Button>
      </div>
    </form>
  );
}
