import {React,useState,useEffect} from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'
import {ArrowUpward, ArrowDownward,Close} from '@mui/icons-material';
import Home from '../pages/Home'

const Panel = styled.div`
      opacity:0;
      &:hover{
        opacity:1;
      }
`

const Container = styled.div`
      border:0.5px solid grey;
      background-color:white;
      width:200px;
      position:absolute;
      z-index:${props => props.zIndex} ;

      &:hover{
      }

      &:hover ~ ${Panel}  {
      }
`
const Text = styled.h1`
      font-size:20px;
`
const Type = styled.span`
      font-size:12px;
`
const Image = styled.img`
      width:100%;
`

const Button = styled.button`
      width:20%;
      height:5%;
`


export const Component = (info) => {
  const [z, setZ] = useState(0);
  const id = info.id;
  const items = info.items;
  console.log("component id: ", id)
  console.log("array contains: ", items)

    const handleZIndex = (type) => {
      type == "inc" ? setZ(z+1) : setZ(z-1);
      console.log(z);
    };

    const handleDelete = (id) => {
      console.log(items)
      var oldItems = [...items];
      oldItems.splice(id-1,1);
      info.setItems(oldItems);
      console.log("Item deleted");
    };


    return (
        <Draggable
        bounds="body"
        >
          <Container zIndex={z}>
            {info.type == "text" ?
            <Text>{info.text}</Text> : <Image src={info.src}/>}
            <Type>Type: {info.type}</Type>
            <Panel>
              <p>controls</p>
              <Button onClick={()=> handleZIndex("inc")}>
                  <ArrowUpward/>
              </Button>
              <Button onClick={()=> handleZIndex("dec")}>
                  <ArrowDownward/>
              </Button>
              <Button onClick={()=> handleDelete(id)}>
                  <Close/>
              </Button>
            </Panel>
          </Container>
        </Draggable>
    )
}

export default Component;