import React from 'react';
import styled from "styled-components";
import plant from "./assets/plant.jpg";
import pot from "./assets/pot.jpg";
import icon from "./assets/icon.png";

const Plants = () => {

    const Wrapper = styled.div`
        height:100vh;
        width:100%;
         
    `
    const Main = styled.div`
    font-family:Arial, Helvetica, sans-serif;
    display:flex;
 margin:2rem;

    `
    const Sec = styled.div`
       // display:inline-block;
       // padding-right:80px;
    `
    const Sector = styled.div`
        display:flex;
        //width:850px;
       
         align-items: center;
         justify-content: center;
         @media (max-width: 750px) {
            display: inline-block;
         }

    `
    const Image1 = styled.div`
    //padding:0px;
        img{
            width:508px;
height: 650px;
//top: 3247px;
//left: 40px;
border-radius: 30px;
        }
               @media (max-width: 1024px) {
  img{
    width:400px;
    height:540px;
  }
  }
   @media (max-width: 750px) {
  img{
    width:300px ;
    height:420px;
  }
  }
  @media (max-width: 400px) {
  img{
   
  }
} 
         
    `
    const Content = styled.div`
        text-align:left;
        //padding:50px 0px;
        width:400px;
        margin-top: 2rem;
        margin-left: 2rem;
        h1{
            
font-size: 56px;
line-height: 80px;
letter-spacing: 0%;
text-transform: uppercase;

        }
        p{
        
font-size: 20px;
line-height: 160%;
letter-spacing: 0%;
color:#5F6544;

        }
        @media (max-width: 650px) {
    width:100%;
    font-size: 30px;
line-height: 50px;
    }
         
    `
    const Image2 = styled.div`

    //margin-top: 2rem;
    margin-left: 5rem;
        img{
            width: 400px;
height: 450px;
top: 3247px;
left: 1029px;
border-radius: 30px;
        }
         @media (max-width: 1024px) {
  img{
    width:300px;
    height:340px;
  }
  }
   @media (max-width: 750px) {
  img{
    width:200px ;
    height:220px;
  }
  }
  @media (max-width: 400px) {
  img{
   
  }
}     
    `
    const List = styled.div`
        display:inline-flex;
        justify-content:space-around;

    `
    const List1 = styled.div`
    padding:20px 0px;
     
    `
    const Li = styled.ul`
    display:flex;
ul{
font-size: 20px;
line-height: 100%;
letter-spacing: 0%;
}
b{
    padding: 20px;
}

    `
    const List2 = styled.div`
    padding:20px 0px;
     
    `
    const Icon = styled.div`
padding:10px;
img{
    width: 40px;
height: 40px;
}
 
    `
  return (
    <Wrapper>
        <Main>
<Image1>
    <img src={pot}/>
</Image1>   
<Sec>
<Sector>
<Content>
    <h1>WHY PLANTED DETRIOIT?</h1>
    <p>A look inside how your salad gets from seed to bowl - no middlemen, no mystery.</p>
</Content>
<Image2>
    <img src={plant}/>
</Image2>
</Sector>
<List>
<List1>
    <ul><Li>
        <Icon><img src = {icon}/></Icon><b>No herbicides/no pesticides</b><br/></Li>
       <Li> <Icon><img src = {icon}/></Icon><b>Locally grown</b><br/></Li>
       <Li> <Icon><img src = {icon}/></Icon><b>Food safe facility</b><br/></Li>
    </ul>
</List1>
<List2>
    <ul>
       <Li> <Icon><img src = {icon}/></Icon><b>Uses fewer resources</b><br/></Li>
       <Li> <Icon><img src = {icon}/></Icon><b>Extended shelf life</b><br/></Li>
       <Li> <Icon><img src = {icon}/></Icon><b>Vegan & gluten-free options</b><br/></Li>
    </ul>
</List2>
</List>
</Sec>
</Main>
    </Wrapper>
  )
}

export default Plants
