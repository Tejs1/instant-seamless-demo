import '../styles/globals.css'
import Layout from '../components/layout'
import { ResourceContextProvider } from '../components/resource-context'
import useAnalyticsForSPA from '../utils/analytics'
// Codelab: Add the SpeculationRules component.
// import SpeculationRules from '../components/speculationrules'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  useAnalyticsForSPA()

  return (
    <ResourceContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* Codelab: Add SpeculationRules component */}
      {/* <SpeculationRules /> */}
      <Script id='analytics-for-mpa' strategy='beforeInteractive' src='/analytics.js' />
    </ResourceContextProvider>
  )
}

export default MyApp
