import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const RecentPostsStyled = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  @media (min-width: 768px) {
    margin-top: 6rem;
  }
  .posts {
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
    }
  }
  .posts p {
    font-weight: 300;
  }
`;

export default function RecentPosts() {
  const { gatsbyImg, vueImg } = useStaticQuery(graphql`
    query {
      gatsbyImg: file(relativePath: { eq: "gatsby.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      vueImg: file(relativePath: { eq: "vue.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <RecentPostsStyled>
      <div className="container">
        <h2>Recent Posts</h2>
        <div className="posts">
          <div className="post">
            <p>Creating a Gatbys JS Website from scratch</p>
            <Img
              fluid={gatsbyImg.childImageSharp.fluid}
              alt="Creating a Gatbys JS Website from scratch thumbnail"
            />
          </div>
          <div className="post">
            <p>Taking our first steps into VueJS</p>
            <Img
              fluid={vueImg.childImageSharp.fluid}
              alt="Taking our first steps into VueJS thumbnail"
            />
          </div>
        </div>
      </div>
    </RecentPostsStyled>
  );
}
