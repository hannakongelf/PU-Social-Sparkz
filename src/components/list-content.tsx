"use client";
import { useState, useEffect } from "react";
import ListCard from "@/components/list-card";
import Grid from "@/components/common/grid";
import { TextField } from "@mui/material";
import { GameWithReviews } from "@/db/queries/game";

export default function ListContent({ games }: { games: GameWithReviews[] }) {
  const [filteredGames, setFilteredGames] = useState<GameWithReviews[]>(games);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredGames(games);
    } else {
      const filtered = games.filter((game) =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredGames(filtered);
    }
  }, [searchTerm, games]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Søk"
        variant="outlined"
        className="my-6"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Grid className="grid-cols-5 gap-5">
        {filteredGames.map((g) => (
          <ListCard game={g} key={g.id} />
        ))}
      </Grid>
    </>
  );
}
