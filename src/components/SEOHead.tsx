import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export default function SEOHead({
  title = 'ARES - AI Governance & Compliance Platform',
  description = 'Leading AI governance audits and compliance consulting powered by the Nephilim Framework™. Expert oversight for healthcare, finance, defense, and critical infrastructure.',
  keywords = 'AI governance, AI compliance, AI audit, HIPAA compliance, EU AI Act, SOC2, AI regulation, Nephilim Framework, AI ethics, AI oversight',
  ogImage = 'https://public-frontend-cos.metadl.com/mgx/img/favicon.png',
  canonical,
}: SEOHeadProps) {
  const siteUrl = 'https://ares-ai-governance.com';
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="ARES" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="ARES" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ARES",
          "description": description,
          "url": siteUrl,
          "logo": ogImage,
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "email": "contact@ares-ai.com"
          },
          "sameAs": [
            "https://linkedin.com/company/ares-ai",
            "https://twitter.com/ares_ai"
          ]
        })}
      </script>
    </Helmet>
  );
}