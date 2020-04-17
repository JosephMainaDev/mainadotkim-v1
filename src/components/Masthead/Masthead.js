import React from "react"
import styled from "styled-components"

import Container from "../Container"

const MastheadLayout = styled.div`
  position: relative;
  padding: 3rem 0 1rem;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  text-align: left;
  background-color: #f2f2f2;
  background-repeat: repeat-x;
`

const MastheadTitle = styled.h1`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 300;
  font-size: 3rem;
  color: inherit;
  line-height: 1.20849;

  @media (min-width: 1200px) {
    font-size: 3.5rem;
  }
`

const MastheadSummary = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: #6d6d6d;
  line-height: inherit;
  margin-top: 0;
  margin-bottom: 1rem;

  @media (min-width: 1200px) {
    font-size: 1.875rem;
  }
`

const Masthead = props => (
  <MastheadLayout>
    <Container>
      <MastheadTitle>{props.title}</MastheadTitle>
      <MastheadSummary>{props.summary}</MastheadSummary>
    </Container>
  </MastheadLayout>
)

export default Masthead
