import React from 'react'
import styled from 'styled-components'

const ImageContainerStyle = styled.div`
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  background-image: url("https://unsplash.com/photos/wdMWMHXUpsc");
  background-color: transparent;
  color: #fff;
  font-size: 1.5rem;
  line-height: inherit;

  @media (min-width: 768px) {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
  }

  @media (min-width: 992px) {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
`

const ImageContainer = ({ children }) => <ImageContainerStyle>{children}</ImageContainerStyle>

export default ImageContainer
