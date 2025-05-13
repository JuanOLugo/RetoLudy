"use client";

import { useEffect, useState } from "react";
import { IUser } from "../Interfaces/IUser";

export default function GameScoreBoard({
  player1,
  player2,
  homeScore,
  visitorScore,
}: {
  player1: IUser;
  player2: IUser;
  homeScore: number;
  visitorScore: number;
}) {
  const [IsDeuce, setIsDeuce] = useState(false);
  useEffect(() => {
    if (homeScore === visitorScore && visitorScore >= 40 && homeScore >= 40) {
      alert("Deuce");
      setIsDeuce(true);
    } else if (homeScore >= 50 && visitorScore < 50) {
      alert(`${player1.username} ha ganado el juego!`);
      window.location.reload();
    } else if (visitorScore >= 50 && homeScore < 50) {
      alert(`${player2.username} ha ganado el juego!`);
      window.location.reload();
    }
  }, [homeScore, visitorScore]);

  return (
    <div className="w-full  flex justify-center items-center ">
      {/* Scoreboard principal */}
      <div className="rounded-lg bg-black p-4 shadow-lg shadow-red-900/20 w-3xl">
        {/* Header del scoreboard */}
        <div className="mb-4 rounded-t-md bg-red-700 p-2 text-center">
          <h1 className="font-mono text-2xl font-bold tracking-wider text-white">
            Marcador del Juego
          </h1>
        </div>

        {/* Contenedor de puntuaciones */}
        <div className="flex justify-between w-full">
          {/* Home */}
          <div className="flex flex-col items-center w-full mx-2">
            <div className="mb-2 w-full rounded bg-gray-800 p-2 text-center">
              <h2 className="font-mono text-xl font-bold text-white">
                {player1.username}
              </h2>
            </div>
            <div className="flex h-24 w-full items-center justify-center rounded bg-black border-4 border-gray-700">
              <span
                className="font-mono text-6xl font-bold text-red-500"
                style={{ textShadow: "0 0 10px rgba(239, 68, 68, 0.7)" }}
              >
                {visitorScore == 40 && homeScore == 40
                  ? "Deuce"
                  : IsDeuce && homeScore > visitorScore
                  ? "AD"
                  : homeScore.toString().padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Visitor */}
          <div className="flex flex-col items-center  w-full mx-2">
            <div className="mb-2 w-full rounded bg-gray-800 p-2 text-center">
              <h2 className="font-mono text-xl font-bold text-white">
                {player2.username}
              </h2>
            </div>
            <div className="flex h-24 w-full items-center justify-center rounded bg-black border-4 border-gray-700">
              <span
                className="font-mono text-6xl font-bold text-red-500"
                style={{ textShadow: "0 0 10px rgba(239, 68, 68, 0.7)" }}
              >
                {visitorScore == 40 && homeScore == 40
                  ? "Deuce"
                  : IsDeuce && visitorScore > homeScore
                  ? "AD"
                  : visitorScore.toString().padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
