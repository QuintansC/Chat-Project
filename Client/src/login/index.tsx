import './index.css';
import { ChangeEvent, useState } from 'react';
import { LoginServices } from '../services';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const [login, setLogin] = useState({
    user: '',
    password: '',
  })

  const onChange = ( value: ChangeEvent<HTMLInputElement>) => {
    setLogin({...login, [value.target.name]: value.target.value})
  }

  return (
    <form id='formLogin'>
      <h2>Tela de Login</h2>
      <div>
        <label htmlFor="user">Usuario</label>
        <input type="text" name="user" value={login.user} onChange={onChange}/>
        <label htmlFor="password" >Senha</label>
        <input type="password" name="password" value={login.password} onChange={onChange} autoComplete="off"/>
      </div>
      <button type='button' onClick={()=>LoginServices(login.user, login.password).then(()=>{ navigate('/chat') })}>Entrar</button>
    </form>
  )
}

export default Login