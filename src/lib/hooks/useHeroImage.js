import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash.get';

export function useHeroImage() {
  const data = useStaticQuery(
    graphql`
      {
        markdownRemark {
          frontmatter {
            hero {
              image {
                childImageSharp {
                  fluid(fit: CONTAIN) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return get(
    data,
    'markdownRemark.frontmatter.hero.image.childImageSharp.fluid',
    {}
  );
}
