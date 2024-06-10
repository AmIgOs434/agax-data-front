

import { useEffect } from 'react';
import useState from 'react-usestateref'
import { getProvodkiByPrihod, getProvodkiByRashod, login2 } from '../https/deviceAPI';
import { jwtDecode } from "jwt-decode";
import $ from "jquery";
import { useNavigate, useParams } from 'react-router-dom';
import { DOSTUP_ROUTE, GLAV_ROUTE, MENU_ROUTE, SORT_BY_DATA_BD_ROUTE, SORT_BY_RAZDEL, SORT_BY_RAZDEL1, USER_ROUTE, VLADELETS_ROUTE } from '../utils/consts';
import moment from 'moment';
function Sort_by_data_op_bd() {
    const navigate = useNavigate()
  useEffect(() => {

if(setuserRef.current==0){
    get1()
}
   

  })

  const [ras,setras,setrasRef] = useState()
  const [prih,setprih,setprihRef] = useState()

  const [schet,setschet,setschetRef] = useState()
  const [user,setuser,setuserRef] = useState(0)
  const {id} = useParams()


  const get1 = async() => {
    
     
    const storedToken = localStorage.getItem('token');

      if(storedToken==null || storedToken==undefined){
        navigate(GLAV_ROUTE)
    

      }else{
        const prihod = await getProvodkiByRashod(id)
        const rashod = await getProvodkiByPrihod(id)

        console.log(prihod)
        console.log(rashod)

        rashod.map(e=>prihod.push(e))
        prihod.sort(function(a,b){
          return new Date(b.Дата) - new Date(a.Дата);
        });
        
        console.log(prihod)
        const arr_3 =[{data:'',prihod:'',rashod:'',balans:'',info:''}]
        prihod.map( e =>{ 
              if(e['Приходный счет']==id && e['Расходный счет']!=id ){
                arr_3.push({data:e.Дата,kod:e.Код,prihod:parseFloat(e.Сумма),rashod:'',balans:'',info:`${e.Содержание} / ${e.Договор} / Внесено в БД: ${moment.utc(e.DateCreate).format('DD.MM.YYYY HH:mm:ss')}`})
              }
              if(e['Расходный счет']==id && e['Приходный счет']!=id ){
                arr_3.push({data:e.Дата,kod:e.Код,prihod:'',rashod:parseFloat(e.Сумма) ,balans:'',info:`${e.Содержание} / ${e.Договор} / Внесено в БД: ${moment.utc(e.DateCreate).format('DD.MM.YYYY HH:mm:ss')}`})
              }
 
              if(e['Расходный счет']==id && e['Приходный счет']==id ){
                arr_3.push({data:e.Дата,kod:e.Код,prihod:parseFloat(e.Сумма),rashod:parseFloat(e.Сумма),balans:'',info:`${e.Содержание} / ${e.Договор} / Внесено в БД: ${moment.utc(e.DateCreate).format('DD.MM.YYYY HH:mm:ss')}`})
              }
        })
        
         arr_3.sort(function(a,b){
          return   a.Код - b.Код;
        });
        arr_3.sort(function(a,b){
          return   new Date(a.data) - new Date(b.data);
        });
        arr_3.map(e=> e.data = moment.utc(e.data).format('DD.MM.YYYY') )



        const arr_4 =[{data:'',prihod:'',rashod:'',balans:'',info:''}]


        arr_3.map((item, index) =>{
          if(
           (
            arr_3[index].kod ==arr_3[index+1]?.kod  &&   
            arr_3[index].data ==arr_3[index+1]?.data  &&
            arr_3[index].info ==arr_3[index+1]?.info  &&
            arr_3[index].prihod ==arr_3[index+1]?.prihod  &&
            arr_3[index].rashod ==arr_3[index+1]?.rashod  )||

            ( 
                
                arr_3[index].kod ==arr_3[index+1]?.kod  &&   
                arr_3[index].data ==arr_3[index+2]?.data  &&
              arr_3[index].info ==arr_3[index+2]?.info  &&
              arr_3[index].prihod ==arr_3[index+2]?.prihod  &&
              arr_3[index].rashod ==arr_3[index+2]?.rashod  )||


              ( 
                  arr_3[index].kod ==arr_3[index+1]?.kod  &&   
                  arr_3[index].data ==arr_3[index+3]?.data  &&
                arr_3[index].info ==arr_3[index+3]?.info  &&
                arr_3[index].prihod ==arr_3[index+3]?.prihod  &&
                arr_3[index].rashod ==arr_3[index+3]?.rashod  )||

                (
                    arr_3[index].kod ==arr_3[index+1]?.kod  &&   
                    arr_3[index].data ==arr_3[index+4]?.data  &&
                  arr_3[index].info ==arr_3[index+4]?.info  &&
                  arr_3[index].prihod ==arr_3[index+4]?.prihod  &&
                  arr_3[index].rashod ==arr_3[index+4]?.rashod  )||

                  ( 
                      arr_3[index].kod ==arr_3[index+1]?.kod  &&   
                      arr_3[index].data ==arr_3[index+4]?.data  &&
                    arr_3[index].info ==arr_3[index+4]?.info  &&
                    arr_3[index].prihod ==arr_3[index+4]?.prihod  &&
                    arr_3[index].rashod ==arr_3[index+4]?.rashod  )||

                    ( 
                        arr_3[index].kod ==arr_3[index+1]?.kod  &&   
                        arr_3[index].data ==arr_3[index+5]?.data  &&
                      arr_3[index].info ==arr_3[index+5]?.info  &&
                      arr_3[index].prihod ==arr_3[index+5]?.prihod  &&
                      arr_3[index].rashod ==arr_3[index+5]?.rashod  )||


                      ( 
                          arr_3[index].kod ==arr_3[index+1]?.kod  &&   
                          arr_3[index].data ==arr_3[index+6]?.data  &&
                        arr_3[index].info ==arr_3[index+6]?.info  &&
                        arr_3[index].prihod ==arr_3[index+6]?.prihod  &&
                        arr_3[index].rashod ==arr_3[index+6]?.rashod  )||
                        
                        (
                            arr_3[index].kod ==arr_3[index+1]?.kod  &&   
                            arr_3[index].data ==arr_3[index+7]?.data  &&
                          arr_3[index].info ==arr_3[index+7]?.info  &&
                          arr_3[index].prihod ==arr_3[index+7]?.prihod  &&
                          arr_3[index].rashod ==arr_3[index+7]?.rashod  )||

                          ( 
                              arr_3[index].kod ==arr_3[index+1]?.kod  &&   
                              arr_3[index].data ==arr_3[index+8]?.data  &&
                            arr_3[index].info ==arr_3[index+8]?.info  &&
                            arr_3[index].prihod ==arr_3[index+8]?.prihod  &&
                            arr_3[index].rashod ==arr_3[index+8]?.rashod  )||

                            ( 
                                arr_3[index].kod ==arr_3[index+1]?.kod  &&   
                                arr_3[index].data ==arr_3[index+9]?.data  &&
                              arr_3[index].info ==arr_3[index+9]?.info  &&
                              arr_3[index].prihod ==arr_3[index+9]?.prihod  &&
                              arr_3[index].rashod ==arr_3[index+9]?.rashod  )||
                              
                              ( 
                                  arr_3[index].kod ==arr_3[index+1]?.kod  &&   
                                  arr_3[index].data ==arr_3[index+10]?.data  &&
                                arr_3[index].info ==arr_3[index+10]?.info  &&
                                arr_3[index].prihod ==arr_3[index+10]?.prihod  &&
                                arr_3[index].rashod ==arr_3[index+10]?.rashod  )
            ){
          }else{
            arr_4.push(arr_3[index])
          }
        })

            
      //   arr_4.map( (item) => {
      //     if(item.prihod < 0){
      //       item.prihod = - parseFloat(item.prihod)
      //     }
      // })

        arr_4.map( (item, index) => {
         
                arr_4[index].balans=  arr_4[index].rashod - arr_4[index].prihod

        })

        arr_4.map( (item, index) => {
          if(arr_4[index+1]!=undefined ){
            arr_4[index+1].balans = arr_4[index].balans + arr_4[index+1].balans
          }
        })
        
        let ras_ = 0
        let prih_ = 0
        arr_4.map( (item) => {
       

          if(item.rashod<0){
       ras_ = ras_ - ( -item.rashod)
          }else{
            ras_ = ras_ - ( -item.rashod)
          }
        

          if(item.rashod<0){
            prih_ = prih_ - item.prihod
          }else{
            prih_ = prih_ - (-item.prihod) 
           
          }
     })


  setras(ras_)
  setprih(prih_)


  arr_4.map( (item) => {
            item.balans=  item.balans.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})
  })
 arr_4.map( (item) => {
          if(item.balans==0){
            item.balans= null
          }

  })
  arr_4.map( (item) => {
          if(item.rashod!='' ){
            item.rashod=  item.rashod.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})
          }
          if(item.prihod!=''){
          item.prihod=  item.prihod.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})
          }
  })

        arr_4.map( (item) => {
          if(item.rashod!='' && item.rashod!=null){
            item.rashod=  `${item.rashod} ₽`
          }
          if(item.prihod!='' && item.prihod!=null){
                item.prihod=  `${item.prihod} ₽`
          }
  })
    

 arr_4.map( (item) => {
          if(item.balans!='' && item.balans!=null){
            item.balans=  `${item.balans} ₽`
          }
         
  })


        console.log(arr_4);
        console.log(arr_3);


arr_4.shift(0)
arr_4.shift(1)
setschet(arr_4)
       
        // console.log(moment.utc(prihod[0].Дата).format('MM/DD/YYYY'))

        const user = jwtDecode(storedToken)
        setuser(user)
    
      }
    
      }


  const out = async() => {
    navigate(DOSTUP_ROUTE)
  }
  const your = async() => {
    navigate(VLADELETS_ROUTE)
  }
  const prosmotr = async() => {
    navigate(DOSTUP_ROUTE)
  }
  return (
    <div className="App">
      <div class="offcanvas offcanvas-end"  data-bs-scroll="true" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Баланс ЛС:</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
<div onClick={()=>navigate(SORT_BY_DATA_BD_ROUTE + '/' + id)} class='pointer'>
По дате ввода в БД
</div>
<div class='pointer'>
По дате операции
</div>
<div onClick={()=>navigate(SORT_BY_RAZDEL + '/' + id)} class='pointer'>
По разделам
</div>
<div onClick={()=>navigate(SORT_BY_RAZDEL1 + '/' + id)}  class='pointer'>
По разделам (с нарастающим итогом)
</div>
  </div>
</div>

      <h1 class='color'>AGAX-DATA.RU</h1>
      <div class='color1' onClick={()=>navigate(USER_ROUTE)}>{setuserRef?.current?.name}</div>
      <svg version="1.1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" class='right_svg' id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 612 612" ><g><g id="_x33__6_"><g><path d="M581.4,520.199H30.6c-16.891,0-30.6,13.709-30.6,30.6C0,567.691,13.709,581.4,30.6,581.4h550.8 c16.891,0,30.6-13.709,30.6-30.602C612,533.908,598.291,520.199,581.4,520.199z M30.6,91.799h550.8 c16.891,0,30.6-13.708,30.6-30.6c0-16.892-13.709-30.6-30.6-30.6H30.6C13.709,30.6,0,44.308,0,61.2 C0,78.091,13.709,91.799,30.6,91.799z M581.4,275.399H30.6C13.709,275.399,0,289.108,0,306s13.709,30.6,30.6,30.6h550.8 c16.891,0,30.6-13.709,30.6-30.6S598.291,275.399,581.4,275.399z"/></g></g></g></svg>
<div class='dd_ff'>
<div onClick={out} type="submit" class="width btn btn-primary btn-block btn-large out_bot">Назад</div>
      <div class='display_flex4'>
     
      <div class='display_flex5'>
     
<div class='padd_l d_f_l1'>
  
<div class='col'>
Дата
</div>

<div class='col'>
Расход
</div>

<div class='col'>
Приход
</div>

<div class='col'>
Баланс
</div>

<div class='col1'>
Информация
</div>

</div>

<div class='dfdfs'>
        Баланс ЛС: По дате операции
        </div>
      </div>
      <div class='display_flex6'>
        <div class='font_size'>
          {setuserRef?.current?.name}
        </div>
        <div class='d_f_dl'>
        <div class='col'>
        </div>
        <div class='col'>
        {setrasRef?.current?.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})} ₽
        </div>
        <div class='col'>
       {setprihRef?.current?.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})} ₽
        </div>
        <div class='col'>
        {(setrasRef?.current-setprihRef?.current).toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})} ₽
        </div>
        <div class='col1'>
        </div>
        </div>

      </div>
{setschetRef?.current?.map( (e,index) =>
  
<div class={`d_f_l `} style={{background:`${(index%2==0?'rgb(255,255,255)':'rgb(210,210,210)')}`}} >
  
  <div class='padd_l col'>
   {e.data}
  </div>
  
  <div class='col'>
  {e.rashod}
  </div>
  
  <div class='col'>
  {e.prihod}
  </div>
  
  <div class='col'>
{e.balans}
  </div>
  
  <div class='col1'>
  {e.info}
  </div>
  
  </div>  
  
  )}




</div>
</div>
     

    </div>
  );
}

export default Sort_by_data_op_bd;
