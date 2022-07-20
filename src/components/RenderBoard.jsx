import { React, useState } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import { ArrowUpward, ArrowDownward, Close } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux'


const Panel = styled.div`
    opacity:0;
    width:30px;
    height:50%;


`

const ComponentContainer = styled.div`
    position:absolute;
    display:flex;
    z-index:${props => props.zIndex};
    width:150px;
    min-height:100px;
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
const Image = styled.img`
      width:100%;
`

const ImageWrapper = styled.div`
      width:100%;
`
const Id = styled.span``
const Video = styled.video``

export const RenderBoard = ({ handleDelete, handleZinc, handleZdec }) => {

  const renderSwitch = (type,src,text) =>{
    switch(type){
      case 'image':
        return <Image src={src}/>
      case 'text':
        return <Title>{text}</Title>  
    }
  }

  const itemList = useSelector(state => state.items);

  return itemList.items.length < 1 ? <p></p> : itemList.items.map((item, index) => {
    return (
      <Draggable>
        <ComponentContainer key={item.id} zIndex={item.z}>
          <Container>
            {/* <Id>{item.id}</Id> */}
            {renderSwitch(item.type,item.src,item.text)}
            <Title>{item.text}</Title>
          </Container>
          <Panel>
            <Button onClick={() => handleDelete(item.id)}>
              <Close sx={{ fontSize: "15px" }} />
            </Button>
            <Button onClick={() => handleZinc(item.id)}>
              <ArrowUpward sx={{ fontSize: "15px" }} />
            </Button>
            <Button onClick={() => handleZdec(item.id)}>
              <ArrowDownward sx={{ fontSize: "15px" }} />
            </Button>
          </Panel>
        </ComponentContainer>
      </Draggable>
    )
  })
}

export default RenderBoard;
