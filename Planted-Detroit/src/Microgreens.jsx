import React from 'react'
import styled from "styled-components"
import greens from "./assets/greens.png"
import icon from "./assets/icon1.png"

const Microgreens = () => {

    const Container = styled.div`
        height:100vh;
        width:100%;
         
    `
    const Greens = styled.div`
    //padding:50px 20px;
    margin:1rem;
    img{
        width: 100%;
height: 300px;
border-radius: 30px;
    }
    

    `
    const Concept = styled.div`
       // padding:30px;
        margin: 1rem;
    `
    const Content = styled.div`
        display:flex;
justify-content: space-between;
 font-family:Arial, Helvetica, sans-serif;
@media (max-width: 1024px){
    display: inline-block;
}

    `
    const Left = styled.div`
       /* width: 503px;
height: 276px;*/
p{
    color:#5F6544;
font-weight: 500;
font-style: Medium;
font-size: 16px;
line-height: 160%;
letter-spacing: 0%;
}
    `
    const Right = styled.div`
       /* width: 659px;
height: 208px;*/
h1{
 font-family:Arial, Helvetica, sans-serif;
font-weight: 700;
font-style: Bold;
font-size: 80px;
line-height: 100%;
letter-spacing: 0%;
vertical-align: middle;}
 @media (max-width: 750px) {
    h1{
    font-size:62px;
    }}
     @media (max-width: 450px) {
    h1{
    font-size:42px;
    }}
    `
    const Button = styled.button`

background-color: ${props => props.$primary ? "black" : "#D5D8C5" } ;
    color: ${props => (props.$primary ? "white" : "black") } ;
    width: 188px;
height: 40px;
border:none;
border-radius:14px;
    `
const Footer = styled.div`
    display:inline-flex;
    //padding:40px;
    margin: 0rem 1rem;
    text-align: center;
    align-items:center;
    h1{
font-weight: 700;
font-style: Bold;
font-size: 50;
letter-spacing: 0%;
text-align: center;
text-transform: uppercase;
 font-family:Arial, Helvetica, sans-serif;
    }
    @media (max-width: 1024px) {
    h1{
    font-size:22px;
    }}
     @media (max-width: 700px) {
    h1{
    font-size:16px;
    }}
     @media (max-width: 520px) {
    h1{
    font-size:12px;
    }}
      @media (max-width: 430px) {
    h1{
    font-size:10px;
    }}
`
const Icon = styled.div`
//padding:65px 0px;
img{
    width: 48px;
height: 48px;
}

`
  return (
    <Container>
        <Greens>
            <img src={greens}/>
        </Greens>
        <Concept>
    <Content>
        <Left>
        <div>
            <Button>Special Offer</Button>
            <p>Our edible flowers aren’t just pretty - they’re flavorful, fresh, and pesticide-free. 
                Garnish your salads, dress up your drinks, or add a touch of the unexpected to your next gathering.
</p>
<p>Perfect for Drinks | Desserts | Charcuterie</p>
        </div>
        </Left>
        <Right>
        <div>
            <h1>Microgreens</h1>
            <Button $primary>Start Your Bundle</Button>
        </div>
        </Right>
    </Content>
    </Concept>
    <Footer><h1>Fresh Salads Delivered</h1>
    <Icon>
    <img src ={icon}/></Icon>
    <h1>/ Planted Salad Bundles</h1></Footer>
    </Container>
  )
}

export default Microgreens