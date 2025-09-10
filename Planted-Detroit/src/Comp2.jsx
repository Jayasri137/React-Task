import React from 'react'
import styled from "styled-components"
import leaf from "./assets/leaf1.jpg"
import food from "./assets/food1.jpg"

const Comp2 = () => {
    const Container = styled.div`
    height: 100vh;
      width:100%;
      padding:0px;
      font-family:Arial, Helvetica, sans-serif;
     
    `
    const Top = styled.h1`
    max-width:100%;
    //height:250px;
font-size: 50px;
line-height: 80px;
text-transform: uppercase;
margin: 2rem ;
@media (max-width: 800px) {
    width:100%;
    font-size: 36px;
line-height: 60px;
    }
    @media (max-width: 650px) {
    width:100%;
    font-size: 30px;
line-height: 50px;
    }
    `
const GridContent = styled.div`
display:flex;
padding:0px 30px;
margin:8rem 2rem 0 0;
@media (max-width: 800px) {
    margin-top:1rem;
    width:100%;
    display:inline-block;
    }
    @media (max-width: 360px) {
    margin-top:4rem;
    width:100%;
    display:inline-block;
    }

`
 const Grid = styled.div`
    display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows:200px 200px ;
  margin-bottom:5rem;
  img{
    border-radius:27px;
  }
  @media (max-width: 800px) {
     grid-template-columns: 120px 120px 120px;
  grid-template-rows:120px 120px ;
    margin-bottom:0rem;
    img{
      width:90%;
      height: 90%;
    }
    }

 `
const Bottom = styled.div`
display:inline-block;
margin-left:10rem;
    @media (max-width: 1100px) {
    width:100%;
    text-align:left;
    margin-left:5rem;
    }
    @media (max-width: 900px) {
    width:100%;
    text-align:left;
    margin-left:0rem;
    }

`
 const Content = styled.p`
 color:#5F6544;
font-size: 16px;
line-height: 160%;
padding:40px 0px;
 width: 580px;
height: 78px;
@media (max-width: 800px) {
    margin-top:1rem;
    width:100%;
    display:inline-block;
    }

`
const Button = styled.button`
width: 208px;
height: 48px;
border-radius: 14px;
background-color:black;
color:white;
@media (max-width: 800px) {
    margin-top:2rem;
    //display:inline-block;
    }

`
  return (
    <Container>
        <Top>
            GROWN INDOORS IN DETROIT, OUR  GREENS ARE FRESH, CLEAN AND DELIVERED WITH CARE
        </Top>
        <GridContent>
        <Grid>
        <img src={leaf} width = "166px" height = "166px" />
        <img src={food} width = "166px" height = "166px"/>   
        <img src={food} width = "166px" height = "166px"/>   
        <img src={leaf} width = "166px" height = "166px"/>
        <img src={food} width = "166px" height = "166px"/>   
        <img src={food} width = "166px" height = "166px"/>   
       </Grid>
       <Bottom>
        <Content>
            Planted Detroit grows fresh, pesticide-free greens year-round using advanced 
            indoor farming—right in the heart of Detroit. We’re committed to clean, local food 
            that’s harvested with care and delivered at peak freshness.</Content>
        <Button>About Us</Button>
        </Bottom>
        </GridContent>
    </Container>
  )
}

export default Comp2;