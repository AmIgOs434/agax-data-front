

import { useEffect } from 'react';
import useState from 'react-usestateref'
import { login2 } from '../https/deviceAPI';
import { jwtDecode } from "jwt-decode";
import $ from "jquery";
import { useNavigate } from 'react-router-dom';
import { DOSTUP_ROUTE, GLAV_ROUTE, MENU_ROUTE, VLADELETS_ROUTE } from '../utils/consts';
function All_scheta() {
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
    

      }else{
        const user = jwtDecode(storedToken)
        setuser(user)
    
      }
    
      }


  const out = async() => {
    navigate(MENU_ROUTE)
  }
  const your = async() => {
    navigate(VLADELETS_ROUTE)
  }
  const prosmotr = async() => {
    navigate(DOSTUP_ROUTE)
  }
  return (
    <div className="App">
      <h1 class='color'>AGAX-DATA.RU</h1>
      <div class='display_flex'>
      

<div class='info'>
  

  <div class='user_info'>
  <h2 class='polzovatel'>Счета</h2>

  <div onClick={your}  type="submit" class="width btn btn1 btn-primary btn-block btn-large">Ваши счета</div>
  <div onClick={prosmotr} type="submit" class="width btn btn1 btn-primary btn-block btn-large">Доступ к просмотру</div>


  <div onClick={out} type="submit" class="width btn btn-primary btn-block btn-large">Назад</div>
  </div>

</div>
</div>
    </div>
  );
}

export default All_scheta;
