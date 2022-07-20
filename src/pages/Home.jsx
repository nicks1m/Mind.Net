import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
import Introduction from '../components/Introduction'
import RenderBoard from '../components/RenderBoard'
import { Add, Remove, Close } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import { insertItem, removeItem, incrementZ, decrementZ, updateXY } from '../redux/actions'


const Container = styled.div`
      min-height:100vh;
      position:relative;
`
const ComponentContainer = styled.div`
      position:relative;
`

const Board = styled.div`
position:relative;
      width:100%;
      top:0;
      min-height:100vh;
`
const Intro = styled.div`
      padding-left: 25%;
      padding-right: 25%;
`
const Title = styled.span`
      width:10%;
      font-weight:900;
`

const Description = styled.div``

const Information = styled.div`
      position:sticky;
      top:0;
      display:flex;
      background-color:#f0f0f0;
      width:100%;
      height:30px;
      justify-content:center;
      align-content:center;
      text-align:center;
      z-index:5;
`

const Input = styled.input`
      width:50%;
      height:80%;
`
const InputWrapper = styled.div`
      justify-content:center;
      align-content:center;
      display:flex;
      flex:2;
      padding-right:20px;
`

const FilterType = styled.select`
      width:100px;
      margin-left:5px;
      padding:5px;
      border:1px solid black;
      font-weight:900;
      height:100%;
`
const FilterTypeOption = styled.option`
      font-weight:900;
`
const Button = styled.button`
      width:20%;
      
`

const Label = styled.span`
      font-size:16px;
      height:100%;
      margin-left:20px;
      margin-right:20px;
`

export const Home = () => {
      const [items, setItems] = useState([]);
      const [component, setComponent] = useState({
            type: "text",
            text: "Enter Text",
            src: "Enter Source",
      })
      const [type, setType] = useState();
      const [field, setField] = useState();
      const types = ["text", "image"];

      const itemList = useSelector(state => state.items.items);
      const dispatch = useDispatch()
      console.log("item list retrieved: ", itemList);

      useEffect(() => {
            itemList !== null && setItems(itemList);
      }, [itemList])


      const handleDelete = (id) => {
            dispatch(removeItem(id))
      };

      const handleZinc = (id) => {
            dispatch(incrementZ(id))
      };
      const handleZdec = (id) => {
            dispatch(decrementZ(id))
      };

      const handleXY = (id,x,y) => {
            dispatch(updateXY({id,x,y}));
      }

      const handleInput = (e) => {
            setComponent({ ...component, text: e.target.value });
      };

      const handleSrc = (e) => {
            setComponent({ ...component, src: e.target.value });
      };




      const addItem = (text) => {
            dispatch(insertItem({
                  id: `${Math.floor(Math.random() * 100)}`,
                  text: `${component["text"]}`,
                  type: `${component["type"]}`,
                  src: `${component["src"]}`,
                  z: 0,
                  x:0,
                  y:0,
            }));
            setComponent({
                  type: "text",
                  text: "",
                  src: "",
            })
      }


      return (
            <Container>
                  <Information>
                        <Title>Add component</Title>
                        <FilterType onChange={(e) => setComponent({ ...component, type: e.target.value })}>
                              {types.map((t) => (
                                    <FilterTypeOption key={t}>{t}</FilterTypeOption>
                              ))}
                        </FilterType>
                        <InputWrapper>
                              <Label>Text: </Label>
                              <Input onChange={(e) => handleInput(e)}></Input>
                              <Label>Src: </Label>
                              <Input onChange={(e) => handleSrc(e)}></Input>
                        </InputWrapper>
                        <Button onClick={() => addItem(field)}>Add</Button>
                  </Information>
                  <Board>
                        <RenderBoard handleXY={handleXY} handleDelete={handleDelete} handleZinc={handleZinc} handleZdec={handleZdec} />
                  </Board>
            </Container>
      )
}

export default Home;
