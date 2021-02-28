import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SocialIcons from '../components/SocialIcons';

const BlogPageStyles = styled.div`
  .blogpage-header {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`;

const BlogItemsStyles = styled.div`
  display: grid;
  grid-gap: 2rem;
  .blog-item {
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 250px 1fr;
      grid-gap: 1.5rem;
    }
    @media (min-width: 1200px) {
      display: grid;
      grid-template-columns: 450px 1fr;
      grid-gap: 1.5rem;
    }
  }
  .blog-item__title {
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 1rem;
    @media (min-width: 768px) {
      margin-top: 0;
    }
  }
  .blog-item__date-read {
    font-size: 0.9rem;
  }
  .blog-item__text {
    display: grid;
    align-items: center;
  }
  .blog-item__description {
    margin-bottom: 0;
  }
`;

export default function BlogPage({ data }) {
  const { gatsbyImg, vueImg } = data;
  return (
    <BlogPageStyles>
      <div className="container">
        <div className="blogpage-header text-center">
          <h1 className="hero__title">THE BLOG</h1>
          <p className="hero__subtitle">WHAT ARE WE TALKING ABOUT TODAY?</p>
          <SocialIcons />
        </div>
        <BlogItemsStyles>
          <div className="blog-item">
            <Img fluid={gatsbyImg.childImageSharp.fluid} />
            <div className="blog-item__text">
              <div>
                <p className="blog-item__title">
                  Creating a Gatbys JS Website from scratch
                </p>
                <p className="blog-item__date-read">
                  January 1st 2021 - 15 minute read
                </p>
                <p className="blog-item__description">
                  Today we are going to create a GatsbyJS project from scratch!
                  No cli commands here, we are doing it the old fashioned way.
                  This way we will be able to understand the ins and outs of
                  what GatsbyJS does. We will cover everything from IDE setup to
                  creating your first page
                </p>
              </div>
            </div>
          </div>
          <div className="blog-item">
            <Img fluid={vueImg.childImageSharp.fluid} />
            <div className="blog-item__text">
              <div>
                <p className="blog-item__title">
                  Taking our first steps into VueJS
                </p>
                <p className="blog-item__date-read">
                  January 15th 2021 - 10 minute read
                </p>
                <p className="blog-item__description">
                  In this short we will learn the fundamentals of a VueJS app.
                  This blog post is part of a larger series which will cover the
                  ins and outs of vueJS oso strap in theres a lot to cover!
                </p>
              </div>
            </div>
          </div>
        </BlogItemsStyles>
      </div>
    </BlogPageStyles>
  );
}

export const query = graphql`
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
`;
