import React from 'react';
import { useMediaQuery } from 'react-responsive';

import {
  WithLayout,
  HeroSection,
  IntroSection,
  LogosSection,
  BlogSection
} from '../components';
import {
  useHeroImage,
  useHeroData,
  useIntroImage,
  useIntroData,
  useBlogData
} from '../lib/hooks';
import { getBlogListData } from '../lib/selectors';

export function IndexPageTemplate({}) {
  const heroImage = useHeroImage();
  const heroData = useHeroData();
  const introImage = useIntroImage();
  const introData = useIntroData();
  const blogData = useBlogData();
  const isMobile = useMediaQuery({ query: '(max-width: 697px)' });
  const blogs = getBlogListData(isMobile ? blogData.slice(0, 2) : blogData);

  return (
    <>
      <HeroSection img={heroImage} {...heroData} />
      <IntroSection img={introImage} {...introData} />
      <LogosSection />
      <BlogSection blogs={blogs} />
    </>
  );
}

IndexPageTemplate.propTypes = {};

export const IndexPage = WithLayout(IndexPageTemplate);
