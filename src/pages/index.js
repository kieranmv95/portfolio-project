import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

const HomePageStyles = styled.div`
  .icons {
    display: inline-grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 10px;
  }
  .icons svg {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.color.social_icons};
  }
`;

export default function HomePage({ data }) {
  const { social } = data.site.siteMetadata;
  return (
    <HomePageStyles>
      <h1>Hello, world</h1>

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
  }
`;
