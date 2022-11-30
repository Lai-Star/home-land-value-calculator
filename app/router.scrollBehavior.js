// Non-nuxt: scrollBehavior (to, from, savedPosition) { ... }
export default function(to, from, savedPosition) {
  if (to && to.hash) {
    return {
      selector: to.hash,
      offset: { x: 0, y: 80 }, // avoid blocking the view when having fixed components
      behavior: 'smooth'
    };
  } else if (savedPosition) {
    return savedPosition;
  } else {
    return { x: 0, y: 0 };
  }
}
