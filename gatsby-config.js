export default {
  siteMetadata: {
    title: 'Kieran Venison',
    description: 'The personal blog of kieran venison',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat:300,400`, `source sans pro:300,400,400i,700`],
        display: 'swap',
      },
    },
  ],
};
