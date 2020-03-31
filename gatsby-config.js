module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        prettier: true, // use prettier to format JS code output (default)
        svgo: true, // use svgo to optimize SVGs (default)
        svgoConfig: {
          removeViewBox: true, // remove viewBox when possible (default)
          cleanupIDs: true, // remove unused IDs and minify remaining IDs (default)
          removeDimensions: true,
        },
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `graphicdesign`,
        path: `${__dirname}/src/images/graphicdesign`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `development`,
        path: `${__dirname}/src/images/development`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Wahyudin Portfolio",
        short_name: "whydn // portfolio",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#5285FF",
        description: `Hello ! I am Wahyudin, Full Stack Developer. I design and code beutifully simple things, and I love what I do.`,
        lang: `en`,
        localize: [
          {
            start_url: `/id/`,
            lang: `id`,
            name: `Wahyudin Portfolio`,
            short_name: `whydn // portfolio`,
            description: `Hallo ! Saya Wahyudin, seorang Full Stack Developer. Saya disain dan menulis kode secara sederhana, dan saya suka apa yang saya lakukan.`,
          },
        ],
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/whydn-icon-512.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `id`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}