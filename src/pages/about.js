import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import { FaTwitter } from "react-icons/fa"

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 38rem;
  height: 100vh;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`

const AboutHeader = styled.h1`
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 3rem;
  color: inherit;
  line-height: 1.20849;
`

const AboutLead = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: #6d6d6d;
  line-height: inherit;
  margin-top: 0;
  margin-bottom: 1rem;
`
const TwitterButton = styled.a`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #1b95e0;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  margin: 0 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`
const AboutPage = () => (
  <AboutContainer>
    <Helmet title="Kimani Maina | About" />
    <AboutHeader>About me</AboutHeader>
    <AboutLead>Nice to meet you. And, thank you for stopping by.</AboutLead>
    <p>
      My name is <strong>Kimani Maina</strong>, an electrical engineer from
      Nairobi, Kenya. I teach Electronics as my day job and learn programming
      every (other) time.
    </p>
    <p>
      This is my online home, for documenting my progress as I learn programming
      and my experience teaching young people.
    </p>

    <h3>Interests</h3>
    <p>
      I have a huge interest in: Robotics, Automation, Machine Learning and
      Artificial Intelligence. Especially how to integrate these in Agriculture.
      I want to see (my fellow) farmers get better yields, get better income and
      live better lives.
    </p>
    <p>
      I have good knowledge of how to use a piece of chalk ;) and write code in
      JavaScript, React and Python.
    </p>
    <h3>Contact</h3>
    <p>
      This home is still under construction, so there is little to do here. Be
      sure to check back later, I can promise you there will be some more
      content for your consumption.
    </p>
    <p>
      Follow me on
      <TwitterButton href="https://twitter.com/mainadotkim">
        <FaTwitter />
        &nbsp;&nbsp;@mainadotkim
      </TwitterButton>
      for updates on the progress.
    </p>
    <h3>Again, thank you for visiting.</h3>
  </AboutContainer>
)

export default AboutPage
