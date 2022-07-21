import { React, useState } from 'react';
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { insertItem} from '../redux/actions'

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
const Intro = styled.div`
      padding-left: 25%;
      padding-right: 25%;
`
const Title = styled.span`
      width:10%;
      font-weight:900;
`

const ComponentContainer = styled.div`
      position:relative;
`


const AddComponent = () => {

    const [component, setComponent] = useState({
        type: "text",
        title: "",
        text: "",
        src: "",
    })
    const [field, setField] = useState();


    const types = ["text", "image"];

    const dispatch = useDispatch();

    const handleTextInput = (e) => {
        e.preventDefault();
        setComponent({ ...component, text: e.target.value });
  };

  const handleTitleInput = (e) => {
        e.preventDefault();
        setComponent({ ...component, title: e.target.value });
  };

  const handleSrc = (e) => {
        e.preventDefault();
        setComponent({ ...component, src: e.target.value });
  };


    const addItem = () => {
        dispatch(insertItem({
            id: `${Math.floor(Math.random() * 10000)}`,
            title: `${component["title"]}`,
            type: `${component["type"]}`,
            text: `${component["text"]}`,
            src: `${component["src"]}`,
            z: 0,
            x: 0,
            y: 0,
            scale: 1
        }));
        setComponent({
            type: "text",
            title: "",
            text: "",
            src: "",
        })
    }

    return (
        <Information>
            <Title>Add component</Title>
            <FilterType onChange={(e) => setComponent({ ...component, type: e.target.value })}>
                {types.map((t) => (
                    <FilterTypeOption key={t}>{t}</FilterTypeOption>
                ))}
            </FilterType>
            <InputWrapper>
                <Label>Title: </Label>
                <Input value={component["title"]} onChange={(e) => handleTitleInput(e)}></Input>
                <Label>Text: </Label>
                <Input value={component["text"]} onChange={(e) => handleTextInput(e)}></Input>
                <Label>Src: </Label>
                <Input value={component["src"]} onChange={(e) => handleSrc(e)}></Input>
            </InputWrapper>
            <Button onClick={() => addItem()}>Add</Button>
        </Information>
    );
};

export default AddComponent;