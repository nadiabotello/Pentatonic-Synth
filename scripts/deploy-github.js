const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'test-production-build',
    repo: 'https://github.com/nadiabotello/nadiabotello.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
