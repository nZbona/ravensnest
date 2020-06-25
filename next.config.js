const axios = require("axios");
const wpURL = "https://backoffice.ravensnest.eu/wp-json/";

const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.css'] = (file) => {};
  }


const nextConfig = {
    exportTrailingSlash: true,
    exportPathMap: async function() {
        const paths = {
            "/": { page: "/" },
            "/accommodation": { page: "/accommodation" },
            "/accommodation/facilities": { page: "/accommodation_facilities" },
            "/accommodation/houses": { page: "/accommodation_houses" },
            "/accommodation/restaurant": { page: "/accommodation_restaurant" },
            "/accommodation/rates": { page: "/accommodation_rates" },
            "/explore": { page: "/explore" },
            "/our-story": { page: "/our-story" },
            "/policies": { page: "/policies" },
            "/terms-conditions": { page: "/terms-conditions" },
            "/privacy": { page: "/privacy" },
            "/reservation-terms": { page: "/reservation-terms" },
            "/blog": { page: "/blog" },
            "/covid-19": { page: "/covid_19" },
        };

        const blogPosts = await axios.get(wpURL + "wp/v2/posts?_embed");

        // console.log('blog Posts', blogPosts);
        blogPosts.data.forEach(blog => {
            paths[`/blog/${blog.slug}`] = { page: "/blog/[slug]", query: { slug: blog.slug } };

        });

        
        
        let exploreLocations = await axios.get(wpURL + `ravens/v1/pages/`);
        
        exploreLocations.data.forEach(location => {
          paths[`/explore/${location.post_name.split('-').slice(1).join('-') }`] = {page: "/explore/[slug]", query: { slug: location.post_name.split('-').slice(1).join('-') }};
        })

        return paths;
    },
};

module.exports = withPlugins([withImages, withCSS({target: 'serverless',
webpack (config) {
  config.module.rules.push({
    test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 8192,
        publicPath: '/_next/static/',
        outputPath: 'static/',
        name: '[name].[ext]'
      }
    }
  })
  return config
}})], nextConfig);
