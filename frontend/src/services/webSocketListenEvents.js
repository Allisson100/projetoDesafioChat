import { socket } from "../common/config/webSocketConnection";

socket.on("add_user_db_success", () => {
	alert("Usuario cadastrado com sucesso");
});

socket.on("add_user_db_error", () => {
	alert("Erro ao cadastrar usuário");
});