import React from "react";
import { styled } from "styled-components";
import CopyImg from "../assets/images/CopySymbol.svg";

export default function ActiveBalance() {
  return (
    <Wrapper>
      <Title>Active Balance</Title>
      <Grayhoriz>
        <Grayvert>
        <Orange>
          <Bigs>1,234 Nom</Bigs>
          <Small>Balance</Small>
        </Orange>  
          <GrayMy>   
            <SmallB>Wallet address</SmallB>  
            <Search img={CopyImg}>0xc59583f1c858fe5EE6dA27Eac7b1Ca8Aa30ADF63</Search>
          </GrayMy>
        </Grayvert>
        
        <Grayverttwo>
          <Grayvert>
            <Blue>
              <Big>Send</Big>
            </Blue> 
            <Blue>
              <Big>Recieve</Big>
            </Blue> 
          </Grayvert>
          <Grayvert1>
            <White>
              <BigB>Action</BigB>
            </White> 
          </Grayvert1>


        </Grayverttwo>
      </Grayhoriz>
      
      {/* <See>See detailed report</See> */}
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

const GrayMy = styled.div`
  margin-left:40px;
  flex-direction:column;
  width: 450px;
  height: 80px;
  align-items: center;
  background: #f7f7f7;
  // margin-top: 10px;
`;


const Grayhoriz = styled.div`
  display: flex;
  flex-direction:column;
  width: 950px;  height: 180px;
  // justify-content: space-around;
  // align-items: center;
  background: #f7f7f7;
  padding-left: 10px;
  margin-left: 10px;
  margin-top: 10px;
`;


const Grayvert = styled.div`
  display: flex;
  flex-direction:row;
  width: 820px;  height: 80px;
  // justify-content: space-around;
  // align-items: center;
  background: #f7f7f7;
  margin-top: 10px;
`;


const Grayvert1 = styled.div`
  display: flex;
  flex-direction:row;
  width: 820px;  height: 80px;
  // justify-content: space-around;
  // align-items: center;
  // background: #f7f7f7;
  margin-top: 10px;
  margin-left:330px;
`;

const Grayverttwo = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction:row;
  width: 820px;  height: 80px;
  // justify-content: space-around;
  align-items: center;
  background: #f7f7f7;
`;







const Gray = styled.div`
  display: flex;
  width: 1020px;
  height: 100px;
  justify-content: space-around;
  align-items: center;
  background: #f7f7f7;
  margin-top: 10px;
`;

const Orange = styled.div`
  width: 240px;
  height: 80px;
  padding: 19px 15px;
  border-radius: 4px;
  background: var(--brandy, #fe7c31);
`;

const Blue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 60px;
  padding: 19px 15px;
  border-radius: 4px;
  background: var(--brandy, #0699D2);
  margin-right:20px;
`;

const White = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 60px;
  padding: 19px 15px;
  border-radius: 4px;
  border-style: solid;
  border-color: #D8D8D8;
  border-width:1px;
  // background: var(--brandy, #fff);
  background: #f7f7f7;
  margin-right:45px;

`;

const Big = styled.p`
  color: #fff;
  font-size: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
`;

const Bigs = styled.p`
  color: #fff;
  font-size: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

const Small = styled.p`
  color: #fff;
  font-size: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;

const BigB = styled.p`
  color: #000;
  font-size: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
`

const SmallB = styled.p`
  color: #000;
  font-size: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  line-height: 16px;
`;




const See = styled.p`
  color: var(--gray-800, #3f3f3f);
  font-size: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  text-align: right;
  cursor: pointer;
  margin-top: 10px;
`;

const Search = styled.p`
  margin-top:15px;
  margin-right:20px;
  margin-bottom:10px;
  margin-left:30px;
  width: 600px;
  height: 48px;
  border-radius: 4px;
  // border: 1px solid #D8D8D8;
  background: #D8D8D8;
  padding-left: 70px;

  color: #4c4c4c;
  font-size: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  line-height: 45px;

  background-image: url(${(props) => props.img});
  background-size: 30px 25px;
  background-repeat: no-repeat;
  background-position: 530px center;
  cursor:pointer;
`;
