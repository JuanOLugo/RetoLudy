import { useState } from "react";
import GameScoreBoard from "../../components/GameScoreboard";
import GameTenis from "../../components/GameTenis";
function GamePage() {
  const [homeScore, setHomeScore] = useState(0);
  const [visitorScore, setVisitorScore] = useState(0);

  const addHomePoints = () => {
    if (homeScore == 40 && visitorScore === 40) {
      setVisitorScore(visitorScore - 10);
      return;
    }
    if (homeScore == 30) {
      setHomeScore(homeScore + 10);
    } else {
      setHomeScore(homeScore + 15);
    }
  };

  const addVisitorPoints = () => {
    if (homeScore == 40 && visitorScore == 40) {
      setHomeScore(homeScore - 10);
      return;
    }
    if (visitorScore == 30) {
      setVisitorScore(visitorScore + 10);
    } else {
      setVisitorScore(visitorScore + 15);
    }
  };

  const Players = JSON.parse(localStorage.getItem("users") || "[]");
  if (!Players.length) {
    localStorage.removeItem("users");
    window.location.href = "/";
  }

  const player1 = Players[0];
  const player2 = Players[1];

  if (!player1 || !player2) {
    localStorage.removeItem("users");
    window.location.href = "/";
  }

  return (
    <div className="bg-red-400">
      <GameScoreBoard
        player1={player1}
        player2={player2}
        homeScore={homeScore}
        visitorScore={visitorScore}
      />
      <GameTenis
        player1={player1}
        player2={player2}
        addHomePoint={addHomePoints}
        addVisitorPoint={addVisitorPoints}
      />
    </div>
  );
}

export default GamePage;
