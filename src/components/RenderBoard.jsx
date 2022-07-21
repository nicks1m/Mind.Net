import { React, useState } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import { ArrowUpward, ArrowDownward, Close, ZoomIn, ZoomOut, Edit, Check } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { toggleEdit } from '../redux/actions';



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
    padding:20px;
    position:relative;
    border:0.5px solid grey;
    // border-radius:10%;

    
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
    font-weight:900;
`
const Desc = styled.div`
    position:relative;
    font-size:18px;
`
const Input = styled.input`
    position:relative;
    font-size:20px;
    border:0.5px solid grey;
    margin-bottom:5px;
    text-align:center;
    background-color:#fcfcfc;
    &:focus{
      outline-color:grey;
    }
`
const Image = styled.img`
      width:100%;
`
const EditPanel = styled.div`
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
  const dispatch = useDispatch();

  const renderSwitch = (id, title, type, src, text) => {
    switch (type) {
      case 'image':
        return <ContentWrapper>
          <Input type="text" onChange={(e) => handleTitleEdit(e.target.value, id)} defaultValue={title}></Input>
          <ImageWrapper>
            <Image src={src} />
          </ImageWrapper>
          <Input type="text" onChange={(e) => handleTextEdit(e.target.value, id)} defaultValue={text}></Input>
        </ContentWrapper>
      case 'text':
        return <ContentWrapper>
          <Input type="text" onChange={(e) => handleTitleEdit(e.target.value, id)} defaultValue={title}></Input>
          <Input type="text" onChange={(e) => handleTextEdit(e.target.value, id)} defaultValue={text}></Input>
        </ContentWrapper>
    }
  }

  return itemList.items.length < 1 ? <p></p> : itemList.items.map((item, index) => {

    const handleStop = (e, data) => {
      handleXY(item.id, data.x, data.y);
    };

    const handleEdit = (id, edit) => {
      dispatch(toggleEdit({ id, edit }));
    }

    return (
      <Draggable
        bounds="body"
        defaultPosition={{ x: item.x, y: item.y }}
        onStop={handleStop}
      >
        <ComponentContainer key={item.id} zIndex={item.z} >
          <Wrapper scale={item.scale}>
            <Container >
              <Title>{item.title}</Title>
              <Desc>{item.text}</Desc>
              {/* {renderSwitch(item.id, item.title, item.type, item.src, item.text)} */}
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
              <Button disabled={item.edit} onClick={() => handleEdit(item.id, true)}>
                <Edit sx={{ fontSize: "15px" }} />
              </Button>
              <Button disabled={!item.edit} onClick={() => handleEdit(item.id, false)}>
                <Check sx={{ fontSize: "15px" }} />
              </Button>
            </Panel>
              {item.edit ? 
            <EditPanel>
              <Input type="text" onChange={(e) => handleTitleEdit(e.target.value, item.id)} defaultValue={item.title}></Input>
              <Input type="text" onChange={(e) => handleTextEdit(e.target.value, item.id)} defaultValue={item.text}></Input>
            </EditPanel> : null
              }
          </Wrapper>
        </ComponentContainer>
      </Draggable>
    )
  })
}

export default RenderBoard;
