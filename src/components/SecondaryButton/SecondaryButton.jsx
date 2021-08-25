import React from 'react'
import styled from 'styled-components'
import { GlobalStyles, colors, device } from '../../styles'
import { Link } from 'react-router-dom'

const SecondaryButton = ({ english, engButtonText, buttonText, path, typeOfButton }) => {
  const makeContainer = (typeOfButton = 'L') => {
    if (typeOfButton === 'A') {
      return (
        <AnchorContainer href={path}>
          {english ? engButtonText : buttonText}
        </AnchorContainer>
      )
    } else if (typeOfButton === 'L') {
      return (
        <LinkContainer to={path}>
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

export default SecondaryButton;

const Properties = `
  padding: 0.7rem 0.9rem;
  border:2px solid ${colors.primary}; 
  width:fit-content;
  height:fit-content;
  border-radius:50px;
  color: ${colors.primary};
  font-size:0.7rem;
  font-weight: bold;
  text-decoration:none;
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
  }
`

const LinkContainer = styled(Link)`
  ${Properties}
`

const AnchorContainer = styled.a`
  ${Properties}
`