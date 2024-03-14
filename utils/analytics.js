import { useEffect } from 'react'
import { useRouter } from 'next/router'

// This hook handles sending analytics events for SPA navigation.
// MPA navigation is handled by the script outside of the Next.js application.
export default function useAnalyticsForSPA() {
  if (typeof window == 'object') {
    const router = useRouter()

    useEffect(() => {
      const sendPageView = () => {
        console.log('Send page view event for SPA navigation.')
        fetch(`/api/analytics?from=${encodeURIComponent(location.pathname)}&type=pageview`)
      }
      router.events.on('routeChangeComplete', sendPageView)
      return () => {
        router.events.off('routeChangeComplete', sendPageView)
      }
    }, [router.events])
  }
}
