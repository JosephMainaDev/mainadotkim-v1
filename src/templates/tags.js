import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Masthead from '../components/Masthead'

const AllTags = styled(Link)`
  display: inline-block;
  padding: 0.3rem 0.9rem;
  margin: 0 0.5rem 1rem 0;
  white-space: nowrap;
  font-size: 1rem;
  border-radius: 3px;
  background-color: #f2f2f2;
  text-decoration: none;
  color: #6d6d6d;
  &:hover {
    text-decoration: underline;
    color: #6d6d6d;
  }
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

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark

  /*
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  */

  const tagSummary = `There ${
    totalCount === 1 ? 'is' : 'are'
  } ${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`

  return (
    <Layout>
      <Helmet title={`Kimani Maina Blog | TAG: ${tag}`} />
      <Masthead title={`TAG: "${tag}"`} summary={tagSummary} />
      <Container>
        <ol>
          {edges.map(({ node }) => {
            return (
              <h3>
                <li key={node.fields.slug}>
                  <PostLink to={node.fields.slug}>
                    {node.frontmatter.title}
                  </PostLink>
                </li>
              </h3>
            )
          })}
        </ol>
        <hr />

        <h4>
          See:&nbsp;&nbsp;<AllTags to="/tags">ALL TAGS</AllTags>
        </h4>
      </Container>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
