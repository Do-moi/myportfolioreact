import React from "react";
import styled from "styled-components";
import { BsArrowDown } from "react-icons/bs";

const MyScroll = styled.div`
  position: relative;
  z-index: 1;
  bottom: 2.6em;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: transparent;
  font-weight: bold;
  color: #fff;

  @keyframes down {
    0% {
      position: relative;
      bottom: 4em;
      opacity: 0;
    }
    50% {
      position: relative;
      bottom: 3em;
      opacity: 0.5;
    }
    100% {
      position: relative;
      bottom: 2em;
      opacity: 1;
    }
  }
  animation: down 1s infinite linear alternate;
  width: 100%;
`;
const ScrollDown = () => {
  return (
    <MyScroll>
      <div className="turn">
        <BsArrowDown size={30} />
      </div>
    </MyScroll>
  );
};
export default ScrollDown;
