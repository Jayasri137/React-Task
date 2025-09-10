import React from "react";
import styled from "styled-components";
import box from "./assets/box_svgrepo.com.png";
import cal from "./assets/calendar_svgrepo.com.png";
import loc from "./assets/location_svgrepo.com.png";

const Order = () => {
  const Container = styled.div`
    text-align: center;
    width:100%;
    height: 100vh;
  
  `;

  const Sec = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    background-color: #cfe1c8;
    border-radius: 30px;
    margin: 4rem;
    width:90%;
    height:90%;
    @media (max-width: 900px) {
       margin: 2rem;
    width:90%;
    height:90%;
    }
    @media (max-width: 500px) {
    
    }

  `;
  const Main = styled.div`
    display: flex;
    div {
      padding: 0px;
      margin-right:2rem;
      margin-left:2rem;
      letter-spacing: 0%;
    }
    h3 {
      font-size: 28px;
      font-weight: 700;
      font-style: Medium;
      line-height: 160%;
    }
    p {
      color: #5f6544;
      font-size: 16px;
      font-weight: 500;
      line-height: 160%;
      font-style: Medium;
    }
    @media (max-width: 900px) {

    h3{
    font-size: 20px;
line-height: 120%;
    }
  p{
    font-size: 12px;
line-height: 120%;
  }}
  @media (max-width: 500px) {
  display:inline-block;

  img{
    width:10%;
    height:10%;
  }
}
  `;
  const Heading = styled.h1`
  margin-top:2rem;
padding:10px;
 @media (max-width: 900px) {
  font-size:26px;
 }
 @media (max-width: 500px) {
  font-size: 20px;
  padding:5px;
 }
  `
  return (
    <Container>
      <Sec>
        <Heading>
          <h1>EASY ORDERING PROCESS</h1>
        </Heading>
        <Main>
          <div>
            <img src={box} />
            <h3>Select your bundle</h3>
            <p>
              Choose from curated salad bundles or create your own. Whether
              you’re ordering for yourself, your family, or your office, there’s
              something fresh for everyone.
            </p>
          </div>
          <div>
            <img src={cal} />
            <h3>Choose your delivery date</h3>
            <p>
              Get your salads delivered any Wednesday across Metro Detroit.
              Subscribe and save 5% - choose weekly or every two weeks. Cancel
              or pause anytime.
            </p>
          </div>
          <div>
            <img src={loc} />
            <h3>
              Delivered right to your
              <br /> home or business
            </h3>
            <p>
              Your salads arrive crisp and ready to eat in our signature purple
              insulated tote. You'll get text updates the day of delivery, so
              you’re always in the loop. Freshness isn’t just a promise - it’s
              built into our process.
            </p>
          </div>
        </Main>
      </Sec>
    </Container>
  );
};

export default Order;
