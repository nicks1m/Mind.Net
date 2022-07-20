import React from 'react'
import styled from 'styled-components'
import Component from './Component'
import {Close} from '@mui/icons-material';
import Draggable from 'react-draggable'


const ComponentContainer = styled.div`
    position:relative
    width:200px;
    display:flex;
`

const Button = styled.button`
`

export const RenderBoard = ({items, handleDelete}) => {
    return items?.map((item,index) => {
      return  (<Draggable >
      <ComponentContainer key={index} >
      {item}
      <Button onClick={()=>handleDelete(index)}>
      <Close/>
      </Button>
      </ComponentContainer>
      </Draggable>)

  })
}

export default RenderBoard;
