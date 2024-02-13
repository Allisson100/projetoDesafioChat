import { socket } from "../common/config/webSocketConnection";
import store from "../store";
import { addTokenCookie, getTokenCookie } from "../store/reducers/auth";

socket.on("add_user_db_success", () => {
	alert("Usuario cadastrado com sucesso");
});

socket.on("add_user_db_error", () => {
	alert("Erro ao cadastrar usuário");
});

socket.on("auth_success", (jwtToken) => {
	store.dispatch(addTokenCookie({ key: "jwtToken", value: jwtToken }));
	store.dispatch(getTokenCookie("jwtToken"));
	window.location.href = "/";
});

socket.on("auth_error", () => {
	alert("Erro ao tentar autenticar usuário");
});

socket.on("user_not_found", () => {
	alert("O nome de usuário não existe");
});

socket.on("user_already_exist", () => {
	alert("Esse nome de usuário já existe no banco de dados, tente outro nome!");
});
