import { useEffect, useRef, useState } from "react";
import { IUser } from "../Interfaces/IUser";
import { IGameProps } from "../Interfaces/IGame";

function GameTenis({
  player1,
  player2,
  addHomePoint,
  addVisitorPoint,
}: IGameProps) {
  const [service, setService] = useState<Omit<IUser, "username">>(player2);
  const Mesa = useRef<HTMLDivElement>(null);
  const Pelota = useRef<HTMLDivElement>(null);
  const [pelotaPosition, setPelotaPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState(1);
  const [turno, setTurno] = useState<Omit<IUser, "username">>(player2);
  const [start, setStart] = useState(false);
  const [lastHitPlayer, setLastHitPlayer] = useState<Omit<
    IUser,
    "username"
  > | null>(null);

  
  const pelotaVelocity = 25;
  const speed = 5;

  useEffect(() => {
    if (service.id === player1.id) {
      setPelotaPosition({ x: 50, y: 20 });
      setDirection(1);
      setLastHitPlayer(player1);
    } else {
      setPelotaPosition({ x: 900, y: 20 });
      setDirection(-1);
      setLastHitPlayer(player2);
    }
    setStart(false);
    setTurno(service);
  }, [service, player1.id, player2.id]);

  // Efecto para el movimiento de la pelota
  useEffect(() => {
    if (!start) return;

    let intervalId: any;

    if (Mesa.current && Pelota.current) {
      const mesaWidth = Mesa.current.clientWidth;
      const pelotaWidth = Pelota.current.clientWidth || 24;

      intervalId = setInterval(() => {
        setPelotaPosition((prev) => {
          let newX = prev.x + speed * direction;
          if (newX >= mesaWidth - pelotaWidth) {
            if (lastHitPlayer?.id !== player2.id) {
              addHomePoint();
              setService(player1);
            } else {
              addVisitorPoint();
              setService(player2);
            }
            setStart(false);
            return prev;
          } else if (newX <= 0) {
            if (lastHitPlayer?.id !== player1.id) {
              addVisitorPoint();
              setService(player2);
            } else {
              addHomePoint();
              setService(player1);
            }
            setStart(false);
            return prev;
          }

          return {
            x: newX,
            y: prev.y,
          };
        });
      }, pelotaVelocity);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [
    start,
    direction,
    speed,
    pelotaVelocity,
    service.id,
    player1.id,
    player2.id,
    lastHitPlayer,
  ]);

  useEffect(() => {
    if (!start) {
      if (service.id === player1.id) {
        setPelotaPosition({ x: 50, y: 20 });
        setDirection(1);
        setLastHitPlayer(player1);
        setTurno(player1);
      } else {
        setPelotaPosition({ x: 900, y: 20 });
        setDirection(-1);
        setLastHitPlayer(player2);
        setTurno(player2);
      }
    }
  }, [start, service.id]);

  const handlePlayerClick = (playerClicked: Omit<IUser, "username">) => {
    if (!start && turno.id === playerClicked.id) {
      setStart(true);
      setLastHitPlayer(playerClicked);
    } else if (start) {
      if (
        playerClicked.id === player1.id &&
        direction < 0 &&
        pelotaPosition.x < 100
      ) {
        setDirection(1);
        setLastHitPlayer(player1);
        setTurno(player2);
      } else if (
        playerClicked.id === player2.id &&
        direction > 0 &&
        pelotaPosition.x > 900
      ) {
        setDirection(-1);
        setLastHitPlayer(player2);
        setTurno(player1);
      } else if (
        playerClicked.id === player1.id &&
        (pelotaPosition.x > 100 || direction > 0)
      ) {
        addVisitorPoint();

        setService(player2);
        setStart(false);
      } else if (
        playerClicked.id === player2.id &&
        (pelotaPosition.x < 900 || direction < 0)
      ) {
        addHomePoint();

        setService(player1);
        setStart(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="mb-4 text-white font-bold text-xl">Tabla de tenis</div>

      <div className="flex items-center justify-around w-full">
        <button
          className={`cursor-pointer px-4 py-2 rounded ${
            turno.id === player1.id && !start ? "bg-yellow-300" : "bg-amber-300"
          }`}
          onClick={() => handlePlayerClick(player1)}
        >
          Player 1 {service.id === player1.id ? "(Servicio)" : ""}
        </button>

        <div className="bg-blue-500 w-[1000px] h-40 relative" ref={Mesa}>
          <div
            ref={Pelota}
            className="absolute bg-green-500 rounded-full w-6 h-6"
            style={{
              left: `${pelotaPosition.x}px`,
              top: `${pelotaPosition.y}px`,
              transition: "left 0.1s linear",
            }}
          />
          {/* Zonas de golpeo visuales */}
          <div className="absolute left-0 h-full w-24 bg-yellow-200 opacity-20"></div>

          <div className="absolute right-0 h-full w-24 bg-yellow-200 opacity-20"></div>
        </div>

        <button
          className={`cursor-pointer px-4 py-2 rounded ${
            turno.id === player2.id && !start ? "bg-yellow-300" : "bg-amber-300"
          }`}
          onClick={() => handlePlayerClick(player2)}
        >
          Player 2 {service.id === player2.id ? "(Servicio)" : ""}
        </button>
      </div>

      <div className="mt-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded mx-2"
          onClick={() => {
            window.location.reload();
          }}
        >
          Reiniciar Juego
        </button>

        <button
          className="bg-purple-600 text-white px-4 py-2 rounded mx-2"
          onClick={() => {
            localStorage.removeItem("users");
            window.location.href = "/";
          }}
        >
          Salir del Juego
        </button>
      </div>

      <div className="mt-4 text-white text-sm">
        <p>
          Instrucciones: Haz clic en tu botón cuando la pelota esté en tu zona
          amarilla para devolverla.
        </p>
        <p>
          Si no devuelves la pelota a tiempo o golpeas fuera de tu zona, tu
          oponente gana un punto.
        </p>
      </div>
    </div>
  );
}

export default GameTenis;
