import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash.get';

export function useIntroImage() {
  const data = useStaticQuery(
    graphql`
      {
        markdownRemark {
          frontmatter {
            intro {
              image {
                childImageSharp {
                  fixed(width: 236, fit: CONTAIN) {
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
  console.log(data);
  return get(
    data,
    'markdownRemark.frontmatter.intro.image.childImageSharp.fixed',
    {}
  );
}
