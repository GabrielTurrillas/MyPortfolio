import React from "react";
import styled from 'styled-components';
import {
  device,
  GlobalStyles,
  bigTitleFontSizes
} from "../../styles";
import { Card } from '../../components'

const Technologies = ({ technologies, title }) => {
  console.log('technologies', technologies, title)
  return (
    <>
      <GlobalStyles />
      <Container>
        <CardGrid>
          {technologies.map(technology => {
            return <Card id='Card' key={technology.name} technology={technology} />
          })}
        </CardGrid>
      </Container>
    </>
  );
}

export default Technologies;

const Container = styled.div`
  width:100%;
  justify-content:center;
  background: #010606;
  padding-bottom: 3rem;
`

const CardGrid = styled.div`
  display: grid;
  justify-items: center;
  justify-content:center;
  width:100%;
  gap: 1rem;
  grid-auto-rows:max-content;
  grid-template-columns:repeat(auto-fit, minmax(20rem, 3fr));
  @media ${device.mobileM} {
    padding: 0 2rem;
  }
  @media ${device.laptop}{
    padding: 0 10rem;
  }
`
