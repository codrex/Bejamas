import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash.get';

export function useLogos() {
  const data = useStaticQuery(
    graphql`
      {
        markdownRemark {
          frontmatter {
            logos {
              image
              link
            }
          }
        }
      }
    `
  );
  return get(data, 'markdownRemark.frontmatter.logos', []);
}
