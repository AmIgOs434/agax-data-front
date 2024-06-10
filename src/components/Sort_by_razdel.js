

import { useEffect } from 'react';
import useState from 'react-usestateref'
import { getProvodkiByPrihod, getProvodkiByRashod, login2 } from '../https/deviceAPI';
import { jwtDecode } from "jwt-decode";
import $ from "jquery";
import { useNavigate, useParams } from 'react-router-dom';
import { DOSTUP_ROUTE, GLAV_ROUTE, MENU_ROUTE, SORT_BY_DATA_BD_ROUTE, SORT_BY_DATA_OP_BD_ROUTE, SORT_BY_RAZDEL, SORT_BY_RAZDEL1, USER_ROUTE, VLADELETS_ROUTE } from '../utils/consts';
import moment from 'moment';
import Sort_by_razdel1 from './Sort_by_razdel1';
function Sort_by_razdel() {
    const navigate = useNavigate()
  useEffect(() => {

if(setuserRef.current==0){
    get1()
}
   

  })
  const [bal,setbal,setbalRef] = useState(0)


  const [ras,setras,setrasRef] = useState()
  const [prih,setprih,setprihRef] = useState()
  const [schet1,setschet1,setschet1Ref] = useState()
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
        const arr_3 =[{data:'',prihod:'',rashod:'',balans:'',info:'',dogovor:''}]
        prihod.map( e =>{ 
              if(e['Приходный счет']==id && e['Расходный счет']!=id ){
                arr_3.push({data:e.Дата,kod:e.Код,data1:e.DateCreate,prihod:parseFloat(e.Сумма),rashod:0,balans:'',info:`${e.Содержание}`,dogovor:e.Договор,po_dogov:e['По договору']})
              }
              if(e['Расходный счет']==id && e['Приходный счет']!=id ){
                arr_3.push({data:e.Дата,kod:e.Код,data1:e.DateCreate,prihod:0,rashod:parseFloat(e.Сумма) ,balans:'',info:`${e.Содержание} `,dogovor:e.Договор,po_dogov:e['По договору']})
              }
 
              if(e['Расходный счет']==id && e['Приходный счет']==id ){
                arr_3.push({data:e.Дата,kod:e.Код,data1:e.DateCreate,prihod:parseFloat(e.Сумма),rashod:parseFloat(e.Сумма),balans:'',info:`${e.Содержание}`,dogovor:e.Договор,po_dogov:e['По договору']})
              }
        })
         arr_3.sort(function(a,b){
          return   a.Код - b.Код;
        });
        arr_3.sort(function(a,b){
          return   new Date(a.data) - new Date(b.data);
        });
        arr_3.map(e=> e.data = moment.utc(e.data).format('DD.MM.YYYY ') )
        arr_3.map(e=> e.data1 = moment.utc(e.data1).format('MM.DD.YYYY HH:mm:ss') )


        const arr_4 =[{data:'',prihod:'',rashod:'',balans:'',info:'',po_dogov:''}]

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

     
    

console.log(arr_4)

// const arr_5 = [{

//    [arr_4[4].dogovor] : [{rashod:'',prihod:''}],
//   }]
//   arr_5.push({[arr_4[6].dogovor] : [{rashod:'',prihod:''}]})

//   arr_5[0][arr_4[4].dogovor].push({rashod:'',prihod:''})

// console.log(arr_4[4].dogovor)

// console.log(arr_5)

// if(arr_5[0][arr_4[4].dogovor]){
//   console.log(arr_5[0][arr_4[4].dogovor])
// }

const arr_5 = [0]
// arr_5.push({[arr_4[6].dogovor] : [{rashod:'',prihod:''}]})
function contains(arr, elem) {
  return arr.find((i) => i === elem) != -1;
}


arr_4.map( item => {
  let x = 0

  arr_5.map( item1 => {
    if(item1[item.dogovor]!=undefined){
      x++
    }
  })

  if(x==0){
    arr_5.push({[item.dogovor] : []})
  }

})
console.log(arr_5)

arr_4.map( item => {

  arr_5.map( item1 => {

    if(item1[item.dogovor]){
      item1[item.dogovor].push({data:item.data,balans:item.balans,data1:item.data1,dogovor:item.dogovor,info:item.info,rashod:item.rashod,prihod:item.prihod,po_dogov:item.po_dogov})
    }

  })
})


{setschet1Ref?.current?.map( (e1) =>

  console.log(e1)
)}

// const arr_5 = []


// arr_5.push({[arr_4[6].dogovor] : [{rashod:'',prihod:''}]})
// item1[item.dogovor].push({rashod:item.rashod,prihod:item.prihod})


arr_4.shift(0)
arr_4.shift(1)

arr_5.shift(0)
arr_5.shift(1)
arr_5.shift(2)

console.log(Object.keys(arr_5[0])[0])

// const arr_6 = [0]
// arr_4.map(item =>{
//   arr_5.push(item.dogovor)
// })
// const uniqueArray = arr_5.filter(function(item, pos) {
//   return arr_5.indexOf(item) == pos;
// })

// // uniqueArray.map(item =>{
// //   arr_6.push({[item] : [{rashod:'',prihod:''}]})
// // })



// arr_4.map(item=>{

//   uniqueArray.map(it=>{
//     if(item.dogovor == it){

//         arr_6.map(ite=>{
//           console.log('asdas')
//           console.log(ite[it])
//             if(ite[it]!=undefined){
//               ite[it].push({rashod:item.rashod,prihod:item.prihod})
//             }
//             else{
//               arr_6[it].push({[it] : [{rashod:item.rashod,prihod:item.prihod}]})
//             }

//         })

//     }
//   })
  
// })

 
//   console.log(arr_6[0]['Договор 22_31-01'])

// console.log(uniqueArray)
console.log(arr_5)
setschet1(arr_5)
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
      <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Баланс ЛС:</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
<div  onClick={()=>navigate(SORT_BY_DATA_BD_ROUTE + '/' + id)}  class='pointer'>
По дате ввода в БД
</div>
<div onClick={()=>navigate(SORT_BY_DATA_OP_BD_ROUTE + '/' + id)} class='pointer'>
По дате операции
</div>
<div  onClick={()=>navigate(SORT_BY_RAZDEL + '/' + id)}  class='pointer'>
По разделам
</div>
<div  onClick={()=>navigate(SORT_BY_RAZDEL1 + '/' + id)}  class='pointer'>
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

</div>

<div class='col'>
Расход
</div>

<div class='col'>
Приход
</div>

<div class='col1'>
Баланс
</div>

</div>

<div class='dfdfs'>
        Баланс ЛС: По разделам
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
        
        </div>
        <div class='col wi_d__'>
        {setrasRef?.current?.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})} ₽
      
        </div>
        <div class='col wi_d__'>
        {setprihRef?.current?.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})} ₽
       
        </div>
        <div class='col1 wi_d__'>
        {(setrasRef?.current-setprihRef?.current).toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})} ₽
        </div>
        </div>

      </div>


{setschet1Ref?.current?.map( (e1) =>
  <div>  


{/* {e1[Object.keys(e1)[0]]?.map( (e,index) => */}
<Sort_by_razdel1 setbal={setbal} setbalRef={setbalRef} e2={e1[Object.keys(e1)[0]]} dogovor={Object.keys(e1)[0]} />

 {/* )} */}


  </div>  
  )}




</div>
</div>
     

    </div>
  );
}

export default Sort_by_razdel;
