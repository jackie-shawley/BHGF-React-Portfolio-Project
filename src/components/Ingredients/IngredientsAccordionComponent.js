import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { AccordionData } from './AccordionData';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { black } from 'chalk';
import 'typeface-rokkitt';
import 'typeface-rochester';





const AccordionSelection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    background: rgba(000);
    `;

const Container = styled.div`
    position: absolute;
    top: 10%;
    box-shadow: 2px 10px 35px 1px rgba(26 245 195 .3)`;

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    cursor: pointer;

    h1 {
        font-family: "rochester", cursive;
        font-size: 2rem;
        color: black;
        text-shadow: none;
        text-align: center  
     }

    p {
        font-family: "rokkitt", serif;
        font-size: 2rem;
        line-height: 30px;

    }

    {
        font-family: "rokkitt", serif;
        font-size: 30px;
        font-weight: bold;
        text-shadow: none; 
    }
      

`;




const Dropdown = styled.div``;

    





const IngredientsAccordion = () => {

    const [clicked, setClicked] = useState(false);

    const toggle = id => {
        if(clicked === id) {
            return setClicked(null)
        }
        
        setClicked(id)
    }

    return (
        <IconContext.Provider value={{ color: '#1af5c3', size: '25px' }}>
            <AccordionSelection>
                <Container>
                    {AccordionData.map((item, id) => {
                        return (
                            <React.Fragment>
                                <Wrap onClick={() => toggle(id)} key={id}>
                                    <h1>{item.name}</h1>
                                    <span>{clicked === id ? <FiMinus /> : <FiPlus />}</span>
                                </Wrap>
                                {clicked === id ? (
                                    <Dropdown>                                 
                                    <p>Ingredients: {item.ingred}
                                    <br />
                                    <p><span id="contains">Contains: {item.contains}</span></p>
                                    </p>
                                </Dropdown>  
                                ) : null}
                                
                            </React.Fragment>
                        );
                    })}
                </Container>
            </AccordionSelection>
        </IconContext.Provider>
    
        );
};



export default IngredientsAccordion;




