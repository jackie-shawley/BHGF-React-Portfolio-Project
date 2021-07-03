// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { IconContext } from 'react-icons';
// import { AccordionData } from './AccordionData';
// import { FiPlus, FiMinus } from 'react-icons/fi';
// import { Accordion, Card, Button  } from 'react-bootstrap';
// import 'typeface-rokkitt';
// import 'typeface-rochester';
// import 'bootstrap/dist/css/bootstrap.min.css';




// const AccordionSelection = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     position: relative;    
//     height: 25vh;
//     background: #ffffff;
//     margin-bottom: 50px;
//     margin-top: 50px;
//     width: 100%;
//         `;

// const Container = styled.div`
//     position: absolute;
//     width: 90%;
//     top:0%;
//     box-shadow: 2px 10px 35px 1px rgba(0 0 0 0)`;

// const Wrap = styled.div`
//     background: #0 0 100;
//     color: #ffffff;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 100%;
//     text-align: center;
//     cursor: pointer;

//     h1 {
//         padding: 2rem;
//         font-family: "rochester", cursive;
//         font-size: 2rem;
//         color: black;
//         text-shadow: none;
//         text-align: center  
//      }

//     p {
//         font-family: "rokkitt", serif;
//         font-size: 2rem;
//         line-height: 30px;

//     }

//     {
//         font-family: "rokkitt", serif;
//         font-size: 30px;
//         font-weight: bold;
//         text-shadow: none; 
//     }
      

// `;




// const Dropdown = styled.div`
//     background: #1af5c3;
//     color: #00ffb9;
//     width: 100%;
//     height: 100px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     border-bottom: 1px solid #00ffb9;
//     border-top: 1px solid #00ffb9;    
// `;

    


// const IngredientsAccordion = () => {

//     const [clicked, setClicked] = useState(false);

//     const toggle = id => {
//         if(clicked === id) {
//             return setClicked(null)
//         }
        
//         setClicked(id)
//     }

//     const CookieItems = AccordionData.filter(item => item.type === 'Cookies');
//     const CakeItems = AccordionData.filter(item => item.type === "Cake");
//     const MuffinItems = AccordionData.filter(item => item.type === 'Muffins');
//     const BreadItems = AccordionData.filter(item => item.type === 'Muffins')

//     return (
//         <IconContext.Provider value={{ color: '#1af5c3', size: '15px' }}>
//             <div className="col-8 offset-2">
//                 <AccordionSelection>                
//                     <Container>
//                         {AccordionData.map((item, type) => {
//                                 <React.Fragment>
//                                     <Wrap onClick={() => toggle(type)} key={type}>
//                                         <h1>{item.type}</h1>
//                                         <span>{clicked === type ? <FiMinus /> : <FiPlus />}</span>
//                                     </Wrap>
//                                     {clicked === type ? (
//                                         <Dropdown>
//                                             {AccordionData.map((item, id) => {
//                                                     <p key={`${item.id}`}>
//                                                     Ingredients: {item.ingred}
//                                                     <br />
//                                                     <p><span id="contains">Contains: {item.contains}</span></p>
//                                                 </p>
//                                       )  : null)}}
//                                         </Dropdown>
//                                     )}}
//                                 </React.Fragment>
//                             )
//                         )}
                            
                         
//                         {AccordionData.map((item, id) => {
//                             return (
//                                 <React.Fragment>
//                                     <Wrap onClick={() => toggle(id)} key={id}>
//                                         <h1>{item.name}</h1>
//                                         <span>{clicked === id ? <FiMinus /> : <FiPlus />}</span>
//                                     </Wrap>
//                                     {clicked === id ? (
//                                         <Dropdown>                                 
//                                         <p>Ingredients: {item.ingred}
//                                         <br />
//                                         <p><span id="contains">Contains: {item.contains}</span></p>
//                                         </p>
//                                     </Dropdown>  
//                                     ) : null}
                                    
//                                 </React.Fragment>
//                             );
//                         })}
//                     </Container>                
//                 </AccordionSelection>
//             </div>
//         </IconContext.Provider>
    
//         );
// };



// export default IngredientsAccordion;




