import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Masthead from '../components/Masthead'

const PostSection = styled.div`
  border-top: 1px solid #d7d7d7;
  display: block;
  padding: 0.5rem 0;
  flex: 1;
  padding-right: 4.15198%;
`

const PostDate = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #868e96;
  font-style: italic;
`

const PostLink = styled(Link)`
  color: #424242;
  font-size: 1.5rem;
  font-weight: 500;

  @media (min-width: 1200px) {
    font-size: 1.875rem;
  }

  &:hover {
    color: #ff9800;
    text-decoration: none;
  }
`

const BlogIndex = ({ data }) => (
  <Layout>
    <Helmet title="Kimani Maina | Blog" />
    <Masthead
      title="Blog - Kimani Maina"
      summary="This is the frontpage for my blog. Read a random post below. And feel free to explore :)."
    />
    <Container>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostSection key={node.id}>
          <PostDate>{node.frontmatter.date}</PostDate>

          <PostLink to={node.fields.slug}>{node.frontmatter.title}</PostLink>

          <p>{node.frontmatter.summary}</p>
        </PostSection>
      ))}
    </Container>
  </Layout>
)

/*        
** <p>{ node.excerpt }</p>
*/

export default BlogIndex

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            summary
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
