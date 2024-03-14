;(() => {
  const sendEvent = (type = 'pageview') => {
    // Codelab: Make analytics prerendering compatible.
    // The pageshow event could happen in the prerendered page before activation.
    // The prerendered page should be handled by the prerenderingchange event.
    // if (document.prerendering) {
    //   return
    // }

    console.log(`Send ${type} event for MPA navigation.`)
    fetch(`/api/analytics?from=${encodeURIComponent(location.pathname)}&type=${type}`)
  }

  // Codelab: Remove the unload event handler for bfcache.
  // The unload event handler prevents the content from being stored in bfcache. Use the pagehide event instead.
  window.addEventListener('unload', () => {
    sendEvent('leave')
  })

  // Codelab: Use the pageshow event handler for bfcache.
  // window.addEventListener('pageshow', (e) => {
  //   // If the persisted flag exists, the page was restored from bfcache.
  //   if (e.persisted) {
  //     console.log('The page was restored from bfcache.')
  //     sendEvent()
  //   }
  // })

  // Codelab: Make analytics prerendering compatible.
  // The prerenderingchange event is triggered when the page is activated.
  // document.addEventListener('prerenderingchange', () => {
  //   console.log('The prerendered page was activated.')
  //   sendEvent()
  // })

  // For normal navigations
  window.addEventListener('DOMContentLoaded', () => {
    sendEvent()
  })
})()
