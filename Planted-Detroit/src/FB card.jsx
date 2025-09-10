import React from "react";
import styled from "styled-components";
//import star from "./assets./Frame 111.png";

const Card = styled.div`
//  width: 180px;
  padding: 16px;
  margin: 10px;
  background: #CFE1C8;  
  width: 555px;
border-radius: 30px;
//padding-bottom: 37px;
//padding-left: 40px;

p{
  line-height: 160%;
  font-size: 20px;
  text-align: left;
  color: #5F6544;
}
`

const Star = styled.div`
align-items:right;
padding-top: 50px;
padding-left: 150px;
img{
  width: 136px;
  height: 34px;
}
`
const Details = styled.div`
  display: flex;
  text-align: left;
  line-height: 0%;
  h5{
    font-size: 24px;
  }
  h6{
    font-size: 16px;
    color: #5F6544;
  } 
`

export function UserCard({ user }) {
  return (
    <Card>
       <p>{user.feedback}</p>
       <Details>
       <div>
        <h5>{user.name}</h5>
      <h6>{user.company}</h6></div><div>
        <Star>
      <img src={user.star}/></Star>
      </div></Details>
    </Card>
  );
}
