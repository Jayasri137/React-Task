import React from 'react'
import styled from "styled-components";
import logo1 from "./assets/pic1.png";
import logo2 from "./assets/pic2.png";
import logo3 from "./assets/pic3.png";

const Community = () => {
const Container = styled.div`
    text-align: center;
    padding:30px 70px ;
    height: 100vh;
    
`
const Button = styled.button`
    width: 228px;
height: 48px;
border:none;
border-radius: 14px;
padding-top: 10px;
padding-right: 40px;
padding-bottom: 10px;
padding-left: 40px;
background-color:#D5D8C5;
  `

    const Sec = styled.div`
        font-family:Arial, Helvetica, sans-serif;
border-radius: 30px;
padding:50px 0px;
width: 1360px;
height: 550px;
    `
    const Main = styled.div`
    display:flex;
  div{
    padding:30px 50px;
//letter-spacing: 0%;
  }
  h2{
font-size:26px;
font-weight: 700;
font-style: Medium;
line-height: 160%;
  }
  p{
    color:#5F6544;
    font-size: 16px;
    font-weight: 500;
    line-height: 160%;
font-style: Medium;
  }
  
    `
    const Heading = styled.h1`

        p{
color: #5F6544;
font-weight: 500;
font-style: Medium;
font-size: 16px;
line-height: 160%;
letter-spacing: 0%;
text-align: center;
padding: 30px;
        }
    `
  return (
    <Container>
        <Sec>
        <Heading>
            <Button>Community Engagement</Button>
            <p>Planted Detroit works with various community partners to fight food insecurity, 
                reduce food waste and promote education<br/>
 about vertical farming
</p>
        </Heading>
        <Main>
            <div>
                <img src = {logo1} width = "146px" height="148px"/>
                <h2>Educational Partnerships</h2>
                <p>We work with schools on educational opportunities <br/>like our partnership with Detroit Academy of
                     Arts <br/>and Sciences Hydroponics Club. Contact us for<br/> educational opportunities.</p>
            </div>
            <div>
                <img src = {logo2} width = "146px" height="145px"/>
                <h2>Food Rescue US Detroit</h2>
                <p>We partner with Food Rescue US Detroit to fight <br/>food insecurity and help feed our community with<br/> fresh food</p>
            </div>
            <div>
                <img src = {logo3}width = "146px" height="146px"/>
                <h2>Non Profit Donations</h2>
                <p>Are you a 501(c)(3) looking for donations of fresh <br/>food? Contact us and LETTUCE help!</p>
            </div>
        </Main>
        </Sec>
    </Container>
  )
}

export default Community