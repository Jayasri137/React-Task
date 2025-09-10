import React from "react";
import styled from "styled-components";
import logo from "./assets/image 7.png";
import x from "./assets/x.png";
import fb from "./assets/fb.png";
import insta from "./assets/insta.png";
import linkedin from "./assets/in.png";

const Final = () => {
  const Container = styled.div`
    width: 1520px;
    height: 780px;
    background-color: #1c1c1a;
    color: white;
  `;

  const Layout = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    //gap: 36px;
  `;
  const Panel = styled.div`
    display: flex;
  `;

  const LeftSide = styled.div`
    width: 384px;
    height: 573px;
    gap: 277px;
    border: 1px solid #5f6544;
    p {
      font-weight: 500;
      font-style: Medium;
      font-size: 14px;
      line-height: 160%;
      letter-spacing: 0%;
      color: #5f6544;
    }
  `;
  const Frame = styled.div`
    padding: 40px;
  `;
  const Text = styled.div`
    padding: 300px 0px;
  `;
  const Center = styled.div`
    width: 500px;
    height: 573px;
    //gap: 100px;
    border: 1px solid #5f6544;
  `;
  const List = styled.div`
    display: flex;
    //gap: 38px;
    justify-content: left;
    ul {
      text-align: left;
      font-weight: 500;
      font-style: Medium;
      font-size: 16px;
      line-height: 260%;
      letter-spacing: 0%;
    }
  `;
  const RightSide = styled.div`
    width: 684px;
    height: 553px;
    top: 8434px;
    left: 815px;
    padding: 10px 30px;
    display: inline-block;
    border: 1px solid #5f6544;
  `;

  const Bottom = styled.div`
    border-bottom: 1px solid #5f6544;
    height: 88px;
    h1 {
      text-align: center;
      font-weight: 900;
      font-style: Black;
      font-size: 100px;
      line-height: 20%;
      color: #ffffff29;
      padding: 0px;
    }
  `;

  const Footer = styled.div`
    display: flex;
  `;
  const Sec1 = styled.div`
    width: 285px;
    height: 26px;
    p {
      color: #cfe1c8;
    }
  `;
  const Sec2 = styled.div`
    width: 1150px;
    height: 26px;
    p {
      text-align: right;
      color: #cfe1c8;
    }
  `;

  const SocialMedia = styled.div`
    display: flex;
    width: 484px;
    height: 56px;
    gap: 10px;
    padding: 120px 80px;
    img {
      width: 56;
      height: 56;
      border-radius: 28px;
      padding-top: 12px;
      padding-right: 14px;
      padding-bottom: 12px;
      padding-left: 14px;
      gap: 10px;
      border-width: 1px;
    }
  `;
  const Address = styled.div`
    width: 584px;
    height: 120px;
  `;

  const TextH1 = styled.h1`
    font-weight: 900;
    font-style: Black;
    font-size: 50px;
    line-height: 120%;
    letter-spacing: 0%;
    text-transform: uppercase;
  `;

  const Contact = styled.div`
    p {
      font-weight: 500;
      font-style: Medium;
      font-size: 16px;
      line-height: 160%;
      letter-spacing: 0%;
    }
  `;
  const Form = styled.div`
    display: flex;
    input {
      width: 325px;
      height: 43px;
      top: 8814px;
      left: 815px;
      border-radius: 10px;
      background-color: #d9d9d9;
    }
  `;
  const Button = styled.div`
    padding: 0px 20px;
    button {
      width: 208px;
      height: 48px;
      border-radius: 14px;
      background-color: #d5d8c5;
      color: black;
      padding: 10px 40px;
    }
  `;

  return (
    <Container>
      <Layout>
        <Panel>
          <LeftSide>
            <Frame>
              <img src={logo} />
              <Text>
                <p>
                  Our edible flowers aren’t just pretty-
                  <br />
                  they’re flavorful, fresh, and pesticide-free. <b />
                  Garnish your salads, dress up your drinks, <b />
                  or add a touch of the unexpected to your <b />
                  next gathering.
                </p>
              </Text>
            </Frame>
          </LeftSide>
          <Center>
            <List>
              <ul>
                <dd style={{ color: "#5F6544" }}>CUSTOMER</dd>
                <dd>Contact</dd>
                <dd>Account Login</dd>
                <dd>Wholesale Request Form</dd>
                <dd>Terms of Service</dd>
              </ul>
              <ul>
                <dd style={{ color: "#5F6544" }}>COMPANY</dd>
                <dd>Our Farm</dd>
                <dd>Our Blog</dd>
                <dd>FAQ</dd>
                <dd>Privacy Policy</dd>
                <dd>Refund Policy</dd>
              </ul>
            </List>
            <SocialMedia>
              <div>
                <img src={linkedin} />
                <img src={insta} />
                <img src={x} />
                <img src={fb} />
              </div>
            </SocialMedia>
          </Center>
          <RightSide>
            <Address>
              <TextH1>
                1000 Mt Elliott St,
                <br /> Detroit, MI 48207
              </TextH1>
            </Address>
            <Contact>
              <p style={{ color: "#5F6544" }}>Phone</p>
              <p style={{ color: "#CFE1C8" }}>+91-95008345587</p>
              <p style={{ color: "#5F6544" }}>Mail</p>
              <p style={{ color: "#CFE1C8" }}>hello@planteddetroit.com</p>
              <p style={{ color: "#5F6544" }}>Join our mailing list</p>
              <Form>
                <input type="text" placeholder="Enter mail" />
                <Button>
                  <button>Subscribe</button>
                </Button>
              </Form>
            </Contact>
          </RightSide>
        </Panel>
        <Bottom>
          <h1>PLANTED DETROIT</h1>
        </Bottom>
        <Footer>
          <Sec1>
            <p>All Right Received @ PLANTED Detroit </p>
          </Sec1>
          <Sec2>
            <p>Back To Top</p>
          </Sec2>
        </Footer>
      </Layout>
    </Container>
  );
};

export default Final;
