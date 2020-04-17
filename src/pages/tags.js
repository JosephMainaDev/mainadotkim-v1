import React from 'react'
import PropTypes from 'prop-types'
import kebabCase from 'lodash/kebabCase'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Masthead from '../components/Masthead'
import tags from '../utils/tags'

const TagsGrid = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 0.75rem;
  grid-template-columns: repeat(auto-fill, minmax(12.5rem, 1fr));
  padding: 1.5rem 0;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
`

const TagCell = styled.div`
  border-bottom: 1px dotted #e4e6e8;
  padding: 0.67rem 0.3rem 1rem 0.3rem;
  min-width: 12.5rem;
  width: auto;
  flex: 1 1 25%;
`

const TagInfo = styled.div`
  box-sizing: content-box;
  font-size: 0.8125rem;
  line-height: 1;
  overflow: hidden;
  margin-bottom: 0.3rem;
  padding: 0.3rem 0.67rem 0.3rem 0;
`

const TagCount = styled.span`
  font-size: 0.75rem;
  margin-right: 0.3rem;
  color: #868e96;
`

const TagsLink = styled(Link)`
  position: relative;
  display: inline-block;
  padding: 0.3rem 0.9rem;
  margin: 0.125rem 0.125rem 0.125rem 0;
  font-size: 0.8125rem;
  font-weight: 600;
  white-space: nowrap;
  text-transform: uppercase;
  text-align: center;
  border-radius: 3px;
  background-color: #f2f2f2;
  text-decoration: none;
  color: #6d6d6d;
  &:hover {
    text-decoration: underline;
    color: #6d6d6d;
  }
`

// <Helmet title={`${title} | Tags`} />

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Helmet title="JM Kimani Blog | Tags" />
    <Masthead
      title="Tags"
      summary="This is a list of tags in this site. A tag is a keyword or label that categorizes blog posts with other, similar posts.
Follow these tags to find similar posts easily."
    />
    <Container>
      <TagsGrid>
        {group.map(tag => (
          <TagCell key={tag.fieldValue}>
            <TagsLink to={`/tags/${kebabCase(tag.fieldValue)}`}>
              {tag.fieldValue}
            </TagsLink>

            <TagCount>&nbsp;×&nbsp;{tag.totalCount}</TagCount>

            <TagInfo>{tags[tag.fieldValue]}</TagInfo>
          </TagCell>
        ))}
      </TagsGrid>
    </Container>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
