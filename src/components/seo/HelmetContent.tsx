import React from 'react';
import { Helmet } from 'react-helmet';

interface HelmetContentProps {
  title?: string;
}

const HelmetContent = ({ title }: HelmetContentProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content="This is what you want to show as the page content in the Google SERP Listing"
      />
    </Helmet>
  );
};

export default HelmetContent;
