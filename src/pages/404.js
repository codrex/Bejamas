import React from 'react';
import { Layout } from '../components';

function NotFoundPage() {
  return (
    <Layout title='Upss… Not Found'>
      <section>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </section>
    </Layout>
  );
}

export default NotFoundPage;
