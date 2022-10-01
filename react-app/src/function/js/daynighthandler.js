// import {useState} from 'react'


// function Daynighthandler(props){
//   const [mode, setMode] = useState('Night Mode');

//   const title_colors = document.querySelectorAll('.title');
//   const important_colors = document.querySelectorAll('.important');
//   const atag_colors = document.querySelectorAll('a');
//   const app_headers_colors = document.querySelector('.App-header');
//   const navigator_colors = document.querySelectorAll('.Navigator');

// const atag = {
//   setColor:function(color) {

//       var i = 0;
//       while(true){
//           atag_colors[i].style.color = color;
//           i++;
//           if(i >= atag_colors.length){
//               i = 0;
//               break;
//               }
//           }
//   },

//   setbackgroundColor:function(color){

//       var i = 0;
//       while(true){
//           atag_colors[i].style.backgroundColor = color;
//           i++;
//           if(i >= atag_colors.length){
//               i = 0;
//               break;
//               }
//           }
//   }
// }
// const navigator = {
//   setbackgroundColor:function(color) {
//     if(navigator_colors.length > 0){
//       var i = 0;
//       while(true){
//         navigator_colors[i].style.backgroundColor = color;
//         i++;
//         if (i > true){
//           i = 0;
//           break;
//         }
//       }  
//     }
//   }
// };
// const app_headers = {
//   setbackgroundColor:function(color) {
//     if(app_headers_colors.length > 0){
//       app_headers_colors.style.backgroundColor = color;
//     }
//   }
// };

// const body = {
//   setColor:function(color) {
//     document.querySelector('body').style.color = color;
//   },
//   setbackgroundColor:function(color) {
//     document.querySelector('body').style.backgroundColor = color;
//   }
// };

// let important = {
//   setColor:function(color) {
//     if(important_colors.length > 0){
//       var i = 0;
//       while(true){
//         important_colors[i].style.color = color;
//         i++;
//         if (i > important_colors.length){
//           i = 0;
//           break;
//         }
//       }

//     }

//   },
//   setbackgroundColor:function(color) {

//     if(important_colors.length > 0){
//       var i = 0;
//       while(true){
//         important_colors[i].style.backgroundColor = color;
//         i++;
//         if (i >= important_colors.length){
//           i = 0;
//           break;
//         }
//       }
//     }

//   }
// };

// let title = {
      
//   setColor:function(color) {
//     if(title_colors.length > 0){
//       var i = 0;
//       while(true){
//         title_colors[i].style.color = color;
//         i++;
//         if (i >= title_colors.length){
//           i = 0;
//           break;
//         }
//       }
  
//     }
//   },
//   setbackgroundColor:function(color) {
//     if(title_colors.length > 0){
//       var i = 0;
//       while(true){
//         title_colors[i].style.backgroundColor = color;
//         i++;
//         if (i >= title_colors.length){
//           i = 0;
//           break;
//         }
//       }
  
//     }
//   }
// };
// console.log(app_headers_colors);

//     return(       
//     <div >
//       <li>      
//       <input className="DaynightHandler" type="button" value={mode} onClick={()=>{
//           console.log(mode);

//             if(mode === 'Day Mode'){
//               setMode('Night Mode');
//               if(body){
//                 body.setColor('black');
//                 body.setbackgroundColor('white');  
//               }
//               if(title){
//                 title.setColor('white');
//                 title.setbackgroundColor('darkgrey');
//               }
//               if(important){
//                 important.setColor('indianred');
                
//               }
//               if(atag){
//                 atag.setColor('darkcyan');
   
//               }
//               if(app_headers){
//                 app_headers.setbackgroundColor('antiquewhite');        
              
//               }
//               // navigator.setbackgroundColor('bisque');
//             }
          
//             else {
//               setMode('Day Mode');
//               if(body){
//                 body.setColor('white');
//                 body.setbackgroundColor('black');  
//               }
//               if(title){
//                 title.setColor('yellow');
//                 title.setbackgroundColor('navy');
//               }
//               if(important){
//                 important.setColor('green');
                
//               }
//               if(atag){
//                 atag.setColor('yellow');
                
//               }
//               if(app_headers){
//                 app_headers.setbackgroundColor('black');       
//               }
//               // navigator.setbackgroundColor('Navy');

//           }
//         }}/>
//       </li>
//     </div>
// );
//     }

// export default Daynighthandler;
