import { useState } from "react";
import { Trophy, Users, PlayCircle } from "lucide-react";
import { IUser } from "../Interfaces/IUser";
import AuthControllers from "../Controllers/Auth/Auth.c";
const { handleSubmit } = new AuthControllers();

export default function FormUserRegister() {
  const [player1, setPlayer1] = useState<IUser>({
    id: new Date().getTime(),
    username: "",
  });
  const [player2, setPlayer2] = useState<IUser>({
    id: new Date().getTime() * 2,
    username: "",
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-green-50 to-green-100 p-4">
      <div className="w-full max-w-md overflow-hidden rounded-lg border border-green-200 bg-white shadow-lg">
        {/* Header */}
        <div className="bg-green-600 p-4 text-white">
          <div className="flex items-center justify-center space-x-2">
            <Trophy className="h-6 w-6" />
            <h1 className="text-center text-xl font-bold">Tenis Game</h1>
            <Trophy className="h-6 w-6" />
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <form
            onSubmit={(e) => handleSubmit(e, player1, player2)}
            className="space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-green-600" />
                <label htmlFor="player1" className="font-medium">
                  Jugador 1
                </label>
              </div>
              <input
                id="player1"
                type="text"
                placeholder="Nombre del Jugador 1"
                value={player1.username}
                onChange={(e) =>
                  setPlayer1((prev) => ({ ...prev, username: e.target.value }))
                }
                required
                className="w-full rounded-md border border-green-200 px-3 py-2 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-green-600" />
                <label htmlFor="player2" className="font-medium">
                  Jugador 2
                </label>
              </div>
              <input
                id="player2"
                type="text"
                placeholder="Nombre del Jugador 2"
                value={player2.username}
                onChange={(e) =>
                  setPlayer2((prev) => ({ ...prev, username: e.target.value }))
                }
                required
                className="w-full rounded-md border border-green-200 px-3 py-2 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              />
            </div>
            <div className="border-t border-green-100 p-4">
              <button className="flex w-full items-center justify-center rounded-md bg-green-600 px-4 py-2 font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                <PlayCircle className="mr-2 h-5 w-5" /> Iniciar Juego
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
