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
  background-color: #fff;
  padding: 0 1rem;
  margin: 0 auto;
`

const AboutHeader = styled.h1`
  padding-top: 3rem;
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

const TwitterLink = styled.a`
  display: inline-flex;
  align-items: flex-end;
  padding: 0 1rem;
  margin: 0 1 rem;
  font-weight: 500;
  line-height: inherit;
  color: #1b95e0;
  text-decoration: none;
  font-size: inherit;

  &:hover {
    text-decoration: underline;
    font-weight: 500;
  }
`

const FooterLead = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: inherit;
  line-height: 1.2;
  margin-top: 1rem;
  margin-bottom: 2rem;
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
      <TwitterLink href="https://twitter.com/mainadotkim">
        <FaTwitter />
        &nbsp;@mainadotkim
      </TwitterLink> for updates on the progress.
    </p>
    <FooterLead>Again, thank you for visiting.</FooterLead>
  </AboutContainer>
)

export default AboutPage
