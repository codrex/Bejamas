import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash.get';

export function useBlogData(limit = 4) {
  const data = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          sort: { fields: frontmatter___date, order: DESC }
          limit: 4
        ) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              excerpt
              featuredimage {
                childImageSharp {
                  fluid(jpegProgressive: true, fit: COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return get(data, 'allMarkdownRemark.nodes', []);
}
