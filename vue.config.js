/* eslint-disable @typescript-eslint/no-var-requires */

const UnpluginVue2ScriptSetupPlugin = require('unplugin-vue2-script-setup/webpack');

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  chainWebpack(config) {
    // unplugin-vue2-script-setup
    config.plugin('unplugin-vue2-script-setup').use(
      UnpluginVue2ScriptSetupPlugin({
        refTransform: true,
      }),
    )
    // disable type check and let `vue-tsc` handles it
    config.plugins.delete('fork-ts-checker')

    // disable cache for testing, you should remove this in production
    config.module.rule('vue').uses.delete('cache-loader')
    config.module.rule('js').uses.delete('cache-loader')
    config.module.rule('ts').uses.delete('cache-loader')
    config.module.rule('tsx').uses.delete('cache-loader')
  },
}
