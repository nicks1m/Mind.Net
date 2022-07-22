import { React, useState } from 'react';
import styled from 'styled-components'
import mind_net from '../assets/mind_net.png'
import Register from '../components/Register'
const Container = styled.div`
    display:flex;
    position:relative;
    min-height:100vh;
    align-items:flex-start;

`
const LogoContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    width:60%;
`
const Logo = styled.img`
    height:40%;
    width:100%;
`
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
const LoginBox = styled.div`
    flex:1; 
    color:white;
    padding:15px 15px;
`

const Message = styled.p`
    color: black;
    padding:15px 15px;
`

const Login = () => {
    const [toggleRegister, setToggle] = useState(false);

    const handleSubmit = () => {
        console.log("Submitted");
    }
    const handleToggle = () => {
        setToggle(!toggleRegister);
        console.log("Register Mode: ", toggleRegister);
    }

    return (
        <Container>
            <LogoContainer>
                <Logo src={mind_net} />
            </LogoContainer>
            <Box>

                {toggleRegister ?
                    <Register handleToggle={handleToggle} /> :
                    <LoginBox>
                        <Message>Welcome to Mind.Net! Please login below if you already have an existing account, if not, click on the register button
                            and provide us with some details so we can get you started.
                        </Message>
                        <InputWrapper>
                            <Input placeholder="Email"></Input>
                        </InputWrapper>
                        <InputWrapper>
                            <Input placeholder="Password"></Input>
                        </InputWrapper>
                        <Button onClick={() => handleSubmit()}>LOGIN</Button>
                        <Button onClick={() => handleToggle()}>REGISTER</Button>
                    </LoginBox>}
            </Box>


        </Container >
    );
};

export default Login;