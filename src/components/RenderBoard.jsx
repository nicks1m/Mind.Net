import { React, useState } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import { ArrowUpward, ArrowDownward, Close, ZoomIn, ZoomOut } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux'


const Panel = styled.div`
    opacity:0;
    width:30px;
    height:50%;
    right:0;
    position:relative;

`
const Wrapper = styled.div`
    position:relative;
    display:flex;
    transition-duration: 150ms;
    transform:${props => `scale(${props.scale})`};

`

const ContentWrapper = styled.div``

const ComponentContainer = styled.div`
    position:absolute;
    display:flex;
    z-index:${props => props.zIndex};
    min-width:130px;
    min-height:50px;
    max-width:350px;
    max:height:300px;
    justify-content:center;
    text-align:center;
    align-content:center;
    &:hover ${Panel} {
      opacity:1;
    }



`
const Container = styled.div`
    background-color:white;
    padding:10px;
    position:relative;
    border:0.5px solid grey;
    
`
const Button = styled.button`
    align-content:center;
    text-align:center;
    background-color:transparent;
    border:none;
    cursor:pointer;
    position:relative;
`
const Title = styled.div`
    position:relative;
    font-size:20px;
`
const Input = styled.input`
    position:relative;
    font-size:20px;
    border:none;
    text-align:center;
`
const Image = styled.img`
      width:100%;
`

const ImageWrapper = styled.div`
      width:100%;
      margin-top:5px;
`
const Id = styled.span``
const Video = styled.video``

export const RenderBoard = ({
  handleTitleEdit, handleXY, handleDelete,
  handleZ, handleTextEdit, handleScale }) => {

  const itemList = useSelector(state => state.items);

  const renderSwitch = (id, title, type, src, text) => {
    switch (type) {
      case 'image':
        return <ContentWrapper>
          <Input type="text" autoFocus onChange={(e) => handleTitleEdit(e.target.value, id)} defaultValue={title}></Input>
          <ImageWrapper>
            <Image src={src} />
          </ImageWrapper>
          <Input type="text" autoFocus onChange={(e) => handleTextEdit(e.target.value, id)} defaultValue={text}></Input>
        </ContentWrapper>
      case 'text':
        return <ContentWrapper>
          <Input type="text" autoFocus onChange={(e) => handleTitleEdit(e.target.value, id)} defaultValue={title}></Input>
          <Input type="text" autoFocus onChange={(e) => handleTextEdit(e.target.value, id)} defaultValue={text}></Input>
        </ContentWrapper>
    }
  }

  return itemList.items.length < 1 ? <p></p> : itemList.items.map((item, index) => {

    const handleStop = (e, data) => {
      handleXY(item.id, data.x, data.y);
    };

    return (
      <Draggable
        bounds="body"
        defaultPosition={{ x: item.x, y: item.y }}
        onStop={handleStop}
      >
        <ComponentContainer key={item.id} zIndex={item.z} scale={item.scale}>
          <Wrapper scale={item.scale}>
            <Container >
              {renderSwitch(item.id, item.title, item.type, item.src, item.text)}
            </Container>
            <Panel>
              <Button onClick={() => handleDelete(item.id)}>
                <Close sx={{ fontSize: "15px" }} />
              </Button>
              <Button onClick={() => handleZ(item.id, "up")}>
                <ArrowUpward sx={{ fontSize: "15px" }} />
              </Button>
              <Button onClick={() => handleZ(item.id, "down")}>
                <ArrowDownward sx={{ fontSize: "15px" }} />
              </Button>
              <Button onClick={() => handleScale(item.id, "up")}>
                <ZoomIn sx={{ fontSize: "15px" }} />
              </Button>
              <Button onClick={() => handleScale(item.id, "down")}>
                <ZoomOut sx={{ fontSize: "15px" }} />
              </Button>
            </Panel>
          </Wrapper>
        </ComponentContainer>
      </Draggable>
    )
  })
}

export default RenderBoard;
