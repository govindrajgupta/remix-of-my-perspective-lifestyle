import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  noindex?: boolean;
}

const BASE_URL = 'https://www.nyaya-alamban.org';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;
const SITE_NAME = 'Nyaya Alamban';

const SEO = ({
  title,
  description = 'Nyaya Alamban provides free legal assistance and promotes alternative dispute resolution. Justice through dialogue, not disputes.',
  keywords = 'Nyaya Alamban, legal aid, free legal assistance, alternative dispute resolution, ADR, justice, legal help, NGO',
  image = DEFAULT_IMAGE,
  url,
  type = 'website',
  author,
  publishedTime,
  noindex = false,
}: SEOProps) => {
  const fullTitle = title 
    ? `${title} | ${SITE_NAME}` 
    : `${SITE_NAME} - In Law We Trust | Legal Aid & Justice for All`;
  
  const fullUrl = url ? `${BASE_URL}${url}` : BASE_URL;

  // `image` can come from DB/content and may be `null` at runtime.
  // Default values in destructuring only apply to `undefined`, not `null`.
  const safeImage = typeof image === 'string' && image.trim().length > 0 ? image : DEFAULT_IMAGE;
  const fullImage = safeImage.startsWith('http') ? safeImage : `${BASE_URL}${safeImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {author && <meta name="author" content={author} />}
      <link rel="canonical" href={fullUrl} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
    </Helmet>
  );
};

export default SEO;
