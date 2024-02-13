"use client";
import * as React from "react";
import { useRouter } from "next/navigation";


export default function GameTemplate() {
    const router = useRouter();

    return (
        <form id="newGameForm" name="newGameForm" className="">
            
            <h1>
                Make a new game!
            </h1>
            <p>
                Please fill out the fields below. Please note that some of the fields are required, while some are optional.
            </p>

            <div>
                <label htmlFor="gname">Game name:</label><br></br>
                <input type="text" id="gname" name="gname" required></input><br></br>
            </div>

            <div>
                <label htmlFor="pic">Upload a picture-url</label><br></br>
                <input type="text" id="pic" name="pic"></input><br></br>
            </div>

            <div>
                <label htmlFor="desc">Game description:</label><br></br>
                <textarea id="desc" name="desc" rows={4} cols={50} required></textarea><br></br>
            </div>

            <div>
                <label htmlFor="equipment">Equipment list:</label><br></br>
                <textarea id="equipment" name="equipment" rows={4} cols={50} className="content-\2022 block "></textarea><br></br>
            </div>

            <div>
                <label htmlFor="minplayers">Minimum number of players:</label><br></br>
                <input type="number" id="minplayers" name="minplayers" value={1} required></input><br></br>
                <label htmlFor="maxplayers">Maximum number of players:</label><br></br>
                <input type="number" id="maxplayers" name="maxplayers" required></input><br></br>
            </div>

            <div>
                <label htmlFor="gcategory">Choose a suitable category:</label><br></br>
                <select id="gcategory" name="gcategory" required>
                    <option value="music">Music</option>
                    <option value="pregame">Pregame</option>
                    <option value="boardgames">Boardgames</option>
                </select><br></br>
            </div>

            <div>
                <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Create game</button>
            </div>
        
        </form>
    )
}