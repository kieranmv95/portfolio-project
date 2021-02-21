import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const SocialIconsStyles = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;
  margin-top: 2rem;
  margin-bottom: 2.5rem;

  .svg-inline--fa.fa-w-14 {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.color.social_icons};
  }
`;

export default function SocialIcons() {
  const data = useStaticQuery(graphql`
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
  `);

  const { social } = data.site.siteMetadata;

  return (
    <SocialIconsStyles>
      <a href={social.facebook}>
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a>
      <a href={social.linkedin}>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href={social.twitter}>
        <FontAwesomeIcon icon={faTwitterSquare} />
      </a>
    </SocialIconsStyles>
  );
}
