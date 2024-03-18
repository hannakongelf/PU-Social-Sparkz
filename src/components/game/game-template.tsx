'use client';

import * as React from 'react';
import { useFormState } from 'react-dom';
import * as actions from '@/actions';
import { gameType } from '@prisma/client';
import { SelectChangeEvent } from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';

const GameTemplate = () => {
  const [formState, action] = useFormState(actions.createGame, {
    errors: {},
  });

  const [selectedCategory, setSelectedCategory] = React.useState('');

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
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
        <form action={action} noValidate className='w-4/5'>
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
            <TextField
              type='number'
              name='minplayers'
              required
              defaultValue={2}
              InputProps={{
                inputProps: {
                  min: 2,
                },
              }}
              error={!!formState.errors.playerMin}
              helperText={formState.errors.playerMin}
            />
          </div>

          <div className='flex flex-col mb-3'>
            <label htmlFor='maxplayers'>
              Maximum number of players: <span className='text-red-500'>*</span>
            </label>
            <TextField
              type='number'
              name='maxplayers'
              required
              defaultValue={2}
              InputProps={{
                inputProps: {
                  min: 2,
                },
              }}
              error={!!formState.errors.playerMax}
              helperText={formState.errors.playerMax}
            />
          </div>

          <div className='flex flex-col mb-3'>
            <label htmlFor='category'>
              Please select a suiting category for your game:
            </label>
          </div>
          <div>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id='category'>Category</InputLabel>
              <Select
                labelId='category'
                id='category'
                value={selectedCategory}
                label='Category'
                name='category'
                onChange={(e) => handleCategoryChange(e)}
                error={!!formState.errors.category}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                {Object.values(gameType).map((type, idx) => {
                  const formatType =
                    type[0].toUpperCase() + type.slice(1).toLowerCase();
                  return (
                    <MenuItem key={idx} value={type}>
                      {formatType}
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelperText>{formState.errors.category}</FormHelperText>
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
};

export default GameTemplate;
