import {React, useState, useEffect} from 'react'
import styled from 'styled-components'
import {setGlobalState,useGlobalState} from '../initialiseState';
import Component from './Component'
const Container = styled.div`

`
const Information = styled.div`
      border:1px solid grey;
      width:250px;
      height:150px;
`

const Title = styled.h1`
      font-size:14px;
`

const Input = styled.input``
const Type = styled.input``
const FilterType = styled.select`
      margin-left:5px;
      padding:5px;
      border:1px solid black;
      font-weight:900;
`
const FilterTypeOption = styled.option`
      font-weight:900;
`
const Button = styled.button``

export const ComponentInput = () => {
    const [type, setType] = useState();
    const [items, setItems] = useState(useGlobalState("items"));
    const types = ["text","video","image"];


    return (
        <Information>
        <Title>Add a component</Title>
        <FilterType onChange={(e) => setType(e.target.value)}>
        {types.map((t)=>(
          <FilterTypeOption key={t}>{t}</FilterTypeOption>
        ))}
        </FilterType>
        <Input></Input>
        </Information>
    )
}
export default ComponentInput;
