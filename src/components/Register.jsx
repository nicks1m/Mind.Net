import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
    width:100%;
    height:30px;
    background-color:black;
    color:white;
    font-weight:900;
    font-size:20px;
    border:none;
    margin-bottom:5px;

    &:hover{
        background-color:white;
        color:black;
        cursor:pointer;
    }
`
const Input = styled.input`
    width:100%;
    height:30px;
`
const Label = styled.span``
const InputWrapper = styled.div`
    justify-content:center;
    margin-bottom:10px;

`
const Box = styled.div`
    align-items:center;
    min-height:100vh;
    width:40%;
    display:flex;
    background-color:#fcfcfc;


`
const RegisterBox = styled.div`
    flex:1; 
    color:white;
    padding:15px 15px;
`
const Message = styled.p`
    color: black;
    padding:15px 15px;

`

const Register = ({handleToggle}) => {

    const handleSubmit = () => {

    }

    return (
        <RegisterBox>
            <Message>Welcome to Mind.Net! Please login below if you already have an existing account, if not, click on the register button
                    and provide us with some details so we can get you started.
                </Message>
            <InputWrapper>
                <Input placeholder="Name"></Input>
            </InputWrapper>
            <InputWrapper>
                <Input placeholder="Email"></Input>
            </InputWrapper>
            <InputWrapper>
                <Input placeholder="Password"></Input>
            </InputWrapper>
            <InputWrapper>
                <Input placeholder="Re-type Password"></Input>
            </InputWrapper>
            <Button onClick={() => handleSubmit()}>REGISTER</Button>
            <Button onClick={() => handleToggle()}>BACK</Button>
        </RegisterBox>
    );
};

export default Register;