

import { useEffect } from 'react';
import useState from 'react-usestateref'
import { get_scheta_dostup, get_scheta_your, login2 } from '../https/deviceAPI';
import { jwtDecode } from "jwt-decode";
import $ from "jquery";
import { useNavigate } from 'react-router-dom';
import { ALL_SCHETA_ROUTE, GLAV_ROUTE, MENU_ROUTE } from '../utils/consts';
function Dostup_schetov() {
    const navigate = useNavigate()
  useEffect(() => {

if(setschetaRef.current==null){
    get1()
}
   

  })


  
  const [scheta,setscheta,setschetaRef] = useState()
  const [schet_active,setschet_active,setschet_activeRef] = useState()
  

  const [kod_text,setkod_text,setkod_textRef] = useState()
  const [naimen,setnaimen,setnaimenRef] = useState()
  const [opisaniye,setopisaniye,setopisaniyeRef] = useState()
  const [poradok,setporadok,setporadokRef] = useState()
  const [rassil,setrassil,setrassilRef] = useState()
  const [sost,setsost,setsostRef] = useState()
  const [uvedoml,setuvedoml,setuvedomlRef] = useState()


  const active = async(item) => {

    setkod_text(item['Код текстовый'])
    setnaimen(item['Наименование'])
    setopisaniye(item['Описание'])
    setporadok(item['Порядок'])
    setrassil(item['Рассылать'])
    if(item['Рассылать']==null){
        setrassil('null')
    }
    if(item['Описание']==null){
        setopisaniye('null')
    }
    setsost(item['Состояние'])
    if(item['Уведомлять']==true){
        setuvedoml('true')
    }else{
        if(item['Уведомлять']==false){
            setuvedoml('false')
        }
    }
    

    setschet_active(setschetaRef?.current[0])
  }
  const get1 = async() => {
   
      const storedToken = localStorage.getItem('token');
    
      if(storedToken==null || storedToken==undefined){
        navigate(GLAV_ROUTE)
     
        $('.info').addClass('d_none')
        $('.login').removeClass('none')
      }else{
        const user = jwtDecode(storedToken)
      
        const scheta = await get_scheta_dostup(user.id)
     
        
        setscheta(scheta)

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

        $('.login').addClass('none')
        $('.info').removeClass('d_none')
    
      }
    
      }

   


  const out = async() => {
    navigate(ALL_SCHETA_ROUTE)
  }
 
  return (
    <div className="App">
      <h1 class='color'>AGAX-DATA.RU</h1>
      <div class='display_flex1'>
      
      <div class='info1'>
  

  <div class='user_info'>
  <h2 class='polzovatel'>Просмотр счетов</h2>

{
    setschetaRef?.current?.map(e=> 
        <div onClick={()=>active(e)} type="submit" class="width1 btn btn1 btn-primary btn-block btn-large">{e['Код текстовый']}
            </div>
    )
}
 
  <div onClick={out} type="submit" class="width1 btn  btn-primary btn-block btn-large">Назад</div>


  </div>

</div>
<div class='info2'>
  

  <div class='user_info user_info1'>
  <h2 class='polzovatel'>Счет № {setkod_textRef?.current}</h2>


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
</div>

</div>

  );
}

export default Dostup_schetov;
