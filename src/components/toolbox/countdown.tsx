'use client';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ChangeEvent, useState } from 'react';
import useCountDown from 'react-countdown-hook';

const buttonStyle = { marginRight: '10px' };

const Countdown = () => {
  const initialTime = 6 * 60 * 1000;
  const [timeLeft, actions] = useCountDown(initialTime, 100);
  const [customTime, setCustomTime] = useState<number>(6);

  const [hideTime, setHideTime] = useState(false);

  const handleCustomTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomTime(parseFloat(event.target.value));
  };

  const startCustomTimer = () => {
    const timeInMillis = customTime * 60 * 1000;
    actions.start(timeInMillis);
  };

  const formatTimeLeft = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.padStart(2, '0')}`;
  };

  return (
    <div className='flex flex-col items-center gap-2 align-bottom my-3'>
      {!hideTime && (
        <h1 id='time-left' className='text-5xl'>
          {formatTimeLeft(timeLeft)}
        </h1>
      )}
      <div className='flex-row'>
        <Button
          id='start'
          style={buttonStyle}
          onClick={() => actions.start(initialTime)}
        >
          Start
        </Button>
        <TextField
          label='Custom Time (min)'
          variant='outlined'
          type='number'
          value={customTime}
          onChange={handleCustomTimeChange}
          size='small'
          style={buttonStyle}
        />
        <Button
          id='start-custom'
          style={buttonStyle}
          onClick={startCustomTimer}
        >
          Start Custom
        </Button>
        <Button id='pause' style={buttonStyle} onClick={() => actions.pause()}>
          Pause
        </Button>
        <Button
          id='resume'
          style={buttonStyle}
          onClick={() => actions.resume()}
        >
          Resume
        </Button>
        <Button id='reset' style={buttonStyle} onClick={() => actions.reset()}>
          Reset
        </Button>
        <Button
          id='reset'
          style={buttonStyle}
          onClick={() => setHideTime(!hideTime)}
        >
          {hideTime ? 'Show timer' : 'Hide Timer'}
        </Button>
      </div>
    </div>
  );
};

export default Countdown;
