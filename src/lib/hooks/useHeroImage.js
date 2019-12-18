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
                  fixed(fit: CONTAIN, width: 262) {
                    ...GatsbyImageSharpFixed_withWebp
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
    'markdownRemark.frontmatter.hero.image.childImageSharp.fixed',
    {}
  );
}
