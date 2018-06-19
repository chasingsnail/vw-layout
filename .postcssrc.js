// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {}, // 处理元素容器宽高比
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-cssnext": {}, // 允许使用css未来特性，并做相关兼容性处理
    "postcss-px-to-viewport": {
      viewportWidth: 750, // 对应设计稿宽度
      viewportHeight: 1334, // 对应设计稿高度
      unitPrecision: 3, // 转换时的保留小数位
      viewportUnit: "vw", // 转换单位
      selectorBlackList: ['.ignore', '.hairlines'], // 不转换的单位类，可无限添加
      minPixelValue: 1, // 小于等于1px单位不转换
      mediaQuery: false // 是否允许媒体查询中的px转换
    },
    "postcss-viewport-units":{},
    "cssnano": { // 压缩、整理css代码
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    }
  }
}

