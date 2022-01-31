import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PinkButton } from "./components/PinkButton";
import { next } from "./store/modules/score";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  max-width: 360px;
  margin: auto;
  text-align: center;
`;

const MainImg = styled.img`
  width: inherit;
  margin-bottom: 30px;
`;

const Header = styled.h1`
  margin-top: 0;
  margin-bottom: 30px;
`;

const SubHeader = styled.h2`
  font-size: 1.1em;
  color: #a3b0b7;
  font-weight: 400;
  margin-bottom: 30px;
`;

function App() {
  const page = useSelector((state) => state.score.page);
  const dispatch = useDispatch();
  return (
    <>
      {page === 0 && (
        <Main>
          <MainImg src="./city/main.jpg" alt="Newyork" />
          <Header>나라별 수도 퀴즈</Header>
          <SubHeader>진정한 수도 고인물도 100점을 맞기 어렵습니다 !</SubHeader>
          <PinkButton
            text="테스트 시작 !"
            clickEvent={() => {
              dispatch(next());
            }}
          />
        </Main>
      )}
    </>
  );
}

export default App;
