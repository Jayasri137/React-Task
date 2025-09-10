import React from "react";
import styled from "styled-components";
import logo from "./assets/logo.svg";
import plate from "./assets/plate.svg";
import vector1 from "./assets/Vector 1.png";
import vector2 from "./assets/Vector 2.png";
import Frame from "./assets/Frame 123.png";

const Container = styled.div`
  background-color: #f1f6ee;
  width: 100%;
  height: 100%;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  background-image: url(${Frame});
  background-repeat: no-repeat;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Sidebar = styled.nav`
  display: flex;
  gap: 4rem;

  @media (max-width: 930px) {
    display: none;
  }
`;

const Logo = styled.div``;

const NavItems = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #61dafb;
  }
`;

const ButtonWrapper = styled.div`
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 930px) {
    display: none;
  }
`;

const MyButton = styled.button`
  color: white;
  border-radius: 7px;
  padding: 10px 30px;
  background-color: black;
`;

const Content = styled.div`
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: inline-block;
  font-size: 24px;

  h1 {
    padding: 0px;
    font-size: 35px;
    font-weight: 700;
    font-style: Bold;
    line-height: 60px;
    letter-spacing: 0%;
    text-align: center;
  }

  p {
    font-weight: 500;
    font-style: Medium;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    color: #5f6544;
  }
  @media (max-width: 550px) {
    width: 100%;
    min-width: 10rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0 1rem 0;

  div {
    padding: 0px 20px;

    @media (max-width: 580px) {
      padding: 0;
    }
  }

  @media (max-width: 580px) {
    gap: 0.875rem;
  }
`;

const Button1 = styled.button`
  background-color: ${(props) =>
    props.$primary === "outline" ? "transparent" : "black"};
  color: ${(props) => (props.$primary === "outline" ? "black" : "white")};
  width: 208px;
  height: 48px;
  border-radius: 14px;

  @media (max-width: 580px) {
    width: 100%;
    min-width: 10rem;
  }
`;

const Greens = styled.div`
  padding: 0px 0px;
  img {
    width: 70%;
    height: 70%;
  }
`;

const App = () => {
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
        <ButtonWrapper>
          <MyButton>Sign in</MyButton>
        </ButtonWrapper>
      </Header>
      <Content>
        <Title>
          <h1>
            GROWN INDOORS. DELIVERED FRESH. <br />
            DETROIT PROUD
          </h1>
          <p>
            Sustainably grown microgreens and lettuces. No pesticides. Always
            local
          </p>
          <Buttons>
            <div>
              <Button1>Shop Now</Button1>
            </div>
            <div>
              <Button1 $primary="outline">Explore Products</Button1>
            </div>
          </Buttons>
        </Title>
      </Content>
      <Greens>
        <img src={plate} alt="plate" />
      </Greens>
    </Container>
  );
};

export default App;
