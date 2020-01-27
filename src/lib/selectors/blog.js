import get from 'lodash.get';
import format from 'date-fns/format';

export const getFluidImage = data =>
  get(data, 'frontmatter.featuredimage.childImageSharp.fluid');

export const getTitle = data => get(data, 'frontmatter.title');

export const getBlog = data => {
  const timeToRead = get(data, 'timeToRead');
  const html = get(data, 'html');
  const date = get(data, 'frontmatter.date');
  const title = getTitle(data);
  const image = getFluidImage(data);
  return {
    timeToRead,
    html,
    title,
    image,
    date: format(new Date(date), 'MMM d, yyyy')
  };
};

function blogToBlogListData(rawData) {
  const title = getTitle(rawData);
  const image = getFluidImage(rawData);
  const excerpt = get(rawData, 'frontmatter.excerpt');
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
