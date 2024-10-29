// src/pages/_app.js
import '../styles/globals.css'; // existing global styles
import '../component/Bg-vedio/Bgvedio.css'; // import your global CSS here

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
