import React from "react";
import styled from "styled-components";
import PlayBlack from "../assets/images/play-icon-black.png";
import PlayWhite from "../assets/images/play-icon-white.png";
import GroupIcon from "../assets/images/group-icon.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movies from "./DataBase";
function Detail(props) {
  const [showMovies, setShow] = useState({});
  const { id } = useParams();
  const allMovie = Object.entries(movies);

  useEffect(() => {
    allMovie.map(([key, index]) => {
      if (index.title === id) {
        setShow(index);
      }
    });
  }, [id]);

  console.log(showMovies);
  return (
    <Container>
      <Background>
        <img src={showMovies.backgroundImg} alt="" />
      </Background>
      <ImageTitle>
        <img src={showMovies.titleImg} alt="" />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <PLayer>
            <img src={PlayBlack} alt="" />
            <span>Play</span>
          </PLayer>
          <Trailer>
            <img src={PlayWhite} alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWaych>
            <div>
              <img src={GroupIcon} alt="" />
            </div>
          </GroupWaych>
        </Controls>
        <Subtitles>{showMovies.subTitle}</Subtitles>
        <Discription>{showMovies.description}</Discription>
      </ContentMeta>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  /* top: 0px; */
  z-index: -1;
  img {
    width: 100%;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;
const ContentMeta = styled.div`
  max-width: 874px;
`;
const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;
const PLayer = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  border-radius: 4px;
  align-items: center;
  display: flex;
  cursor: pointer;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  transition: background 0.2s ease-in;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 22px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(PLayer)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;
const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  transition: all 0.2s ease-in;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
  &:hover {
    background-color: rgba(249, 249, 249, 0.6);
    span {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
`;
const GroupWaych = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  transition: all 0.2s ease-in-out;
  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
  &:hover {
    box-shadow: 0px 0px 10px aquamarine;
    /* transform: scale(1px, 0); */
  }
`;

const Subtitles = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Discription = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export default Detail;
