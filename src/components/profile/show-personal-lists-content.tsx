"use client";

import PersonalListCard from "./show-personal-lists-template";
import Paper from "@mui/material/Paper";
import { QueueWithGames } from "@/db/queries";

export default function PersonalListContent({
  personalLists,
}: {
  personalLists: QueueWithGames[];
}) {
  if (!personalLists) return null;
  return (
    <div>
      <Paper
        elevation={1}
        className="pt-1 pb-1 pr-6 pl-6 mb-8 mt-10  flex justify-between"
      ></Paper>

      <div className="grid grid-cols-5 gap-5">
        {personalLists.map((l) => (
          <PersonalListCard personalList={l} key={l.id} />
        ))}
      </div>
    </div>
  );
}
