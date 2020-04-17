import React from 'react'
import styled from 'styled-components'

const ContainerStyle = styled.div`
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  @media (min-width: 992px) {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
`

const Container = ({ children }) => <ContainerStyle>{children}</ContainerStyle>

export default Container
