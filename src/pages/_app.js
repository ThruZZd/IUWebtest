import Layout from "@/comps/Layout";
import "@/styles/globals.css";
import '@/styles/styles.css';


export default function App({ Component, pageProps }) {
  
  
  
  return( 
  
  <Layout>
  <Component {...pageProps} />
  </Layout>


  );
}
