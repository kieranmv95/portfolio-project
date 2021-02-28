import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Button from '../components/Button';
import RecentPosts from '../components/RecentPosts';
import SocialIcons from '../components/SocialIcons';

const HomePageStyles = styled.div`
  .hero {
    overflow: hidden;
    display: grid;
    grid-gap: 1rem;
    padding: 3rem 0;
    text-align: center;
    @media (min-width: 768px) {
      padding: 0;
      text-align: left;
      grid-template-columns: 1fr 1fr;
      height: 500px;
    }
  }
  .hero__text {
    @media (min-width: 768px) {
      display: grid;
      align-items: center;
      justify-content: center;
    }
  }
  .hero__prefix {
    margin: 0;
    font-weight: 300;
    color: ${({ theme }) => theme.color.text_offset};
  }

  .hero__img .gatsby-image-wrapper {
    width: 100%;
    @media (min-width: 768px) {
      height: 100%;
    }
  }
`;

export default function HomePage({ data }) {
  const { heroImg } = data;

  return (
    <HomePageStyles>
      <div className="hero">
        <div className="hero__text">
          <div className="hero__text-inner">
            <p className="hero__prefix">HEY THERE!</p>
            <h1 className="hero__title">I AM KIERAN VENISON</h1>
            <p className="hero__subtitle">SENIOR SOFTWARE ENGINEER</p>
            <SocialIcons />
            <div>
              <Button onClick={() => console.log('button hit')}>About</Button>
            </div>
          </div>
        </div>
        <div className="hero__img">
          <Img fluid={heroImg.childImageSharp.fluid} />
        </div>
      </div>
      <RecentPosts />
    </HomePageStyles>
  );
}

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;
