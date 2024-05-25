// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  css: [
    "~/assets/style/main.scss", // you should add main.scss somewhere in your app
  ],
  // add to head
  app: {
    head: {
      title: "Guillermo Croppi - Software Engineer",
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "description",
          content: "Website about me, and to keep track of my footprints. Passionate about democracy, technology, and their intersection in shaping the future of governance and citizen participation. Fullstack Web Developer and multidisciplinary system engineer.",
        },
        {
          name: "og:title",
          content: "Guillermo Croppi - Software Engineer",
        },
        {
          name: "og:description",
          content: "Website about me, and to keep track of my footprints. Passionate about democracy, technology, and their intersection in shaping the future of governance and citizen participation. Fullstack Web Developer and multidisciplinary system engineer.",
        },
        {
          name: "og:image",
          content: "https://guillecro.com/202405-sharer.jpg",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css",
          integrity: "sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer"
        }
      ]  
    }
  },
})