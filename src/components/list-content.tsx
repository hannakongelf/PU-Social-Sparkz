"use client";
import { useState, useEffect } from "react";
import ListCard from "@/components/list-card";
import Grid from "@/components/common/grid";
import { Button, TextField } from "@mui/material";
import { GameWithReviews } from "@/db/queries/game";
import { gameType } from "@prisma/client";

export default function ListContent({ games }: { games: GameWithReviews[] }) {
  const [filteredGames, setFilteredGames] = useState<GameWithReviews[]>(games);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState<gameType | null>(null);

  useEffect(() => {
    const filterGames = () => {
      let tempFilteredGames = games;

      if (searchTerm !== "") {
        tempFilteredGames = tempFilteredGames.filter((game) =>
          game.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (category !== null) {
        tempFilteredGames = tempFilteredGames.filter(
          (g: GameWithReviews) => g.type === category
        );
      }

      setFilteredGames(tempFilteredGames);
    };

    filterGames();
  }, [searchTerm, category, games]);
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="my-6 flex justify-center">
        <TextField
          id="outlined-basic"
          label="Søk"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="flex justify-center my-6 flex-wrap gap-2">
        {Object.values(gameType).map((t) => (
          <Button
            key={t}
            onClick={() => {
              setCategory(t);
            }}
          >
            {t}
          </Button>
        ))}
        <Button
          onClick={() => {
            setCategory(null);
          }}
        >
          Reset
        </Button>
      </div>

      <Grid className="grid-cols-5 gap-5">
        {filteredGames.map((g) => (
          <ListCard game={g} key={g.id} />
        ))}
      </Grid>
    </div>
  );
}
