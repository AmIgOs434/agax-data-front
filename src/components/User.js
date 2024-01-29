

import { useEffect } from 'react';
import useState from 'react-usestateref'
import { login2 } from '../https/deviceAPI';
import { jwtDecode } from "jwt-decode";
import $ from "jquery";
import { useNavigate } from 'react-router-dom';
import { GLAV_ROUTE, MENU_ROUTE } from '../utils/consts';
function User() {
    const navigate = useNavigate()
  useEffect(() => {

if(setuserRef.current==0){
    get1()
}
   

  })


  
  const [user,setuser,setuserRef] = useState(0)



  const get1 = async() => {
   
      const storedToken = localStorage.getItem('token');
   
      if(storedToken==null || storedToken==undefined){
        navigate(GLAV_ROUTE)
   
        $('.info').addClass('d_none')
        $('.login').removeClass('none')
      }else{
        const user = jwtDecode(storedToken)
        setuser(user)
        $('.login').addClass('none')
        $('.info').removeClass('d_none')
     
      }
    
      }


  const out = async() => {
    navigate(MENU_ROUTE)
  }
 
  return (
    <div className="App">
      <h1 class='color'>AGAX-DATA.RU</h1>
      <div class='display_flex'>
      

<div class='info'>
  

  <div class='user_info'>
  <h2 class='polzovatel'>Пользователь</h2>

  <div class='infos infos33'>
    <div class='title title33'>
    ФИО :
    </div>
    <div class='description description33'>
    {setuserRef?.current?.name}
      </div>
  </div>
  <div class='infos infos33'>
    <div class='title title33'>
     Логин :
    </div>
    <div class='description description33'>
    {setuserRef?.current?.login}
      </div>
  </div>

  <div class='infos infos33'>
    <div class='title title33'>
     Почта :
    </div>
    <div class='description description33'>
      {setuserRef?.current?.email}
      </div>
  </div>

  <div class='infos infos33'>
    <div class='title title33'>
     Телефон :
    </div>
    <div class='description description33'>
    {setuserRef?.current?.phone}
      </div>
  </div>
  <div onClick={out} type="submit" class="width btn btn-primary btn-block btn-large">Выход</div>
  </div>

</div>
</div>
    </div>
  );
}

export default User;
