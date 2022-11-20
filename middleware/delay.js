export default ({isServer }) => {
  // Don't use the middleware on server-side
  if (isServer) return
  // Return a promise to tell nuxt.js to wait for the end of it
  return new Promise((resolve) => {
    // Wait 1 second between each route
    setTimeout(resolve, 1500);
  })
}
