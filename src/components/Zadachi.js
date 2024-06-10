

import { useEffect } from 'react';
import useState from 'react-usestateref'
import { login2 } from '../https/deviceAPI';
import { jwtDecode } from "jwt-decode";
import $ from "jquery";
import { useNavigate } from 'react-router-dom';
import { GLAV_ROUTE, MENU_ROUTE, USER_ROUTE } from '../utils/consts';
function Zadachi() {
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
      <h1 class='color'>AGAX-DATA.RU: Задачи</h1>
    <div class='color1' onClick={()=>navigate(USER_ROUTE)}>{setuserRef?.current?.name}</div>
      <div class='display_flex'>
      

<div class='info'>
  

  <div class='user_info'>


<div class='mt_10'>
В разработке
</div>

<svg width='100px' class='svg' version="1.1" id="Capa_1"  x="0px" y="0px" viewBox="0 0 399.997 399.997" ><g><g><g>
<path d="M281.547,143.478c-0.456-2.581-2.917-4.305-5.501-3.851l-17.05,3.005c-2.047-4.803-4.662-9.302-7.764-13.418 l11.139-13.272c0.809-0.965,1.201-2.211,1.094-3.466c-0.111-1.256-0.715-2.414-1.68-3.225l-14.913-12.514 c-0.964-0.809-2.213-1.202-3.468-1.093c-1.254,0.109-2.413,0.714-3.224,1.678l-11.13,13.265c-4.566-2.326-9.45-4.123-14.57-5.306 V87.969c0-2.624-2.125-4.751-4.748-4.751h-19.466c-2.622,0-4.748,2.127-4.748,4.751v17.312 c-5.122,1.183-10.004,2.979-14.572,5.306l-11.128-13.265c-1.688-2.008-4.682-2.271-6.69-0.584l-14.913,12.513 c-0.966,0.811-1.568,1.969-1.68,3.225c-0.107,1.255,0.284,2.501,1.094,3.466l11.138,13.272 c-3.102,4.116-5.716,8.617-7.763,13.418l-17.05-3.005c-2.579-0.454-5.045,1.27-5.501,3.851l-3.381,19.173 c-0.218,1.24,0.064,2.519,0.788,3.549c0.722,1.032,1.823,1.733,3.064,1.951l17.063,3.011c0.277,5.284,1.197,10.398,2.68,15.268 l-14.994,8.657c-1.092,0.631-1.886,1.665-2.213,2.882c-0.325,1.219-0.154,2.514,0.475,3.604l9.733,16.86 c0.63,1.092,1.667,1.886,2.885,2.212c0.403,0.109,0.816,0.163,1.229,0.163c0.826,0,1.645-0.216,2.373-0.638l15.009-8.664 c3.533,3.776,7.518,7.127,11.868,9.967l-5.926,16.277c-0.43,1.184-0.375,2.489,0.158,3.631c0.533,1.142,1.496,2.022,2.68,2.455 l18.294,6.658c0.524,0.19,1.075,0.286,1.625,0.286c0.686,0,1.371-0.149,2.005-0.444c1.142-0.532,2.025-1.496,2.456-2.681 l5.925-16.278c2.54,0.307,5.127,0.469,7.75,0.469s5.21-0.162,7.75-0.469l5.926,16.278c0.432,1.185,1.313,2.146,2.455,2.681 c0.636,0.295,1.318,0.444,2.007,0.444c0.549,0,1.101-0.097,1.623-0.286l18.295-6.658c1.185-0.433,2.146-1.313,2.681-2.457 c0.532-1.142,0.588-2.445,0.157-3.629l-5.927-16.277c4.352-2.84,8.335-6.188,11.868-9.967l15.009,8.664 c0.729,0.422,1.547,0.637,2.373,0.637c0.412,0,0.826-0.053,1.229-0.162c1.218-0.326,2.253-1.12,2.884-2.212l9.732-16.86 c0.631-1.089,0.802-2.385,0.477-3.604c-0.327-1.217-1.123-2.253-2.213-2.882l-14.994-8.657c1.48-4.87,2.402-9.983,2.68-15.268 l17.063-3.011c1.241-0.218,2.341-0.919,3.062-1.951c0.726-1.031,1.006-2.309,0.788-3.549L281.547,143.478z M200,193.117 c-14.424,0-26.117-11.692-26.117-26.116c0-14.424,11.693-26.116,26.117-26.116s26.117,11.692,26.117,26.116 C226.117,181.425,214.424,193.117,200,193.117z"/><path d="M366.684,24.971H33.316C14.945,24.971,0,39.917,0,58.288V275.56c0,18.371,14.945,33.317,33.316,33.317h107.412 l-20.387,44.955c-2.105,4.643-1.709,10.037,1.053,14.321c2.762,4.285,7.51,6.873,12.607,6.873h131.996c0,0,0.014,0,0.02,0 c8.285,0,15-6.715,15-15c0-2.493-0.605-4.848-1.686-6.916l-20.062-44.233h107.412c18.371,0,33.316-14.946,33.316-33.317V58.288 C400,39.917,385.055,24.971,366.684,24.971z M370,275.561c0,1.829-1.488,3.316-3.316,3.316H33.316 c-1.828,0-3.316-1.487-3.316-3.316V58.288c0-1.829,1.488-3.317,3.316-3.317h333.367c1.828,0,3.316,1.488,3.316,3.317L370,275.561 L370,275.561z"/></g></g></g>
</svg>

  <div onClick={out} type="submit" class="width btn btn-primary btn-block btn-large">Назад</div>
  </div>

</div>
</div>
    </div>
  );
}

export default Zadachi;
