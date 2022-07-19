import {createGlobalState} from 'react-hooks-global-state'
import React from 'react'
import Introduction from './components/Introduction'
import Component from './components/Component'

const {setGlobalState, useGlobalState} = createGlobalState({
    items:<Introduction/>
});

export {useGlobalState, setGlobalState};
