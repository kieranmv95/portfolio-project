import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import Img from 'gatsby-image';
import Button from '../components/Button';
import RecentPosts from '../components/RecentPosts';

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
  .hero__title {
    margin: 0.5rem 0;
  }
  .hero__prefix,
  .hero__subtitle {
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
  .icons {
    display: inline-grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 10px;
    margin-top: 2rem;
    margin-bottom: 2.5rem;
  }
  .icons svg {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.color.social_icons};
  }
`;

export default function HomePage({ data }) {
  const { social } = data.site.siteMetadata;
  const { heroImg, gatsbyImg, vueImg } = data;

  return (
    <HomePageStyles>
      <div className="hero">
        <div className="hero__text">
          <div className="hero__text-inner">
            <p className="hero__prefix">HEY THERE!</p>
            <h1 className="hero__title">I AM KIERAN VENISON</h1>
            <p className="hero__subtitle">SENIOR SOFTWARE ENGINEER</p>
            <div className="icons">
              <a href={social.facebook}>
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
              <a href={social.linkedin}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href={social.twitter}>
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
            </div>
            <div>
              <Button onClick={() => console.log('button hit')}>About</Button>
            </div>
          </div>
        </div>
        <div className="hero__img">
          <Img fluid={heroImg.childImageSharp.fluid} />
        </div>
      </div>
      <RecentPosts
        posts={[
          {
            title: 'Creating a Gatbys JS Website from scratch',
            img: gatsbyImg.childImageSharp.fluid,
          },
          {
            title: 'Taking our first steps into VueJS',
            img: vueImg.childImageSharp.fluid,
          },
        ]}
      />
    </HomePageStyles>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        social {
          facebook
          linkedin
          twitter
        }
      }
    }
    heroImg: file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
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
