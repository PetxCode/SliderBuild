import styled from "styled-components";

export const BodyHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  background-color: #1a2e70;
`;
export const BodyContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  width: 70%;
  height: 300px;
  flex-direction: ${({ chngPosition }) =>
    chngPosition ? "row" : "row-reverse"};
  /* flex-direction: row-reverse; */
  color: white;
  padding: 10px 50px;
  font-size: 20px;

  @media screen and(max-width:600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BodyPartImg = styled.div`
  line-height: 0.9;
  width: 700px;
  font-size: 90px;
  padding: 0 0px;
`;
export const BodyPart = styled.div`
  width: 600px;
  padding-left: 15px;
`;
