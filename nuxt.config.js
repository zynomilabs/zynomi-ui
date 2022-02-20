
import theme from '@nuxt/content-theme-docs'
import { join } from 'path'
export default {
  ssr: false,
  components: true,
  server: {
    port: process.env.APP_PORT || '3000', // default: 3000
  },
  generate: {
    fallback: true
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
    ],
    script: [
      { hid: 'ustr', src: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.string/3.3.5/underscore.string.js', defer: true },
      { hid: 'iconify', src: 'https://code.iconify.design/2/2.0.4/iconify.min.js', defer: true },
      { hid: 'app.config', src: '/app.config.js', defer: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#00CD81' },
  i18n: {
    locales: () => [{
      code: 'ru',
      iso: 'ru-RU',
      file: 'ru-RU.js',
      name: 'Русский'
    }, {
      code: 'fr',
      iso: 'fr-FR',
      file: 'fr-FR.js',
      name: 'Français'
    }, {
      code: 'ja',
      iso: 'ja_JP',
      file: 'ja_JP.js',
      name: '日本語'
    }, {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'en'
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/override.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/global.js'
  ],
  router: {
    middleware: 'layoutMiddleware'
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxt/postcss8',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/moment',
    '@nuxtjs/google-analytics'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxt/content'
  ],
  content: {
    // Options
    // $content api will be served on localhost:9000/content-api
    apiPrefix: 'content-api',
    // Only search in title and description
    fullTextSearchFields: ['title', 'description'],
    markdown: {
      remarkPlugins: ['remark-emoji'],
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  toast: {
    position: 'top-center',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
          theme: 'bubble', duration: '7000'
        }
      }
    ]
  },
  axios: {
    proxy: false
  },
  googleAnalytics: {
    id: 'UA-207352335-2'
    //propertyid : 286077743
  },
  toast: {
    position: 'bottom-right',
    duration: 5000,
    fullWidth: false,
    iconPack: 'material',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
          theme: 'bubble', duration: '7000'
        }
      }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    postcss: {
      plugins: {
        tailwindcss: join(__dirname, 'tailwind.config.js'),
        'postcss-pxtorem': {
          propList: ['*', '!border*']
        }
      }
    }
  },
  "compilerOptions": {
    "types": [
      "@nuxt/types"
    ]
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || '',
    appLogo: process.env.APP_LOGO || 'logo.svg',
    bizAddress: process.env.BIZ_ADDRESS || 'NA',
    apiURL: process.env.REST_END_POINT || 'https://api.zynomi.com',
    restEndPoint: process.env.REST_END_POINT || 'http://18.189.3.157:1337',
  },
  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET
  }
}
