import { React, useState } from 'react';
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { insertItem } from '../redux/actions'
import { Add, Close } from '@mui/icons-material';


const Information = styled.div`
      z-index:999;
      text-transform:uppercase;
      max-width:400px;
      display:flex;
`
const Input = styled.input`
      width:50%;
`
const InputWrapper = styled.div`

`

const FilterType = styled.select`
      width:60px;
      border:1px solid black;
      font-weight:900;
      display:flex;
      margin-left:10px;
      
`
const FilterTypeOption = styled.option`
      font-weight:900;
`
const Button = styled.button`
    //   width:20px;
      display:flex;
      font-weight:900;
      text-transform:uppercase;
      height:20px;
      justify-content:center;    
      background-color:white;
      color:black;
      border:none;
      
      &:hover{
        color:white;
        background-color:black;
      }
`
const ToggleContainer = styled.div`
      padding:15px 15px;
      position:absolute;
      left:0;
      z-index:999;
`
const Toggle = styled.button`
      width:50px;
      height:50px;
      background-color:#fcfcfc;
      border:0.5px solid grey;
`
const TopBar = styled.div`
      height:250px;
      width:400px; 
      border:0.5px solid grey; 
      margin-left:25%;
      margin-top:15px;
      background-color: #fcfcfc;
      z-index:999;

`

const Label = styled.span`
      font-size:16px;
      margin-left:10px;
      margin-right:10px;
      width:75px;
`

const Title = styled.div`
      font-weight:900;
      height:20px;
      text-align:left;
      padding:10px 10px;
      width:100%;

`
const InputContainer = styled.div`
      display:flex;
      margin-top:5px;
      text-align:left;


`
const AddContainer = styled.div`
      display:flex;
      

`


const AddComponent = () => {
    const [showInterface, setShowInterface] = useState(false);
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
            x: 550,
            y: 550,
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
        !showInterface ?
            <ToggleContainer>
                <Toggle onClick={() => setShowInterface(true)}><Add /></Toggle>
            </ToggleContainer>
            :
            <Information>
                <ToggleContainer>
                    <Toggle onClick={() => setShowInterface(false)}><Close /></Toggle>
                </ToggleContainer>
                <TopBar>
                    <Title>Add component</Title>
                    <FilterType onChange={(e) => setComponent({ ...component, type: e.target.value })}>
                        {types.map((t) => (
                            <FilterTypeOption key={t}>{t}</FilterTypeOption>
                        ))}
                    </FilterType>
                    <InputWrapper>
                        <InputContainer>
                            <Label>Title: </Label>
                            <Input value={component["title"]} onChange={(e) => handleTitleInput(e)}></Input>
                        </InputContainer>
                        <InputContainer>
                            <Label>Text: </Label>
                            <Input value={component["text"]} onChange={(e) => handleTextInput(e)}></Input>
                        </InputContainer>
                        <InputContainer>
                            <Label>Src: </Label>
                            <Input value={component["src"]} onChange={(e) => handleSrc(e)}></Input>
                        </InputContainer>
                    <Button onClick={() => addItem()}>Add</Button>

                    </InputWrapper>
                </TopBar>
            </Information>
    );
};

export default AddComponent;