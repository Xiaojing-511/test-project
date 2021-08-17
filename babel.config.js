/*
 * @Author: your name
 * @Date: 2021-06-08 19:56:11
 * @LastEditTime: 2021-08-11 18:39:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test-project/babel.config.js
 */
const plugins = [
  [
    'import',
    {
      libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true, css: true
    }
  ]
];
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins
}
