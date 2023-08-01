import React from "react";
import { styled } from "styled-components";

export default function MontyleReport() {
  return (
    <Wrapper>
      <Gray>
        <Orange>
          <Big>My rooms</Big>
          <Small>Monitor edit published rooms</Small>
        </Orange>
        <White>
          <Bigw>Published rooms</Bigw>
          <Smallw>Monitor announced Prices</Smallw>
        </White>
      </Gray>
        
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Title = styled.p`
  color: #4c4c4c;
  font-size: 18px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;

const White = styled.div`
width: 207px;
height: 80px;
padding: 19px 15px;
border-radius: 4px;
background: var(--brandy, #ffffff);
border-style: solid;
border-width: 1px;
border-color: black;

`;

const Gray = styled.div`
  display: flex;
  width: 620px;
  height: 100px;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  padding-right: 20px;
`;

const Orange = styled.div`
  margin-right: 20px;
  width: 207px;
  height: 80px;
  padding: 19px 15px;
  border-radius: 4px;
  background: var(--brandy, #fe7c31);
`;

const Big = styled.p`
  color: #fff;
  font-size: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-bottom:10px;

`;

const Small = styled.p`
  color: #fff;
  font-size: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;

const Bigw = styled.p`
color: #000;
font-size: 20px;
font-family: "Inter";
font-style: normal;
font-weight: 600;
line-height: 24px;
margin-bottom:10px;
`;

const Smallw = styled.p`
  color: #000;
  font-size: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;