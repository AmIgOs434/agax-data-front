

import { useEffect } from 'react';
import useState from 'react-usestateref'
import { login2 } from '../https/deviceAPI';
import { jwtDecode } from "jwt-decode";
import $ from "jquery";
import { useNavigate } from 'react-router-dom';
import { MENU_ROUTE, USER_ROUTE } from '../utils/consts';
function Glav() {
    const navigate = useNavigate()
  useEffect(() => {

      
    if(setnumberRef.current==0){
      get()
      setnumber(1)
    }
    

  })
  const [number,setnumber,setnumberRef] = useState(0)
  const [login,setlogin,setloginRef] = useState(0)
  const [password,setpassword,setpasswordRef] = useState(0)
  const [alert,setalert,setalertRef] = useState()
  
  const [user,setuser,setuserRef] = useState(0)


  const get = async() => {
    

  const storedToken = localStorage.getItem('token');

  if(storedToken==null || storedToken==undefined){
 

  }else{
    const user = jwtDecode(storedToken)
    setuser(user)
    navigate(MENU_ROUTE)
 
  }

  }

  const get1 = async() => {
   
      const storedToken = localStorage.getItem('token');
  
      if(storedToken==null || storedToken==undefined){
      

      }else{
        const user = jwtDecode(storedToken)
        setuser(user)
        navigate(MENU_ROUTE)
      
      }
    
      }
  const login_ = async() => {
    if(setloginRef.current==0){
       setalert('Введите логин')
       
       return
    }

    if(setpasswordRef.current==0){
      setalert('Введите пароль')
      return
    }


    const token = await login2(setloginRef.current,setpasswordRef.current)
    if(token=='Пользователь не найден'){
      out()
      setalert('Пользователь не найден')
      return
    }
    if(token=='Указан неверный пароль'){
      out()
      setalert('Указан неверный пароль')
      return
    }else{
      const storedToken = localStorage.getItem('token')
    
      const userId = jwtDecode(token.token)
      // const userId = jwtDecode(storedToken)
  
      setuser(userId)
      setalert()
    }
    get1()
   
  }

  const out = async() => {
    localStorage.removeItem("token")
get1()
  }
 
  return (
    <div className="App">
      <h1 class='color'>AGAX-DATA.RU</h1>
      <div class='display_flex'>
      
     
<div class="login">
  <h1>Login</h1>
    <form >
      <input onChange={ e => setlogin(e.target.value)} type="text" name="u" placeholder="Логин" required="required" />
        <input onChange={ e => setpassword(e.target.value)} type="password" name="p" placeholder="Пароль" required="required" />
        <div onClick={login_} type="submit" class="btn btn-primary btn-block btn-large">Вход</div>
    </form>
    <div class='alert'>{setalertRef.current}</div>
</div>


</div>
    </div>
  );
}

export default Glav;
