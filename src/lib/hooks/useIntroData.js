import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash.get';

export function useIntroData() {
  const data = useStaticQuery(
    graphql`
      {
        markdownRemark {
          frontmatter {
            intro {
              description
              heading
            }
          }
        }
      }
    `
  );

  return get(data, 'markdownRemark.frontmatter.intro', {});
}
