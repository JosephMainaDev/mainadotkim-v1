import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import Helmet from 'react-helmet'
import { FaTags } from 'react-icons/fa'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Masthead from '../components/Masthead'

const PostDate = styled.p`
  font-size: 0.875rem;
  font-style: italic;
  margin-top: 0;
  padding-top: 1rem;
  color: #868e96;
`

const Tags = styled(Link)`
  display: inline-block;
  padding: 0.3rem 0.9rem;
  margin: 0 0.5rem 0.5rem 0;
  white-space: nowrap;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 3px;
  background-color: #f2f2f2;
  text-decoration: none;
  color: #6d6d6d;
  &:hover {
    text-decoration: underline;
    color: #6d6d6d;
  }
`

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Helmet title={`JM Kimani Blog | ${post.frontmatter.title} `} />
      <Masthead
        title={post.frontmatter.title}
        summary={post.frontmatter.summary}
      />
      <Container>
        <PostDate>{post.frontmatter.date}</PostDate>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <hr />

        <p>
          <FaTags />&nbsp;TAGS:&nbsp;&nbsp;
          {post.frontmatter.tags.map(tag => (
            <Tags to={`/tags/${kebabCase(tag)}`}>{tag}</Tags>
          ))}
        </p>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        summary
        tags
      }
    }
  }
`

export default BlogPost
