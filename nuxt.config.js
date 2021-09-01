export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.npm_package_name || '',
    titleTemplate: '%s - test',
    htmlAttrs: { lang: 'ko' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    // { src: '~/plugins/axios', mode: 'client' },
    // { src: '~/plugins/persistedState.client.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    ['@nuxtjs/dotenv', { filename: `.env.${process.env.NODE_ENV}`, systemvars: true }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    proxy: true,
    debug: true,
    retry: { retries: 3 },
    requestInterceptor: (config) => {
      // config.headers.common['Authentication'] =
      config.headers.common['Content-Type'] = config.headers.common['Content-Type'] || 'application/json;charset=utf-8'
      return config
    },
  },
  proxy: {
    '/api/': {
      target: 'https://api2.stg.skmuffin.com',
      pathRewrite: { '^/api/': '/' },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'kr',
      name: 'test',
      short_name: 'test',
      start_url: '/',
      display: 'standalone',
      background_color: '#333',
      icons: [{ src: '/test.png', sizes: '96x96' }],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      preset: {
        autoprefixer: {
          grid: true,
          overrideBrowserslist: ['last 2 versions', '> 0.5%'],
        },
      },
    },
  },

  srcDir: 'src/',

  generate: {
    dir: 'dist/',
    subFolders: false,
  },

  // loading: '~/components/common/loading.vue',
}
