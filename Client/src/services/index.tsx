import axios from "axios";

const LoginServices = async (user: string, password: string) => {
    const resultado = await axios.post('http://localhost:3333/login', {
        user: user,
        password: password
    }, {
        headers: { 'Content-Type':  'application/json' }
    })

    return resultado
}

export { LoginServices }