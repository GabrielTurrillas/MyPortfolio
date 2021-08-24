import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, GlobalStyles, device } from '../../styles';


const PrimaryButton = ({ english, engButtonText, buttonText, contactUrl, big, typeOfButton }) => {
  const makeContainer = (typeOfButton = 'L') => {
    if (typeOfButton === 'A') {
      return (
        <AnchorContainer href={contactUrl} big={big}>
          {english ? engButtonText : buttonText}
        </AnchorContainer>
      )
    } else if (typeOfButton === 'L') {
      return (
        <LinkContainer to={contactUrl} big={big}>
          {english ? engButtonText : buttonText}
        </LinkContainer>
      )
    } else {
      return 'Undefined!'
    }
  }
  return (
    <>
      <GlobalStyles />
      {makeContainer(typeOfButton)}
    </>
  )
}

export default PrimaryButton

const Properties = `text-decoration:none;
background:${colors.prmary};
width:fit-content;
height:fit-content;
padding: 0.8rem 1rem;
border-radius:50px;
color:black;
font-size:0.7rem;
font-weight:bold;
transition: .1s;
&:hover {
  transform: scale(1.1);
}
&:active {
  transform: scale(0.9);
}
@media ${device.mobileL}{
  padding: 1rem 2rem;
  font-size:1rem;
}`

const LinkContainer = styled(Link)`
  ${Properties}
`

const AnchorContainer = styled.a`
  ${Properties}
`

// const ScrollContainer = styled()