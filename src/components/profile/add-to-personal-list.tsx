'use client';

import AddBoxIcon from '@mui/icons-material/AddBox';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { Queue } from '@prisma/client';
import { addToPersonalList } from '@/actions';
import CreatePersonalList from './create-personal-list';
import IconButton from '@mui/material/IconButton/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { Tooltip } from '@mui/material';
import { useAutoAnimate } from '@formkit/auto-animate/react';

interface AddPersonalList {
  gameId: number;
  userLists: Queue[];
}

const AddToPersonalList = ({ gameId, userLists }: AddPersonalList) => {
  const session = useSession();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [animationParent] = useAutoAnimate();

  if (!session) return null;
  else if (session.data?.user)
    return (
      <div ref={animationParent}>
        <Tooltip title='Add to personal list'>
          <IconButton
            type='submit'
            aria-label='favorite'
            className='bg-purple-500'
            onClick={() => {
              setShowMenu(!showMenu);
              setShowForm(false);
            }}
          >
            <AddBoxIcon />
          </IconButton>
        </Tooltip>
        {showMenu && (
          <List className='flex flex-col items-center'>
            {userLists.map((list) => {
              return (
                <form
                  action={addToPersonalList.bind(null, gameId, list.id)}
                  key={list.id}
                  className='w-1/2 mb-2'
                >
                  <Button
                    type='submit'
                    variant='contained'
                    className='w-full text-center'
                  >
                    <ListItem className='justify-center'>
                      <ListItemText primary={list.name} />
                    </ListItem>
                  </Button>
                </form>
              );
            })}

            <Button
              variant='contained'
              onClick={() => setShowForm(!showForm)}
              className='hover:cursor-pointer w-1/2 mt-2'
            >
              <ListItemText
                primary='Create new personal list'
                className='text-center'
              />
            </Button>
          </List>
        )}
        {showForm && <CreatePersonalList gameId={gameId} />}
      </div>
    );
};

export default AddToPersonalList;
