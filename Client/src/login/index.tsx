import './index.css';

const Login = () => {
  return (
    <form id="formLogin" method="post">
      <h2>Tela de Login</h2>
      <div>
        <label htmlFor="user">Usuario</label>
        <input type="text" name="user"/>
        <label htmlFor="password">Senha</label>
        <input type="password" name="senha" autoComplete="off"/>
      </div>
      <button>Entrar</button>
    </form>
  )
}

export default Login