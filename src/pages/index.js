import React from 'react';
import styled from 'styled-components';
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

export default function HomePage() {
  return (
    <HomePageStyles>
      <h1>Hello, world</h1>

      <div className="icons">
        <FontAwesomeIcon icon={faFacebookSquare} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faTwitterSquare} />
      </div>
    </HomePageStyles>
  );
}
