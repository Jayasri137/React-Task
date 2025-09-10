import React from 'react'
import styled from "styled-components"
import v1 from "./assets/v1.png"
import v2 from "./assets/v2.png"
import product from "./assets/product1.jpg"

const Farm = () => {
    const Container =  styled.div`
    //padding:0px 10px;
        width: 1520px;
height: 880px;
background-color:#EAEAEA;
text-align: center;
  background-image:url(${v1});
    background-repeat:no-repeat;
    font-family:Arial, Helvetica, sans-serif;
    `
    const Bg1 = styled.div`
       background-image:url(${v1});
        background-repeat:no-repeat;
        width: 659px;
        height: 635px;
left:0px;
position: absolute;
    `
    const Bg2 = styled.div`

    div{
        background-image: url(${v2});
    background-repeat:no-repeat;
    position:relative;
width: 480px;
height: 303px;
left: 1040px;
overflow:hidden;
object-fit:cover;
}
    `
    const Frame =  styled.div`
    
    img{
        width: 301px;
height: 217px;
border-radius: 30px;

    }
        
    `
    const Main = styled.div`
        display:flex;
       padding:100px 0px;
      // align-items: center;
        div{    
            padding:0px 50px;;
        }
    `
    const Button =  styled.button`
          width: 208px;
height: 48px;
border:none;
border-radius: 14px;
padding-top: 10px;
padding-right: 40px;
padding-bottom: 10px;
padding-left: 40px;
background-color:#D5D8C5;
    `
    const List =  styled.div`
        text-align: right;
        width: 207px;
height: 446px;
line-height: 90px;
font-size: 20px;
h2{

font-weight: 700;
font-style: Bold;
font-size: 56px;
line-height: 80px;
letter-spacing: 0%;
text-align: center;

}

    `
     const D1 =  styled.div`
        text-align: left;

        div{
            padding:50px 0px;
        }
        p{
            line-height: 30px;
            color: #5F6544;
            padding: 40px 0px;
            font-style: medium;
        }
    `
     const D2 =  styled.div`
        
        li{
        
        }
    `
     const D3 =  styled.div`
        p{
            padding: 30px 0px;
            text-align: left;
            line-height: 160%;
            font-size: 16px;
            color:#5F6544;
            font-style: medium;
        }
        
    `
     const Div2 =  styled.div`
    display:flex;
    
    `
  return (
    <Container>
        <Frame>
            <Main>
                <D1>
            <div>
                <Button>Farm to Fork</Button>
                <p>A look inside how your salad gets from seed to bowl - no middlemen, no mystery.
</p>
            </div></D1>
            <Div2>
            <D2>
            <div>
                <List>
                    <b>Seeding</b><br/>
                    <b>Growing</b>
                    <h2>Harvest</h2>
                    <b>Packaged Salad</b>
                </List>
            </div></D2>
            <D3>
            <div>
                <p>Greens are hand-harvested daily at peak freshness and flavor, and sent straight to packing.
</p>
<img src = {product}/>
            </div></D3>
            </Div2>
            </Main><Bg2><div></div></Bg2>
        </Frame>
    </Container>
  )
}

export default Farm