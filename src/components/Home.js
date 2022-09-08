import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Background from "../assets/images/home-background.png";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDiney";
import Origenals from "./Origenals";
import Recomments from "./Recomments";
import Trending from "./Trending";
import Viewer from "./Viewer";
import { useDispatch, useSelector } from "react-redux";
import db from "./firebase";
import { setMovie } from "../features/Movie/MovieSlice";
import { selectUserName } from "../features/users/userSlice";
import { collected } from "./firebase";
import movies from "./DataBase";

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const recommends = [];
  let newDisney = [];
  let originals = [];
  let trending = [];

  const allMovie = Object.entries(movies);

  allMovie.map(([key, index]) => {
    if (index.type === "recommend") {
      console.log(index);
      recommends.push(index);
    } else if (index.type === "new") {
      newDisney.push(index);
    } else if (index.type === "original") {
      originals.push(index);
    } else if (index.type === "trending") {
      trending.push(index);
    }
  });
  dispatch(
    setMovie({
      recommend: recommends,
      newDisney: newDisney,
      original: originals,
      trending: trending,
    })
  );

  return (
    <Container>
      <ImgSlider />
      <Viewer />
      <Recomments />
      <NewDisney />
      <Origenals />
      <Trending />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vh + 5px);
  &:after {
    background: url(${Background}) center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;
