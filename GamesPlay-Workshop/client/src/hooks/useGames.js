import { useState, useEffect } from "react";
import gamesAPI from "../api/games-api";

export function useGetAllGames() {

    const [games, setGames] = useState([]);

    useEffect(() => {

        (async () => { 
            const games = await gamesAPI.getAll()
            setGames(games)
        })()
    }, [])

    return [games, setGames];
}

export function useGetOneGame(gameId) {

    const [game, setGame] = useState({});

    useEffect(() => {

        (async () => { 
            const game = await gamesAPI.getOne(gameId)
            setGame(game)
        })()
    }, [gameId])

    return [game, setGame];
}