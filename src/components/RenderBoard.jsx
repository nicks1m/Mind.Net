import { React, useState } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import { ArrowUpward, ArrowDownward, Close, ZoomIn, ZoomOut, Edit, Check } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { toggleEdit, editRadius, editBgColor } from '../redux/actions';
import { CompactPicker } from 'react-color';



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
    align-items:flex-start;
    transform:${props => `scale(${props.scale})`};
`

const ContentWrapper = styled.div``

const ComponentContainer = styled.div`
    position:absolute;
    z-index:${props => props.zIndex};
    justify-content:center;
    text-align:center;
    align-content:center;
    &:hover ${Panel} {
      opacity:1;
    }
`
const Container = styled.div`
    background-color:${props => props.rgb};
    padding:20px 20px;
    position:relative;
    border:0.5px solid grey;
    border-radius:${props => `${props.radius}%`};
    overflow:hidden;

    
`
const Button = styled.button`
    align-content:center;
    text-align:center;
    background-color:transparent;
    border:none;
    cursor:pointer;
    position:relative;
    
`
const ButtonGroup = styled.div`
    display:flex;
    justify-content:space-between;
    
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
    width:100%;
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
      font-size:16px;
      font-weight:900;
      z-index:999;
`
const ImageWrapper = styled.div`
      width:100%;
      margin-top:5px;
`
const ColorPicker = styled.div``
const Id = styled.span``
const Video = styled.video``


export const RenderBoard = ({
  handleTitleEdit, handleXY, handleDelete,
  handleZ, handleTextEdit, handleScale }) => {

  const itemList = useSelector(state => state.items);
  const dispatch = useDispatch();

  return itemList.items.length < 1 ? <p></p> : itemList.items.map((item, index) => {

    const handleStop = (e, data) => {
      handleXY(item.id, data.x, data.y);
    };

    const handleEdit = (id, edit) => {
      dispatch(toggleEdit({ id, edit }));
    }

    const handleBorderRadius = (id, radius) => {
      dispatch(editRadius({ id, radius }));
      console.log(radius);
    }

    const handleColorChange = (id, color) => {
      let rgb = color.hex;
      dispatch(editBgColor({ id, rgb }));
    }

    return (
      <Draggable
        bounds="body"
        defaultPosition={{ x: item.x, y: item.y }}
        onStop={handleStop}
        disabled={item.edit}
      >
        <ComponentContainer key={item.id} zIndex={item.z} >
          <Wrapper scale={item.scale}>
            <Container radius={item.radius} rgb={item.rgb}>
              <Title>{item.title}</Title>
              <Desc>{item.text}</Desc>
              {item.src === "" ? null : <Image src={item.src} />}
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
                <p>EDIT MODE</p>
                <Input type="text" onChange={(e) => handleTitleEdit(e.target.value, item.id)} defaultValue={item.title}></Input>
                <Input type="text" onChange={(e) => handleTextEdit(e.target.value, item.id)} defaultValue={item.text}></Input>
                <ButtonGroup>
                  <Button onClick={() => handleBorderRadius(item.id, 0)}>0%</Button>
                  <Button onClick={() => handleBorderRadius(item.id, 10)}>10%</Button>
                  <Button onClick={() => handleBorderRadius(item.id, 20)}>20%</Button>
                  <Button onClick={() => handleBorderRadius(item.id, 30)}>30%</Button>
                  <Button onClick={() => handleBorderRadius(item.id, 40)}>40%</Button>
                  <Button onClick={() => handleBorderRadius(item.id, 50)}>50%</Button>
                </ButtonGroup>
                <ColorPicker>
                  <CompactPicker color={item.rgb} onChangeComplete={(color) => handleColorChange(item.id, color)} />
                </ColorPicker>
              </EditPanel> : null
            }
          </Wrapper>
        </ComponentContainer>
      </Draggable>
    )
  })
}

export default RenderBoard;
