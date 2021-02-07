import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  nav ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: space-between;
    @media (min-width: 768px) {
      grid-template-columns: 1fr repeat(3, auto);
    }
  }
  nav ul li a {
    display: inline-block;
    padding: 1rem;
    text-decoration: none;
    color: ${({ theme }) => theme.color.text};
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyles>
  );
}
