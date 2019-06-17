const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'test-production-build',
    repo: 'https://github.com/nadiabotello/personal-site.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
