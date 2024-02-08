"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Game } from "@prisma/client";
import { useRouter } from "next/navigation";

export default function GameTemplate() {
    const router = useRouter();

    return (
        <form className="">
            
            <div>
                <label htmlFor="gname">Game name:</label><br></br>
                <input type="text" id="gname" name="gname"></input><br></br>
            </div>

            <div>
                <label htmlFor="pic">Upload a picture-url</label><br></br>
                <input type="text" id="pic" name="pic"></input><br></br>
            </div>

            <div>
                <label htmlFor="desc">Game description:</label><br></br>
                <textarea id="desc" name="desc" rows={4} cols={50}></textarea><br></br>
            </div>

            <div>
                <label htmlFor="equipment">Equipment list:</label><br></br>
                <textarea id="equipment" name="equipment" rows={4} cols={50} className="content-\2022 block "></textarea><br></br>
            </div>

            <div>
                <label htmlFor="minplayers">Minimum number of players:</label><br></br>
                <input type="number" id="minplayers" name="minplayers" value={1}></input><br></br>
                <label htmlFor="maxplayers">Maximum number of players:</label><br></br>
                <input type="number" id="maxplayers" name="maxplayers"></input><br></br>
            </div>

            <div>
                <label htmlFor="gcategory">Choose a suitable category:</label><br></br>
                <select id="gcategory" name="gcategory">
                    <option value="music">Music</option>
                    <option value="pregame">Pregame</option>
                    <option value="boardgames">Boardgames</option>
                </select><br></br>
            </div>

        
        </form>
    )
}