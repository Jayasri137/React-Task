import Marquee from "react-fast-marquee";
import { users } from "./jsoncard";
import { UserCard } from "./FB card";
import styled, { keyframes } from "styled-components";
// {keyframes}from "styled-components";

export default function App() {
  const moveRight = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`
  const moveLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
` 
const Marquee = styled.div`
  display: inline-block;
  width: 100%;
  overflow: hidden;
  padding: 10px;
   @media (min-width: 580) and (max-width: 1024px){ 
    width:1024px;
    display: inline-block;
   }

`
const Marquee1 = styled.div`
    display: flex;
  animation: ${moveLeft} 20s linear infinite; 
  `
const Marquee2 = styled.div`
 display: flex;
  animation: ${moveRight} 20s linear infinite;
`
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, Helvetica, sans-serif", textAlign: "center"}}>
        <button style= {{width: "208px",backgroundColor: "#D5D8C5",
height: "48px",
border: "none",
borderRadius: "14px"
}}>Testimonials</button>
      <h1 style ={{padding: "40px", fontSize: "56"}}>OUR CUSTOMERS FEEDBACKS</h1>
      <Marquee>
      <Marquee1 pauseOnHover={true} speed={50} gradient={false}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </Marquee1>
      <Marquee2 pauseOnHover={true} speed={50} gradient={false} >
        {users.map((user) => (
          <UserCard key={user.id} user={user}/>
        ))}
      </Marquee2>
      </Marquee>
    </div>
  );
}
