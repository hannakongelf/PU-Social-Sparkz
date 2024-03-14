"use client";

import AddBoxIcon from "@mui/icons-material/AddBox";
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { useSession } from "next-auth/react";
import * as actions from "@/actions";
import { Dispatch, SetStateAction, useState } from "react";
import { Queue } from "@prisma/client";

interface AddPersonalList {
  gameId: number;
  userLists: Queue[];
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const AddToPersonalList = ({ gameId, userLists, setOpen }: AddPersonalList) => {
  const session = useSession();
  const [show, setShow] = useState<boolean>(false);

  if (!session) return null;
  else if (session.data?.user)
    return (
      <>
        <IconButton
          type="submit"
          aria-label="favorite"
          className="bg-purple-500"
        >
          <AddBoxIcon />
        </IconButton>
        {show ? (
          <List>
            {userLists.map((list) => {
              return (
                <form
                  action={actions.addToPersonalList.bind(null, gameId, list.id)}
                  key={list.id}
                >
                  <ListItem>
                    <ListItemText primary={list.name} />
                  </ListItem>
                </form>
              );
            })}

            <ListItem onClick={() => setOpen(true)}>
              <ListItemText primary="Create new personal list" />
            </ListItem>
          </List>
        ) : null}
      </>
    );
};

export default AddToPersonalList;
