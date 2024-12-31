import { useState, useEffect } from "react"
import gamesAPI from "../api/games-api"
import LatestGame from "../games/LatestGame";

export default function Home() {

    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {
        (async () => {
            const games = await gamesAPI.getAll();
            setLatestGames(games);
        })()
    }, [])

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>
                {latestGames.length > 0 ?
                    latestGames.map(game => <LatestGame key={game._id} {...game} />)
                    :
                    <p className="no-articles">No games yet</p>
                }
            </div>
        </section>
    )
}