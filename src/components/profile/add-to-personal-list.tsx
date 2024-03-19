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

interface AddPersonalList {
  gameId: number;
  userLists: Queue[];
}

const AddToPersonalList = ({ gameId, userLists }: AddPersonalList) => {
  const session = useSession();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);

  if (!session) return null;
  else if (session.data?.user)
    return (
      <>
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
        {showMenu && (
          <List>
            {userLists.map((list) => {
              return (
                <form
                  action={addToPersonalList.bind(null, gameId, list.id)}
                  key={list.id}
                >
                  <ListItem>
                    <ListItemText primary={list.name} />
                  </ListItem>
                </form>
              );
            })}

            <ListItem
              onClick={() => setShowForm(!showForm)}
              className='hover:cursor-pointer'
            >
              <ListItemText primary='Create new personal list' />
            </ListItem>
          </List>
        )}
        {showForm && <CreatePersonalList />}
      </>
    );
};

export default AddToPersonalList;
