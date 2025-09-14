// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    pages: true,

    css: ['~/assets/css/main.css'],

    components: true,
    modules: [
        '@nuxt/ui'
    ],
    devtools: { enabled: true }
})
