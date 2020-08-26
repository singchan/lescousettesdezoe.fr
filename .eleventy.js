module.exports = function(eleventyConfig) {
eleventyConfig.addFilter('tagFilter', function(collection, category) {
  if (!category) return collection;
    const filtered = collection.filter(item => item.data.tags.includes(category))
    return filtered;
});

  // collections
  eleventyConfig.addCollection('generatedPages', async function(collectionApi) {
    return collectionApi.getFilteredByTag('page')
      .filter(item => !item.data.pagination || !item.data.pagination.previous)
  })
  eleventyConfig.addCollection('generatedTags', function(collectionApi) {
    const tags = collectionApi.getFilteredByGlob('products/**/*.md')
      .flatMap(item => item.data.tags)
    // remove duplicates using Set
    return [...new Set(tags)]
  })
  eleventyConfig.addCollection('generatedProducts', function(collectionApi) {
    return collectionApi.getFilteredByGlob('products/**/*.md')
  })
  // slideshow
  eleventyConfig.addPassthroughCopy({
    'node_modules/@splidejs/splide/dist/js': 'js',
    'node_modules/@splidejs/splide/dist/css': 'css',
  })
  // copy folders
  eleventyConfig.addPassthroughCopy('assets')
  eleventyConfig.addPassthroughCopy('uploads')
  eleventyConfig.addPassthroughCopy('css/*.css')
  eleventyConfig.addPassthroughCopy('js')
  eleventyConfig.addPassthroughCopy('CNAME')

  // other config
  return {
    dir: {
      layouts: '_layouts',
      includes: '_includes',
    },
  }
}
