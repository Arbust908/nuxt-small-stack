export default ({ app }, inject) => {
  inject(
    'isPWA',
    () =>
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone ||
      document.referrer.includes('android-app://')
  )
}
