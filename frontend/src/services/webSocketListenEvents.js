import { socket } from "../common/config/webSocketConnection";
import store from "../store";
import { addTokenCookie, getTokenCookie } from "../store/reducers/auth";
import { getUserContactsDb } from "../store/reducers/userContacts";
import { getUserMessagesDb } from "../store/reducers/userMessages";
import localStorageMethods from "../utils/localStorageMethods";
import webSocketEvents from "./webSocketEmitEvents";

socket.on("add_user_db_success", () => {
	alert("Usuario cadastrado com sucesso");
});

socket.on("add_user_db_error", () => {
	alert("Erro ao cadastrar usuário");
});

socket.on("auth_success", ({ jwtToken, username }) => {
	store.dispatch(addTokenCookie({ key: "jwtToken", value: jwtToken }));
	store.dispatch(getTokenCookie("jwtToken"));
	localStorageMethods.setItem("username", username);
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

socket.on("get_user_contacts_error", () => {
	alert("Erro ao buscar contatos do usuário");
});

socket.on("get_user_messages_error", () => {
	alert("Erro ao buscar mensagens do usuário");
});

socket.on("get_user_contacts_success", (contacts) => {
	store.dispatch(getUserContactsDb(contacts));
});

socket.on("get_user_messages_success", (messages) => {
	store.dispatch(getUserMessagesDb(messages));
});

socket.on("delete_user_contacts_success", (username) => {
	webSocketEvents.getContactsDb(username);
	alert("Usuário deletado com sucesso!");
});

socket.on("delete_user_contacts_error", () => {
	alert("Erro ao deletar contato!");
});