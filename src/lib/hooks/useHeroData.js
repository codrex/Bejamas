import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash.get';

export function useHeroData() {
  const data = useStaticQuery(
    graphql`
      {
        markdownRemark {
          frontmatter {
            hero {
              heading
              subheading
            }
          }
        }
      }
    `
  );
  return get(data, 'markdownRemark.frontmatter.hero', {});
}
