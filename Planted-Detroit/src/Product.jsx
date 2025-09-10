import React from 'react'
import styled from "styled-components"
import product2 from "./assets/product2.jpg"
import product3 from "./assets/product3.jpg"
import product4 from "./assets/product4.jpg"
import product5 from "./assets/product5.jpg"
import product6 from "./assets/product6.jpg"
import product7 from "./assets/product7.jpg"
import product8 from "./assets/product8.jpg"
import product9 from "./assets/product9.jpg"
import product10 from "./assets/product10.jpg"
import product11 from "./assets/product11.jpg"
import vector from "./assets/Vector 4.png"


const Product = () => {

  const Container = styled.div`
    height: 100vh;
      width:100%;
      padding:10px 0px ;
      font-family:Arial, Helvetica, sans-serif;
           @media (max-width: 705px) {
  width:100%;
  height:100vh;
  padding:10px 0px ;
           }`
  const Button = styled.button`
    width: 208px;
height: 48px;
border:none;
border-radius: 14px;
padding-top: 10px;
padding-right: 40px;
padding-bottom: 10px;
padding-left: 40px;
background-color:#D5D8C5;
@media (max-width: 900px) {
margin: 2rem;
}
  `
  const MyButton = styled(Button)`
    background-color:black;
    color:white;
    @media (max-width: 950px) {
    width:200px;
    height: 40px;
    }
    @media (max-width: 850px) {
      margin: 0rem;
    width:200px;
    height: 40px;
    }
     
  `
  const Header = styled.div`
     text-align:center;
      @media (max-width: 705px) {
  width:100%;
  text-align: center;
  margin-left:2rem;
  margin-right: 2rem;
           }
  `
  const Para = styled.div`
    color:#5F6544;
font-size: 16px;
line-height: 160%;
letter-spacing: 0%;
text-align: center;
  `
  const Heading = styled.h1`
  
     
  `

  const Frame = styled.div`
  display:flex;
border-radius:30px;
background-color:#CFE1C8;
background-image:url(${vector});
background-repeat:no-repeat;
margin:2rem;
height:58vh;
@media (max-width: 950px) {
    height:70vh;
    }
  
    @media (max-width: 705px) {
  width:90%;
  //height:100vh;
  margin-left:3rem;
           }
  `
  const Grid = styled.div`
    display:flex;
     margin:0 2rem 0 2rem;
     @media (max-width: 950px) {
    display:inline-block;
    text-align: center;
    }
     @media (max-width: 705px) {
  width:90%;
  text-align: center;
           }
           @media (max-width: 705px) {
  width:90%;
  text-align: center;
           }
  `
  const Content = styled.div`
p{
  color:#5F6544;
font-size: 16px;
line-height: 160%;
letter-spacing: 0%;
}
h1{
font-style: Bold;
font-size: 40px;
line-height: 50px;
letter-spacing: 0%;
}
@media (max-width: 1024px) {
    p{
      font-size:14px;
      line-height:120%;
      margin-bottom:2rem;
    }
    h1{
font-size: 36px;
line-height: 50px;
}
    }
    @media (max-width: 950px) {
    p{
      font-size:14px;
      line-height:120%;
      margin-bottom:2rem;
    }
    h1{
font-size: 30px;
line-height: 40px;
}
}
  `
  const Head = styled.section`
    margin-top:4rem;
  `
  const Food = styled.div`
    display:grid;
  //width: 404px;
height: 16px;
margin-top:5rem;
margin-right:8rem;
grid-template-columns:auto auto auto;
.p2{
    grid-area: 1 / 4 / 3 / 2;
}

img{
  
  border-radius:20px;
  padding:1px;
}
@media (max-width: 1200px) {
    margin-left:0rem;
    }
    @media (max-width: 950px) {
margin-top:2rem;
margin-left:6rem;
justify-content:center;
align-items: center;
.p2{
    grid-area: 1 / 4 / 3 / 2;
}}
    
  `
  return (
    <Container>
    <Header><Button>Our Products</Button>
    <Heading>PLANTED SALAD BUNDLES</Heading>
<Para><p>Our bundles are designed for real life - busy weeks, shared lunches, and last-minute get-togethers. 
  All powered by greens grown in our vertical farm with love, light, and just the right amount of water.</p></Para>
    </Header>
    <Frame>
      <Grid>
        <Content><Head><h1>CUSTOM YOUR OWN PLANTED SALAD BUNDLE!</h1>
        <p>Quick one-time order or Subscribe to 5 or more of your favorite 
          Planted Salads and receive 5% off. Easily swap items as your taste buds change!</p></Head>
          <MyButton>Start Your Bundle</MyButton></Content>  
          <Food> 
            <img src={product3} width = "90px" height="70px"/>
           <div class = "p2" ><img src={product2} width = "180px" height="140px"/></div>
            <img src={product4} width = "90px" height="70px"/>
            <img src={product5} width = "90px" height="70px"/>
            <img src={product6} width = "90px" height="70px"/>
            <img src={product7} width = "90px" height="70px"/>
          </Food>
      </Grid>
    </Frame>
  
    </Container>
  )
}

export default Product