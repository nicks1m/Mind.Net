import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
import RenderBoard from '../components/RenderBoard'
import AddComponent from '../components/AddComponent'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, editZ, updateXY, editText, editTitle, editScale } from '../redux/actions'


const Container = styled.div`
      min-height:100vh;
      position:relative;
`
const Board = styled.div`
      position:absolute;
      width:100%;
      top:0;
      min-height:100vh;
`

export const Home = () => {
      const [items, setItems] = useState([]);
      const [type, setType] = useState();
      const [field, setField] = useState();

      const itemList = useSelector(state => state.items.items);
      const dispatch = useDispatch();

      useEffect(() => {
            itemList !== null && setItems(itemList);
      }, [itemList])

      const handleTextEdit = (text,id) => {
            dispatch(editText({id,text}));
      };

      const handleTitleEdit = (text,id) => {
            dispatch(editTitle({id,text}));
      };

      const handleDelete = (id) => {
            dispatch(removeItem(id));
      };

      const handleZ = (id,type) => {
            dispatch(editZ({id,type}));
      };

      const handleXY = (id,x,y) => {
            dispatch(updateXY({id,x,y}));
      }


      const handleScale = (id, type) => {
            dispatch(editScale({id,type}));
      };

      
      return (
            <Container>
                  <AddComponent/>     
                  <Board>
                        <RenderBoard handleTitleEdit={handleTitleEdit} handleXY={handleXY} handleDelete={handleDelete}
                        handleZ={handleZ} handleTextEdit={handleTextEdit} handleScale={handleScale} />
                  </Board>
            </Container>
      )
}

export default Home;
