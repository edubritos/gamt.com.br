import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription = 'Combate e prevenção a incêndios florestais';
const defaultKeywords = 'gamt, incêndios, florestal, combate prevenção replantio reflorestamento recuperação áreas degradadas fogo poda trilhas tijuca';
const defaultOGURL = 'http://www.gamt.com.br';
const defaultOGImage = '../static/icons/logo.png';

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || 'GAMT'}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="keywords" content={props.keywords || defaultKeywords} />
    <link rel="icon" type="image/png" href="/static/icons/favicon.ico"/>
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || 'GAMT'} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1016" />
    <meta property="og:image:height" content="1016" />

  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  keywords: string,
  url: string,
  ogImage: string
};

export default Head;
