

import { useEffect } from 'react';
import useState from 'react-usestateref'
import { getProvodkiByPrihod, getProvodkiByRashod, login2 } from '../https/deviceAPI';
import { jwtDecode } from "jwt-decode";
import $ from "jquery";
import { useNavigate, useParams } from 'react-router-dom';
import { DOSTUP_ROUTE, GLAV_ROUTE, MENU_ROUTE, SORT_BY_DATA_OP_BD_ROUTE, USER_ROUTE, VLADELETS_ROUTE } from '../utils/consts';
import moment from 'moment';
function Sort_by_razdel_1({e2,dogovor,setbal,setbalRef}) {
    const [po_dogov,setpo_dogov,setpo_dogovRef] = useState()
    const [ne_po_dogov,setne_po_dogov,ne_po_dogovRef] = useState()

    const [rashod1,setrashod1,setrashod1Ref] = useState()
    const [rashod2,setrashod2,setrashod2Ref] = useState()
    const [prihod1,setprihod1,setprihod1Ref] = useState()
    const [prihod2,setprihod2,setprihod2Ref] = useState()


    const [nul,setnul,setnulRef] = useState(0)
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      const id = getRandomInt(1000000000000000)
    useEffect(() => {
        if(setnulRef.current==0){
            get1()
        }

        if(ne_po_dogovRef?.current?.length==0){
            $(`.back_color2${id}`).addClass('none_1')
        }
        
        if(setpo_dogovRef?.current?.length==0){
            $(`.back_color1${id}`).addClass('none_1')
        }

          })

          const get1 = async() => {
            console.log(e2)
            let arr_1 = []
            let arr_2 = []

            e2.map(it=>{
               if(it.po_dogov==true){
                arr_1.push(it)
               }
               if(it.po_dogov==false){
                arr_2.push(it)
               }
            })

            // arr_1.sort(function(a,b){
            //     return   new Date(a.data) - new Date(b.data);
            //   });

            // arr_2.sort(function(a,b){
            // return   new Date(a.data) - new Date(b.data);
            // });



        // arr_2.map(item_=>{
        //     let i=0

        //     arr_2.map((item,index)=>{
        //         if(item_==arr_2[index]){
        //             i++
        //         }
        //        if(i>1){
        //         delete arr_2[index]
        //        }
        //     })

        // })
        const arr_111 = []
        const arr_222 = []
        arr_1.map((item, index) =>{
            if(

            
                (arr_1[index].data ==arr_1[index+1]?.data  &&
                arr_1[index].info ==arr_1[index+1]?.info  &&
                arr_1[index].prihod ==arr_1[index+1]?.prihod  &&
                arr_1[index].rashod ==arr_1[index+1]?.rashod )||

                (arr_1[index].data ==arr_1[index+2]?.data  &&
                arr_1[index].info ==arr_1[index+2]?.info  &&
                arr_1[index].prihod ==arr_1[index+2]?.prihod  &&
                arr_1[index].rashod ==arr_1[index+2]?.rashod )||

                (arr_1[index].data ==arr_1[index+3]?.data  &&
                arr_1[index].info ==arr_1[index+3]?.info  &&
                arr_1[index].prihod ==arr_1[index+3]?.prihod  &&
                arr_1[index].rashod ==arr_1[index+3]?.rashod )||

                (arr_1[index].data ==arr_1[index+4]?.data  &&
                arr_1[index].info ==arr_1[index+4]?.info  &&
                arr_1[index].prihod ==arr_1[index+4]?.prihod  &&
                arr_1[index].rashod ==arr_1[index+4]?.rashod )||

                (arr_1[index].data ==arr_1[index+10]?.data  &&
                    arr_1[index].info ==arr_1[index+10]?.info  &&
                    arr_1[index].prihod ==arr_1[index+10]?.prihod  &&
                    arr_1[index].rashod ==arr_1[index+10]?.rashod )||

                    (arr_1[index].data ==arr_1[index+5]?.data  &&
                        arr_1[index].info ==arr_1[index+5]?.info  &&
                        arr_1[index].prihod ==arr_1[index+5]?.prihod  &&
                        arr_1[index].rashod ==arr_1[index+5]?.rashod )||

                        (arr_1[index].data ==arr_1[index+6]?.data  &&
                            arr_1[index].info ==arr_1[index+6]?.info  &&
                            arr_1[index].prihod ==arr_1[index+6]?.prihod  &&
                            arr_1[index].rashod ==arr_1[index+6]?.rashod )||

                            (arr_1[index].data ==arr_1[index+7]?.data  &&
                                arr_1[index].info ==arr_1[index+7]?.info  &&
                                arr_1[index].prihod ==arr_1[index+7]?.prihod  &&
                                arr_1[index].rashod ==arr_1[index+7]?.rashod )||

                                (arr_1[index].data ==arr_1[index+8]?.data  &&
                                    arr_1[index].info ==arr_1[index+8]?.info  &&
                                    arr_1[index].prihod ==arr_1[index+8]?.prihod  &&
                                    arr_1[index].rashod ==arr_1[index+8]?.rashod )||

                                    (arr_1[index].data ==arr_1[index+9]?.data  &&
                                        arr_1[index].info ==arr_1[index+9]?.info  &&
                                        arr_1[index].prihod ==arr_1[index+9]?.prihod  &&
                                        arr_1[index].rashod ==arr_1[index+9]?.rashod )

              ){
            }else{
                arr_111.push(arr_1[index])
            }
          })

          arr_2.map((item, index) =>{
            if( 
                (arr_2[index].data ==arr_2[index+1]?.data  &&
                arr_2[index].info ==arr_2[index+1]?.info  &&
                arr_2[index].prihod ==arr_2[index+1]?.prihod  &&
                arr_2[index].rashod ==arr_2[index+1]?.rashod  )||

                (arr_2[index].data ==arr_2[index+2]?.data  &&
                arr_2[index].info ==arr_2[index+2]?.info  &&
                arr_2[index].prihod ==arr_2[index+2]?.prihod  &&
                arr_2[index].rashod ==arr_2[index+2]?.rashod  )||

                (arr_2[index].data ==arr_2[index+3]?.data  &&
                    arr_2[index].info ==arr_2[index+3]?.info  &&
                    arr_2[index].prihod ==arr_2[index+3]?.prihod  &&
                    arr_2[index].rashod ==arr_2[index+3]?.rashod  )||
    
                    (arr_2[index].data ==arr_2[index+4]?.data  &&
                    arr_2[index].info ==arr_2[index+4]?.info  &&
                    arr_2[index].prihod ==arr_2[index+4]?.prihod  &&
                    arr_2[index].rashod ==arr_2[index+4]?.rashod  )||

                (arr_2[index].data ==arr_2[index+5]?.data  &&
                arr_2[index].info ==arr_2[index+5]?.info  &&
                arr_2[index].prihod ==arr_2[index+5]?.prihod  &&
                arr_2[index].rashod ==arr_2[index+5]?.rashod   )||


                (arr_2[index].data ==arr_2[index+6]?.data  &&
                    arr_2[index].info ==arr_2[index+6]?.info  &&
                    arr_2[index].prihod ==arr_2[index+6]?.prihod  &&
                    arr_2[index].rashod ==arr_2[index+6]?.rashod  )||
    
                    (arr_2[index].data ==arr_2[index+7]?.data  &&
                    arr_2[index].info ==arr_2[index+7]?.info  &&
                    arr_2[index].prihod ==arr_2[index+7]?.prihod  &&
                    arr_2[index].rashod ==arr_2[index+7]?.rashod  )||

                (arr_2[index].data ==arr_2[index+8]?.data  &&
                arr_2[index].info ==arr_2[index+8]?.info  &&
                arr_2[index].prihod ==arr_2[index+8]?.prihod  &&
                arr_2[index].rashod ==arr_2[index+8]?.rashod   )||


                (arr_2[index].data ==arr_2[index+9]?.data  &&
                    arr_2[index].info ==arr_2[index+9]?.info  &&
                    arr_2[index].prihod ==arr_2[index+9]?.prihod  &&
                    arr_2[index].rashod ==arr_2[index+9]?.rashod  )||

                (arr_2[index].data ==arr_2[index+10]?.data  &&
                arr_2[index].info ==arr_2[index+10]?.info  &&
                arr_2[index].prihod ==arr_2[index+10]?.prihod  &&
                arr_2[index].rashod ==arr_2[index+10]?.rashod   )
              ){
            }else{
                arr_222.push(arr_2[index])
            }
          })

        let rashod1=0
        let rashod2=0
        let prihod1=0
        let prihod2=0

        arr_111.map(item_=>{
            rashod1 = rashod1-(-item_.rashod)
            prihod1 = prihod1-(-item_.prihod)
        })
        arr_222.map(item_=>{
            rashod2 = rashod2-(-item_.rashod)
            prihod2 = prihod2-(-item_.prihod)
            })
         arr_111.map((item,index)=>{
            item.balans = item.rashod - item.prihod
        })
        arr_222.map((item,index)=>{
            item.balans = item.rashod - item.prihod
        })
        
                arr_222.map( item =>{
          if(item.rashod!='' && item.rashod!=null ){
            item.rashod=  item.rashod.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})
          }
          if(item.prihod!='' && item.prihod!=null ){
          item.prihod=  item.prihod.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})
          }
        })
        
                arr_111.map( item =>{
          if(item.rashod!='' && item.rashod!=null ){
            item.rashod=  item.rashod.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})
          }
          if(item.prihod!='' && item.prihod!=null){
          item.prihod=  item.prihod.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})
          }
        })
        
        
    


       console.log(setbalRef.current)


         if(arr_111.length!=0){

            // arr_111[0].balans = setbalRef.current - (-arr_111[0].balans)
            arr_111.map((item,index)=>{
                if(arr_111[index+1]){
                    arr_111[index+1].balans = arr_111[index+1].balans-( -arr_111[index].balans)
                }
            })
            // if(arr_111.length!=0){
            //     setbal(arr_111[arr_111.length-1].balans)
            // }
     arr_111.map( item =>{
          if(item.rashod!='' && item.rashod!=null ){
            item.rashod=  item.rashod.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})
          }
          if(item.prihod!='' && item.prihod!=null){
          item.prihod=  item.prihod.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})
          }
        })
           arr_111.map( (item) => {
          if(item.rashod!='' && item.rashod!=null ){
            item.rashod=  `${item.rashod} ₽`
          }
          if(item.prihod!='' && item.prihod!=null ){
          item.prihod=  `${item.prihod} ₽`
          }
  })
  
  arr_111.map( item =>{
          if(item.balans!='' && item.balans!=null ){
            item.balans=  item.balans.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})
          }
        })
        
    arr_111.map( (item) => {
          if(item.balans!='' && item.balans!=null){
            item.balans=  `${item.balans} ₽`
          }

  })
  
      arr_111.map( (item) => {
          if(item.balans==0){
            item.balans= null
          }

  })
  
  
         }
    

         if(arr_222.length!=0){

        // arr_222[0].balans = setbalRef.current -( -arr_222[0].balans)
        arr_222.map((item,index)=>{
            if(arr_222[index+1]){
                arr_222[index+1].balans = arr_222[index+1].balans -(- arr_222[index].balans)
            }
           
        })
        // if(arr_222.length!=0){
        //     setbal(arr_222[arr_222.length-1].balans)
        // }
  arr_222.map( item =>{
          if(item.rashod!='' && item.rashod!=null ){
            item.rashod=  item.rashod.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})
          }
          if(item.prihod!='' && item.prihod!=null ){
          item.prihod=  item.prihod.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})
          }
        })
        
    arr_222.map( (item) => {
          if(item.rashod!='' && item.rashod!=null){
            item.rashod=  `${item.rashod} ₽`
          }
          if(item.prihod!='' && item.prihod!=null){
          item.prihod=  `${item.prihod} ₽`
          }
  })
  
  
  
    arr_222.map( item =>{
          if(item.balans!='' && item.balans!=null ){
            item.balans=  item.balans.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})
          }

        })
        
    arr_222.map( (item) => {
          if(item.balans!='' && item.balans!=null){
            item.balans=  `${item.balans} ₽`
          }

  })
     arr_222.map( (item) => {
          if(item.balans==0){
            item.balans= null
          }

  })
    }
              
        
               arr_222.map(item_=>{
            if(item_.rashod == 0){
                item_.rashod = null
               }
            if(item_.prihod == 0){
                item_.prihod = null
               }
        
              })
        
        arr_111.map(item_=>{
            if(item_.rashod == 0){
                item_.rashod = null
               }
            if(item_.prihod == 0){
                item_.prihod = null
               }
        
        })
        
        
            setrashod1(rashod1)
            setrashod2(rashod2)
            setprihod1(prihod1)
            setprihod2(prihod2)
            
            console.log(rashod1)
            console.log(prihod1)

            setpo_dogov(arr_111)
            setne_po_dogov(arr_222)
         
            console.log(setpo_dogovRef.current)
            
            console.log(arr_111)
            console.log(arr_222)

            setnul(1)
          }
  return (
    <div>
       


<div class='d_f_l back_color'>  
<div class=' col2 dogovor_ col23'>
{dogovor}
</div>

<div class=' col2 dogovor_ col27'>
{(setrashod1Ref?.current+setrashod2Ref?.current)?.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})} ₽
</div>
<div class=' col2 dogovor_ col27'> 
{(setprihod1Ref.current+setprihod2Ref.current)?.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})} ₽
</div>
<div class=' dogovor_ col2 col27 f_w '>
{((setrashod1Ref?.current-setprihod1Ref?.current)+(setrashod2Ref?.current-setprihod2Ref?.current))?.toLocaleString() } ₽
</div>
<div class=' col1 dogovor_'>

</div>
</div>  

<div class= {`d_f_l back_color back_color1 back_color1${id}`}>  
<div class=' col2 col23 col23_'>
По договору (Работы)
</div>

<div class=' col2 col23_ col27'>
{(setrashod1Ref?.current)?.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})} ₽
</div>
<div class=' col2 col23_ col27'>
{(setprihod1Ref.current)?.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})} ₽
</div> 
<div class=' col2 col23_ '>
{(setrashod1Ref?.current-setprihod1Ref?.current)?.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})} ₽
</div>
<div class=' col1 dogovor_'>

</div>
</div>  



{setpo_dogovRef?.current?.map((item,index) =>
    <div class={`d_f_l `} style={{background:`${(index%2==0?'rgb(255,255,255)':'rgb(210,210,210)')}`}} >

<div class='padd_l col'>
 {item.data} 
</div>

<div class='col'>
{item.data1} 
</div>

<div class='col'>
{(item.rashod)} 

</div>

<div class='col'>
{(item.prihod)} 
</div>

<div class='col'>
{(item.balans)} 
</div>

<div class='col1'>
{item.info} 
</div>

</div> 
)}




<div class= {`d_f_l back_color back_color2 back_color2${id}`} >  

<div class=' col2 col23 col23_'>
Вне договора (СМ, транспорт, ... ) 
</div>

<div class=' col2 col27 col23_'>
{(setrashod2Ref?.current)?.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})} ₽
</div>
<div class=' col2 col27 col23_'>
{(setprihod2Ref.current)?.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})} ₽
</div>
<div class=' col2 col23_ '>
{(setrashod2Ref?.current-setprihod2Ref?.current)?.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})} ₽
</div>
<div class=' col1 dogovor_'>

</div>
</div>  

{ne_po_dogovRef?.current?.map((item,index) =>
    <div class={`d_f_l `} style={{background:`${(index%2==0?'rgb(255,255,255)':'rgb(210,210,210)')}`}} >

<div class='padd_l col'>
 {item.data} 
</div>

<div class='col'>
{item.data1} 
</div>

<div class='col'>
    
{(item.rashod)}

</div>

<div class='col'>
{(item.prihod)}

</div>

<div class='col'>
{(item.balans)} 
</div>

<div class='col1'>
{item.info} 
</div>

</div> 
)}
</div> 
  );
}

export default Sort_by_razdel_1;
