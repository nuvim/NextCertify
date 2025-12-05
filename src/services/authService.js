import { getData } from "./api";

async function login(email, password) {
    const url = "/mocks/auth-mock.json";

    const data = await getData(url);

    const user = data.users.find(u => email === u.email && password === u.password);

    if (!user) {
        throw new Error("E-mail ou senha inválido!");
    }

    return user;
}

export default login;