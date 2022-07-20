import {React, useState, useEffect} from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'

const Container = styled.div``
const Intro = styled.div`
    padding-left: 25%;
    padding-right: 25%;
`
const Title = styled.h1``
const Description = styled.div``

const title = "Mind.Net";

export const Introduction  = () => {
    return (
        <Draggable>
          <Intro>
              <Title>{title}</Title>
              <Description>Mind.Net serves as a hub for you to imprint your stream of consciousness
              on the go. By loading images, videos, texts, you can create graphical collages, design ideas or thought processes
              to aid you in your daily activities. Mind.Net begins as a tabula rasa and grows along with you whenever you want it to.
              It acts as an augmentation to your mind and thoughts, and can serve any number of purposes.
              </Description>
          </Intro>
        </Draggable>
    )
}

export default Introduction;
