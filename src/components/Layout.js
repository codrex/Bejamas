import React from 'react';
import { Helmet } from 'react-helmet';

import { useSiteMetadata } from '../lib/hooks';
import { NavBar } from './NavBar';

export function Layout(props) {
  const {
    title: defaultTitle,
    description: defaultDescription
  } = useSiteMetadata();
  const title = props.title || defaultTitle;
  const description = props.description || defaultDescription;

  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />

        <meta name='theme-color' content='#fff' />

        <meta property='og:type' content='business.business' />
        <meta property='og:title' content={title} />
        <meta property='og:url' content='/' />

        <script
          src='https://identity.netlify.com/v1/netlify-identity-widget.js'
          type='text/javascript'
        ></script>
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat&display=swap'
          rel='stylesheet'
        ></link>
      </Helmet>
      <NavBar />
      <main className='main'>{props.children}</main>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
              if (!user) {
                window.netlifyIdentity.on("login", () => {
                  document.location.href = "/admin/";
                });
              }
            });
          }
      `
        }}
      />
    </>
  );
}
