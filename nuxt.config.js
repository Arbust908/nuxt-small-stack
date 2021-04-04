export default {
  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  head: {
    title: 'full-nuxt-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        hid: `og:title`,
        property: 'og:title',
        content: `Quiero Invitar`,
      },
      {
        hid: `og:description`,
        property: 'og:description',
        content: `Estas invitado! | Quiero Invitar`,
      },
      // {
      //     hid: `og:image`,
      //     property: 'og:image',
      //     content: `${this.gringottsUrl}/invitations/${this.invitation.data_id}.png`
      // },
      {
        hid: `og:site_name`,
        property: 'og:site_name',
        content: `Quiero Invitar`,
      },
      // {
      //     hid: `og:url`,
      //     property: 'og:url',
      //     content: this.baseUrl + this.$route.fullPath
      // },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: `Quiero Invitar`,
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: `Estas invitado! | Quiero Invitar`,
      },
      {
        hid: 'twitter:image:src',
        property: 'twitter:image:src',
        // content: `${this.gringottsUrl}/invitations/${this.invitation.data_id}.png`
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: `summary_large_image`,
      },
      {
        hid: 'twitter:creator',
        property: 'twitter:creator',
        content: `@quieroinvitar`,
      },
      {
        hid: 'twitter:site',
        property: 'twitter:site',
        content: `@quieroinvitar`,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16.png',
        sizes: '16x16',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-48.png',
        sizes: '48x48',
      },
      { rel: 'apple-touch-icon', href: '/favicon-57.png', sizes: '57x57' },
      { rel: 'apple-touch-icon', href: '/favicon-120.png', sizes: '120x120' },
      { rel: 'apple-touch-icon', href: '/favicon-152.png', sizes: '152x152' },
      { rel: 'apple-touch-icon', href: '/favicon-167.png', sizes: '167x167' },
      { rel: 'apple-touch-icon', href: '/favicon-180.png', sizes: '180x180' },
      { rel: 'icon', href: '/favicon-96.png', sizes: '96x96' },
      { rel: 'icon', href: '/favicon-192.png', sizes: '192x192' },
    ],
  },

  css: [],

  plugins: [],

  components: true,

  serverMiddleware: ['~/api/index.js'],

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    [
      '@nuxtjs/device',
      {
        defaultUserAgent:
          'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36',
      },
    ],
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab'],
          },
          {
            set: '@fortawesome/free-regular-svg-icons',
            icons: ['far'],
          },
        ],
      },
    ],
  ],

  axios: {},

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  tailwindcss: {
    jit: true,
  },

  build: { cache: true, parallel: true },
}
