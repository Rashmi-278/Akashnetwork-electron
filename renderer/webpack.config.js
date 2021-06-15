const WebpackShellPluginNext = require('webpack-shell-plugin-next');
module.exports = {
  plugins: [
    new WebpackShellPluginNext({
      onBuildStart:{
        scripts: ['echo "Webpack Start"'],
        blocking: true,
        parallel: false
      }, 
      onBuildEnd:{
        scripts: ['echo "Webpack End"'],
        blocking: false,
        parallel: true
      }
    })
  ],
}