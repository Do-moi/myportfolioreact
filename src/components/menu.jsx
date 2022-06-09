import React, { useState } from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Menu = ({ menuItem }) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (title, text) => {
    setTitle(title);
    setText(text);
    setShow(true);
  };
  return (
    <MenuItemStyled>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {menuItem.map((item, i) => {
        return (
          <CardDeck key={i}>
            <Card className="portfolio-image h-100">
              <Card.Img
                variant="top"
                src={item.image}
                style={{ height: "200px " }}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>

                <Button
                  variant="primary"
                  onClick={() => handleShow(item.title, item.text)}
                >
                  Détail
                </Button>
                <Button
                  variant="primary"
                  className="m-2"
                  href={item.link2}
                  target="_blank"
                >
                  code
                </Button>
                <Button variant="primary" href={item.link1} target="blank">
                  site
                </Button>
              </Card.Body>
            </Card>
          </CardDeck>
        );
      })}
    </MenuItemStyled>
  );
};
const MenuItemStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .grid-item {
    h6 {
      font-size: 1.5rem;
      color: white !important;
    }
    .portfolio-content {
      display: block;
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
        height: 30vh;
        object-fit: cover;
      }
      ul {
        transform: translateY(-600px);
        transition: all 0.4s ease-in-out;
        position: absolute;
        left: 50%;
        top: 40%;
        opacity: 0;
        li {
          background-color: var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          margin: 0 0.5rem;
          transition: all 0.4s ease-in-out;
          &:hover {
            background-color: var(--primary-color);
          }
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease-in-out;
          }
        }
      }
      .portfolio-image {
        &::before {
          content: "";
          position: absolute;
          left: 2%;
          top: 2%;
          height: 0;
          width: 0;
          transition: all 0.4s ease-in-out;
        }
      }
      .portfolio-image:hover {
        ul {
          transform: translateY(0);
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease-in-out;
          opacity: 1;
          li {
            transition: all 0.4s ease-in-out;
            &:hover {
              background-color: var(--primary-color);
            }
            a {
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.4s ease-in-out;
            }
          }
          li:hover {
            svg {
              color: var(--white-color);
            }
          }
          svg {
            font-size: 2rem;
          }
        }
        &::before {
          height: calc(100% - 32%);
          width: calc(100% - 4%);
          background-color: white;
          opacity: 0.9;
          transform-origin: left;

          transition: all 0.4s ease-in-out;
        }
      }
    }
  }
`;

export default Menu;
