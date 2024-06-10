

import { useEffect } from 'react';
import useState from 'react-usestateref'
import { login2 } from '../https/deviceAPI';
import { jwtDecode } from "jwt-decode";
import $ from "jquery";
import { useNavigate } from 'react-router-dom';
import { ALL_SCHETA_ROUTE, DOSTUP_ROUTE, GLAV_ROUTE, USER_ROUTE, ZADACHI_ROUTE } from '../utils/consts';
function Menu() {
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
    localStorage.removeItem("token")
get1()
  }

  const finansi = async() => {
    navigate(DOSTUP_ROUTE)
  }
  const zadachi = async() => {
    navigate(ZADACHI_ROUTE)
  }
  const profile = async() => {
    navigate(USER_ROUTE)
  }
  
  return (
    <div className="App">
      <h1 class='color'>AGAX-DATA.RU</h1>
      <div class='color1' onClick={()=>navigate(USER_ROUTE)}>{setuserRef?.current?.name}</div>
      <div class='display_flex'>
      

<div class='info'>
  

  <div class='user_info'>

<div class='but_1'>


  <div onClick={finansi} type="submit" class="width btn btn1 btn-primary btn-block btn-large">Финансы</div>
  <div onClick={zadachi} type="submit" class="width btn btn1 btn-primary btn-block btn-large">Задачи</div>
  {/* <div onClick={profile} type="submit" class="width btn btn1 btn-primary btn-block btn-large">Профиль</div> */}

  </div>
  <div onClick={out} type="submit" class="width btn btn-primary btn-block btn-large">Выход</div>
  </div>

</div>
</div>
    </div>
  );
}

export default Menu;
