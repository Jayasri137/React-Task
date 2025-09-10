import React from 'react'
import styled from 'styled-components'
import logo from "./assets/logo.svg"
import plate from "./assets/plate.svg"
import vector1 from "./assets/Vector 1.png"
import vector2 from "./assets/Vector 2.png"

const App = () => {

  const Container = styled.div`
  background-color: #F1F6EE;
    width: 1520px;
    height: 730px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
   @media (min-width: 580px) and (max-width: 1024px)
   { 
    background-color: #F1F6EE;
    width: 1240px;
    height: 730px;
    //text-align: center;
    font-family: Arial, Helvetica, sans-serif;
   }
    @media (min-width: 360px) and (max-width: 580px) {
      width: 420px;
      height: 650px;
     // padding: 10px;
    }
  `

  const Background = styled.div`
   position: absolute;
    background-image: url(${vector1});
    background-repeat: no-repeat;
    width: 680px;
    height: 655px;
   @media (min-width: 580px) and (max-width: 1024px){ position: absolute;
    background-image: url(${vector1});
    background-repeat: no-repeat;
    width: 100%;
    height: 60%;
   }
    @media (min-width: 360px) and (max-width: 580px) {
      position: relative;
      width: 100%;
      height: 500px;
      background-size: contain;
      background-position: center;
    }
  `

  const Background1 = styled.div`
  background-image: url(${vector2});
    background-repeat: no-repeat;
    position: absolute;
    width: 400px;
    height: 585px;
    top: 340px;
    left: 1120px;
   @media (min-width: 580px) and (max-width: 1024px){ background-image: url(${vector2});
    background-repeat: no-repeat;
    position: absolute;
    width: 400px;
    height: 585px;
    top: 340px;
    left: 1300px;}
   // overflow: hidden;
    //object-fit: cover;

   @media (min-width: 360px) and (max-width: 580px) {
      display: none; 
    }
  `

  const Header = styled.div`
  display: flex;
    padding: 0px 30px;
   @media (min-width: 580px) and (max-width: 1024px){ 
    display: inline-block;
    padding: 10px;
    
   }
    @media (min-width: 360px) and (max-width: 580px) {
      flex-direction: column;
      align-items: center;
      //padding: 10px;
    }
  `

  const Sidebar = styled.nav`
  padding: 40px 0px;
   @media (min-width: 580px) and (max-width: 1024px){
     display: flex;
    padding: 10px 0px;
   }
    @media (min-width: 360px) and (max-width: 580px) {
      flex-wrap: nowrap;
      justify-content: center;
      padding: 10px 0;
    }
  `

  const Logo = styled.div`
  padding: 10px;
    img {
      max-width: 150px;
      height: auto;
    }
    @media (min-width: 580px) and (max-width: 1024px){
      padding: 0px 0px;
    img {
      max-width: 120px;
      height: auto;
    }}
    @media (min-width: 360px) and (max-width: 580px) {
    img{  width:80px;
height: 43px;

    }
    }
  `
  const NavItems = styled.a`
  padding: 0px 25px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #61dafb;
    }
    @media (min-width: 580px) and (max-width: 1024px){
      padding: 0px 20px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #61dafb;
    }
  }
    @media (min-width: 360px) and (max-width: 580px) {
      padding: 5px 5px;
      font-size: 12px;
    }
  `

  const Button = styled.div`
  padding: 30px 280px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
   @media (min-width: 580px) and (max-width: 1024px){
     padding: 30px 80px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
   }
    @media (min-width: 360px) and (max-width: 580px) {
      padding: 10px 0;
    }
  `

  const MyButton = styled.button`
  color: white;
    border-radius: 7px;
    padding: 10px 30px;
    background-color: black;
    @media (min-width: 580px) and (max-width: 1024px){color: white;
    border-radius: 7px;
    padding: 10px 30px;
    background-color: black;
    }
    @media (min-width: 360px) and (max-width: 580px) {
      padding: 5px 5px;
      font-size: 8px; 
    }
  `

  const Content = styled.div`
  justify-content: center;
    align-items: center;
    @media (min-width: 580px) and (max-width: 1024px){
//width:1024px;
      justify-content: center;
    align-items: center;
  }
    @media (min-width: 360px) and (max-width: 580px) {
      //padding: 30px 0px;
      width: 350px;
height: 175px;
}
  `

  const Title = styled.div`
  display: inline-block;
    font-size: 24px;
    padding-left: 400px;

    h1 {
      padding: 0px;
      font-size: 35px;
      font-weight: 700;
      line-height: 60px;
      text-align: center;
    }

    p {
      font-weight: 500;
      font-size: 18px;
      text-align: center;
      color: #5F6544;
    }
   @media (min-width: 580px) and (max-width: 1024px){ display: inline-block;
    font-size: 24px;
    width:1024px;

    h1 {
      padding: 0px;
      font-size: 35px;
      font-weight: 700;
      line-height: 60px;
      text-align: center;
    }

    p {
      font-weight: 500;
      font-size: 18px;
      text-align: center;
      color: #5F6544;
    }
  }
    @media (min-width: 360px) and (max-width: 580px) {
      padding: 50px 10px;

      h1 {
        font-size: 20px;
        line-height: 28px;
      }

      p {
        font-size: 14px;
      }
    }
  `

  const Buttons = styled.div`
  display: flex;
    padding: 30px 100px;

    div {
      padding: 0px 20px;
    }
   @media (min-width: 580px) and (max-width: 1024px){ display: flex;
    padding: 30px 250px;
    width:1024px;
align-items: center;
    div {
      padding: 0px 20px;
      
    }
  }
    @media (min-width: 360px) and (max-width: 580px) {
      //flex-direction: column;
      padding: 0px 20px;
      align-items: center;

      div {
        padding: 10px 10px;
      }
    }
  `

  const Button1 = styled.button`
  background-color: ${props =>
      props.$primary === 'outline' ? 'transparent' : 'black'};
    color: ${props =>
      props.$primary === 'outline' ? 'black' : 'white'};
    width: 208px;
    height: 48px;
    border-radius: 14px;
    @media (min-width: 580px) and (max-width: 1024px){background-color: ${props =>
      props.$primary === 'outline' ? 'transparent' : 'black'};
    color: ${props =>
      props.$primary === 'outline' ? 'black' : 'white'};
    width: 208px;
    height: 48px;
    border-radius: 14px;
    }
    @media (min-width: 360px) and (max-width: 580px) {
      align-items:center;
      width: 160px;
      height: 40px;
      font-size: 14px;
    }
  `

  const Greens = styled.div`
   img{
    height:320px;
    }
    //padding: 0px 0px;
    @media (min-width: 580px) and (max-width: 1024px){
      img{
    height:255px;
    }}
    @media (min-width: 360px) and (max-width: 580px) {
        padding:100px 0px;
      img {
        max-width: 100%;
        height: auto;
      }
    }
  `

  return (
    <Container>
      <Header>
        <Logo>
          <img src={logo} width="150px" height="100px" />
        </Logo>
        <Sidebar>
          <NavItems>Shop</NavItems>
          <NavItems>About</NavItems>
          <NavItems>Blog</NavItems>
          <NavItems>Menu</NavItems>
          <NavItems>FindUs</NavItems>
          <NavItems>More</NavItems>
        </Sidebar>
        <Button>
          <MyButton>Signin</MyButton>
        </Button>
      </Header>
      <Background>
        <Content>
          <Title>
            <h1>
              GROWN INDOORS. DELIVERED FRESH. 
              DETROIT PROUD
            </h1>
            <p>
              Sustainably grown microgreens and lettuces. No pesticides.
              Always local
            </p>
            <Buttons>
              <div>
                <Button1>Shop Now</Button1>
              </div>
              <div>
                <Button1 $primary="outline">Explore Products</Button1>
              </div>
            </Buttons>
            <Greens>
        <img src={plate} alt="greens" />
      </Greens>
          </Title>
        </Content>
      </Background>

      <Background1></Background1>
    </Container>
  )
}

export default App