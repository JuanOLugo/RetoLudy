import { IUser } from "../../Interfaces/IUser"

class AuthControllers {
    public handleSubmit = (e: React.FormEvent, player1: IUser, player2: IUser) => {
    e.preventDefault()
    if (player1.username.trim() && player2.username.trim()) {
      alert(`¡Juego iniciado! ${player1.username} vs ${player2.username}`)
      localStorage.setItem("players", JSON.stringify([player1, player2]))
      if(!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify([player1, player2]))
      }
        window.location.href = "/"
    }
  }
}

export default AuthControllers