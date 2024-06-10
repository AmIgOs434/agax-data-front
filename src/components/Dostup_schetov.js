

import { useEffect } from 'react';
import useState from 'react-usestateref'
import { get_scheta_dostup, get_scheta_your, login2 } from '../https/deviceAPI';
import { jwtDecode } from "jwt-decode";
import $ from "jquery";
import { useNavigate } from 'react-router-dom';
import { ALL_SCHETA_ROUTE, GLAV_ROUTE, MENU_ROUTE, SORT_BY_DATA_BD_ROUTE, USER_ROUTE } from '../utils/consts';
function Dostup_schetov() {
    const navigate = useNavigate()
  useEffect(() => {

if(setschetaRef.current==null){
    get1()
}
   

  })


  const [user,setuser,setuserRef] = useState(0)
  const [scheta,setscheta,setschetaRef] = useState()
  const [scheta_vladelet,setscheta_vladelet,setscheta_vladeletRef] = useState()
  
  const [schet_active,setschet_active,setschet_activeRef] = useState()
  

  const [kod_text,setkod_text,setkod_textRef] = useState()
  const [naimen,setnaimen,setnaimenRef] = useState()
  const [opisaniye,setopisaniye,setopisaniyeRef] = useState()
  const [poradok,setporadok,setporadokRef] = useState()
  const [rassil,setrassil,setrassilRef] = useState()
  const [sost,setsost,setsostRef] = useState()
  const [uvedoml,setuvedoml,setuvedomlRef] = useState()


  const active = async(item) => {

    navigate(SORT_BY_DATA_BD_ROUTE + '/' +item.Код) 
  }
  const get1 = async() => {
   
      const storedToken = localStorage.getItem('token');
    
      if(storedToken==null || storedToken==undefined){
        navigate(GLAV_ROUTE)
     
        $('.info').addClass('d_none')
        $('.login').removeClass('none')
      }else{
        const user = jwtDecode(storedToken)
    
    
        setuser(user.name)
        const scheta = await get_scheta_dostup(user.id)
        const scheta_vladelets = await get_scheta_your(user.id)
     
        setscheta(scheta)
        setscheta_vladelet(scheta_vladelets)



   if(scheta_vladelets[0]==undefined && scheta[0]==undefined){
      $('.width3').addClass('d_flex_')
   }
        if(setschetaRef?.current[0]==undefined){
            
        setkod_text('Нет данных')
        setnaimen('Нет данных')
        setopisaniye('Нет данных')
        setporadok('Нет данных')
        setrassil('Нет данных')
        setrassil('Нет данных')
        setopisaniye('Нет данных')
        setsost('Нет данных')
        setuvedoml('Нет данных')
        setuvedoml('Нет данных')
        setschet_active('Нет данных')    
        } else{
     setkod_text(setschetaRef?.current[0]['Код текстовый'])
        setnaimen(setschetaRef?.current[0]['Наименование'])
        setopisaniye(setschetaRef?.current[0]['Описание'])
        setporadok(setschetaRef?.current[0]['Порядок'])
        setrassil(setschetaRef?.current[0]['Рассылать'])
        if(setschetaRef?.current[0]['Рассылать']==null){
            setrassil('null')
        }
        if(setschetaRef?.current[0]['Описание']==null){
            setopisaniye('null')
        }
        setsost(setschetaRef?.current[0]['Состояние'])
        if(setschetaRef?.current[0]['Уведомлять']==true){
            setuvedoml('true')
        }else{
            if(setschetaRef?.current[0]['Уведомлять']==false){
                setuvedoml('false')
            }
        }
        setschet_active(setschetaRef?.current[0])
        }
 
        

  
    
      }
    
      }

   


  const out = async() => {
    navigate(MENU_ROUTE)
  }
 
  return (
    <div className="App" id='app'>
      <h1 class='color'>AGAX-DATA.RU: Финансы</h1>
      <div class='color1' onClick={()=>navigate(USER_ROUTE)}>{setuserRef?.current}</div>
      <h1 class='color mt_30'>Лицевые счета</h1>
      <div class='display_flex1'>
   <div class='info1'>
  

  <div class='user_info43'>

  <div onClick={out} type="submit" class="width1 width4 btn  bbt btn-primary btn-block btn-large">Назад</div>
  <div   class="width1 width2 width3 btn-block btn-large"> Счетов не найдено
            </div>
 {
    setscheta_vladeletRef?.current?.map(e=> 
        <div onClick={()=>active(e)}  class="width1 width2  btn-block btn-large">{`${e['Код текстовый']} - ${e['Наименование']}`}
            </div>
    )
}
{
    setschetaRef?.current?.map(e=> 
        <div onClick={()=>active(e)}  class="width1   btn-block btn-large">{`${e['Код текстовый']} - ${e['Наименование']}`}
            </div>
    )
}
 

<div onClick={out} type="submit" class="width1 width5 btn  bbt btn-primary btn-block btn-large">Назад</div>

  </div>

</div>
{/* <div class='info2'>
  

  <div class='user_info43 user_info1'>
  <h2 class='polzovatel21 polzovatel123'>Счет № {setkod_textRef?.current}</h2>


  <div class='infos'>
    <div class='title1'>
    Наименование :
    </div>
    <div class='description'>
   {setnaimenRef?.current}
      </div>
  </div>

  <div class='infos'>
    <div class='title1'>
    Описание :
    </div>
    <div class='description'>
    {setopisaniyeRef?.current}
      </div>
  </div>

  <div class='infos'>
    <div class='title1'>
    Порядок :
    </div>
    <div class='description'>
    {setporadokRef?.current}
      </div>
  </div>


  <div class='infos'>
    <div class='title1'>
    Рассылать :
    </div>
    <div class='description'>
    {setrassilRef?.current}
      </div>
  </div>


  <div class='infos'>
    <div class='title1'>
    Состояние :
    </div>
    <div class='description'>
    {setsostRef?.current}
      </div>
  </div>

  <div class='infos'>
    <div class='title1'>
    Уведомлять :
    </div>
    <div class='description'>
    {setuvedomlRef?.current}
      </div>
  </div>
  </div>
  </div>
 <h2 class='polzovatel polzovatel232'>Счет № {setkod_textRef?.current}</h2> */}
</div>

</div>

  );
}

export default Dostup_schetov;
