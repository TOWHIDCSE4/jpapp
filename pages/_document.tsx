// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const basePath = process.env.NODE_ENV === 'production' ? '/jplist' : '';

  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;700&family=Comfortaa:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Favicons */}
        <link rel="icon" href={`${basePath}/icon.png`} type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href={`${basePath}/icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${basePath}/icon.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${basePath}/icon.png`} />

        {/* Meta Tags */}
        <meta name="theme-color" content="#ed7d47" />
        <meta name="description" content="Learn Japanese Hiragana and Katakana with fun and interactive exercises" />
        <meta name="keywords" content="Japanese, Hiragana, Katakana, Kana, Learning, Education" />
        <meta name="author" content="Leivik" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Learn Japanese 50-on" />
        <meta property="og:description" content="Learn Japanese Hiragana and Katakana with fun and interactive exercises" />
        <meta property="og:image" content={`${basePath}/icon.png`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Learn Japanese 50-on" />
        <meta name="twitter:description" content="Learn Japanese Hiragana and Katakana with fun and interactive exercises" />
        <meta name="twitter:image" content={`${basePath}/icon.png`} />
      </Head>
      <body className="font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
