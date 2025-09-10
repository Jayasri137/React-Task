import React from "react";
import styled from "styled-components";
//import { products } from "./productcard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from "./assets/product8.jpg"
import product2 from "./assets/pro1.png"
import product3 from "./assets/Pro.png"
import product4 from "./assets/Rectangle 13.png"

const products = [
  {
    id: 1,
    //botton1: "Best Seller",
    product: product1,
    title: "5 Salad Sampler",
    desc1:"One of Each Salad",
      desc2:" A Variety of Tastes",
        desc3: " Healthy Lunch on Us",
        price: "$40.50",
        button:"Buy salad"
  },
  {
    id: 2,
     product: product2,
    title: "10 Salad Bundle",
    desc1:"Two of Each Salad",
      desc2: "1 for Me, 1 for You",
        desc3: "Grab & Go",
        price: "$99.75", 
        button:"Buy salad"
  },
  {
    id: 3,
    //botton1: "Best Seller",
    product: product3,
    title: "20 Salad Party Pack",
    desc1:"Four of Each Salad",
      desc2: "Toss a Salad Party",
        desc3: "LETTUCE Handle It",
        price: "$199.50",
        button:"Buy salad"
        
  },
  {
    id: 4,
     product: product4,
    title: "Ultimate Green Bundle",
    desc1: "4 Greens Mixes",
      desc2: "3 Microgreen Mixes",
        desc3: "Go Green",
        price: "$44.65",
        button:"Buy salad"
        
  }
];

const Card  = styled.div`
width: 100%;
height: 100%;
display: flex;

`
const Container = styled.div`
   width: 100%;
height: 100%;

`
const CardIn = styled.div`

   // border-radius: 30px;
         
`
const SingleCard = styled.div`
    margin:4rem 2rem;
    border-radius: 30px;
    background-color:#F1F6EE;
         @media (max-width: 760px) {
    margin:8rem 0rem;
    }
`

const Image = styled.div`
  display: inline;
  
img{
width: 100%;
height: 100%;
border-radius: 24px;
}

`
const Button1 = styled.div`
//position:relative;
width:100%;
height: 100%;
button{
 gap: 10px;
border-radius: 10px;
border:none;
padding:10px 40px;
background-color:#CFE1C8;
color: #1C1C1A;
}
`
const Details = styled.div`
  padding:10px 30px;
`
const Title = styled.b`
font-weight: 700;
font-style: Bold;
font-size: 24px;
line-height: 160%;
letter-spacing: 0%;
`
const Desc = styled.li`
list-style-type: disc;
font-weight: 400;
font-style: Regular;
font-size: 16px;
line-height: 160%;
letter-spacing: 0%;
color:#5F6544;
`
const Footer = styled.div`
    display: flex;
    padding: 30px 0px;
`
const Price = styled.h2`
font-family: Helvetica Neue;
font-weight: 700;
font-style: Bold;
font-size: 28px;
line-height: 100%;
letter-spacing: 0%;
padding: 0px 10px;
`
const Button2 = styled.div`
  button{
    width:80%;
height: 80%;
top: 440px;
left: 163px;
gap: 10px;
border-radius: 14px;
padding-top: 10px;
padding-right: 40px;
padding-bottom: 10px;
padding-left: 40px;
background-color: black;
color: #EAEAEA;
  }
`
  const Pro = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,  
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };
  return (
    <Container>
        <CardIn>
          <Slider {...settings}>
        {products.map((product) => (
          <Card key={product.id}>
            <SingleCard>
        <Image><img src = {product.product} width="313px" height="217px"/><Button1><button>Best Seller</button></Button1></Image>
       <Details>
        <Title>{product.title}</Title>
      <Desc>{product.desc1}</Desc><Desc>{product.desc2}</Desc><Desc>{product.desc3}</Desc>
      <Footer>
        <Price>{product.price}</Price>
        <Button2><button>{product.button}</button></Button2>
        </Footer>
      </Details></SingleCard></Card>))}
      </Slider>
      </CardIn>
    </Container>
  );
}


export default Pro;



 