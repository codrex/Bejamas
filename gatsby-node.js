const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
          frontmatter {
            templateKey
            featuredimage {
              childImageSharp {
                fluid {
                  base64
                  srcSet
                  srcSetWebp
                  src
                }
              }
            }
            date
            title
          }
          html
          timeToRead
        }
      }
    }
  `);

  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(
        `./src/templates/${node.frontmatter.templateKey}.js`
      ),
      context: {
        slug: node.fields.slug,
        data: node
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

exports.onCreateBabelConfig = function onCreateBabelConfig({ actions }) {
  actions.setBabelPlugin({
    name: `@babel/plugin-proposal-export-default-from`
  });
};
