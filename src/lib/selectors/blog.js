import get from 'lodash.get';

function blogToBlogListData(rawData) {
  const title = get(rawData, 'frontmatter.title');
  const excerpt = get(rawData, 'frontmatter.excerpt');
  const image = get(rawData, 'frontmatter.featuredimage.childImageSharp.fluid');
  const slug = get(rawData, 'fields.slug');

  return {
    title,
    excerpt,
    image,
    slug
  };
}

export function getBlogListData(rawData = []) {
  return rawData.map(blogToBlogListData);
}
