import {React, useState, useEffect} from 'react'
import styled from 'styled-components'
import Component from './Component'
import Draggable from 'react-draggable'
import {Add, Close} from "@mui/icons-material"
import ComponentInput from './ComponentInput'


const Container = styled.div`
`

const Button = styled.button`
      background-color:transparent;
      border:1px solid black;
      width:50px;
      height:50px;
      &:hover{
        cursor:pointer;
      }
`
const Wrapper = styled.div`
      position:relative;
      padding:30px;
`

export const AddComponent = (props) => {

const [adding, setAdding] = useState(false);

const handleClick = () => {
    setAdding(true);
}

const handleButton = () => {
    return adding ? <ComponentInput/> : <Button><Add onClick={()=> handleClick()}/></Button>
}
    return (
          <Container>
          <Wrapper>
            {handleButton()}
            {adding ? <Button><Close onClick={()=>setAdding(false)}/></Button> : null}
          </Wrapper>
          </Container>
    )
}
export default AddComponent
