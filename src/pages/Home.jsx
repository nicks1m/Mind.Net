import {React, useState, useEffect} from 'react'
import styled from 'styled-components'
import Component from '../components/Component'
import Draggable from 'react-draggable'
import Introduction from '../components/Introduction'
import {Add, Remove, Close} from '@mui/icons-material'


const Container = styled.div`
      min-height:100vh;
      position:relative;
`
const ComponentContainer = styled.div`
      position:relative;
`

const Board = styled.div`
      position:absolute;
      width:100%;
      top:0;
      min-height:100vh;
      position:relative;
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
      width:20px%;
      background:${Close}
`

const Label = styled.span`
      font-size:16px;
      height:100%;
      margin-left:20px;
      margin-right:20px;
`

export const Home = () => {
  const [items,setItems] = useState([]);
  const [component, setComponent] = useState({
    type:"text",
    text:"Enter Text",
    src:"Enter Source",
  })
  const [type, setType] = useState();
  const [field,setField] = useState();
  const types = ["text","video","image"];

  useEffect(() => {
    console.log(component);
  }, [items])

  const renderBoard = () => {
    return items?.map((item,index) => {
      return <ComponentContainer key={index} >
      {item}
      </ComponentContainer>
    })
  }



  const handleInput = (e) => {
    setComponent({...component,text:e.target.value});
  }

  const handleSrc = (e) => {
    setComponent({...component,src:e.target.value});
  }


  const addItem = (text) => {
    var newItems = [...items];
    newItems.push(<Component id={newItems?.length} text={component["text"]} type={component["type"]} src={component["src"]} items={items} setItems={setItems}/>);
    setItems(newItems);
  }


    return (
        <Container>
          <Information>
          <Title>Add component</Title>
          <FilterType onChange={(e) => setComponent({...component,type:e.target.value})}>
          {types.map((t)=>(
            <FilterTypeOption key={t}>{t}</FilterTypeOption>
          ))}
          </FilterType>
          <InputWrapper>
              <Label>Text: </Label>
              <Input onChange={(e)=>handleInput(e)}></Input>
              <Label>Src: </Label>
              <Input onChange={(e)=>handleSrc(e)}></Input>
          </InputWrapper>
          <Button onClick={()=> addItem(field)}>Add</Button>
          </Information>

          <Board>
            {renderBoard()}
          </Board>
        </Container>
    )
}
export default Home;
