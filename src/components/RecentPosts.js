import React from 'react';
import styled from 'styled-components';
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

export default function RecentPosts({ posts }) {
  return (
    <RecentPostsStyled>
      <div className="container">
        <h2>Recent Posts</h2>
        <div className="posts">
          {posts.map((post) => (
            <div key={post.title} className="post">
              <p>{post.title}</p>
              <Img fluid={post.img} alt={post.title} />
            </div>
          ))}
        </div>
      </div>
    </RecentPostsStyled>
  );
}
