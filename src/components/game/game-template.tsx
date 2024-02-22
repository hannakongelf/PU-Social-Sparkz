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
  Paper,
  Select,
  TextField,
} from '@mui/material';

export default function GameTemplate() {
  const [formState, action] = useFormState(actions.createGame, {
    errors: {},
  });

  const [selectedCategory, setSelectedCategory] = React.useState('');

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <div className='flex-col justify-center mt-10'>
      <div className='flex justify-center pt-8 pb-8 bg-[#845EC2] bg-im'>
        <h1 className='text-4xl flex justify-center text-white'>
          Create New Game
        </h1>
      </div>
      <Paper elevation={3} className='flex justify-center mb-5 pb-10'>
        <form action={action} className='w-4/5'>
          <p className='mb-4 mt-5 text-center'>
            Please fill out the fields below. Please note that some fields are
            required, while others are optional.
          </p>

          <div className='flex flex-col mb-3'>
            <label htmlFor='name'>
              Game name: <span className='text-red-500'>*</span>
            </label>
            <TextField
              name='name'
              error={!!formState.errors.name}
              helperText={formState.errors.name}
            />
          </div>

          <div className='flex flex-col mb-3'>
            <label htmlFor='pic'>Upload a picture-url:</label>
            <TextField
              error={!!formState.errors.image}
              helperText={formState.errors.image}
              name='pic'
            />
          </div>

          <div className='flex flex-col mb-3'>
            <label htmlFor='description'>
              Game description: <span className='text-red-500'>*</span>
            </label>
            <TextField
              id='desc'
              name='description'
              multiline
              minRows={3}
              error={!!formState.errors.description}
              helperText={formState.errors.description}
            />
          </div>

          <div className='flex flex-col mb-3'>
            <label htmlFor='minplayers'>
              Minimum number of players: <span className='text-red-500'>*</span>
            </label>
            <Input
              type='number'
              name='minplayers'
              required
              min={2}
              defaultValue={2}
              error={!!formState.errors.playerMin}
            />
            <p className='bg-red-500 text-white'>
              {formState.errors.playerMin}
            </p>
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
              min={2}
              defaultValue={2}
              error={!!formState.errors.playerMax}
            />
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
            <Button type='submit' variant='contained' className='mb-5'>
              Create game
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}
