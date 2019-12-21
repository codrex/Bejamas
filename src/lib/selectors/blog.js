import get from 'lodash.get';

function blogToBlogListData(rawData) {
  const title = get(rawData, 'frontmatter.title');
  const excerpt = get(rawData, 'frontmatter.excerpt');
  const image = get(rawData, 'frontmatter.featuredimage.childImageSharp.fluid');

  return {
    title,
    excerpt,
    image
  };
}

export function getBlogListData(rawData = []) {
  return rawData.map(blogToBlogListData);
}
