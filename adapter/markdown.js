'use strict';

const { formatRaw } = require('../util');
const img2Cdn = require('../util/img2cdn');
const config = require('../config');

/**
 * markdown 文章生产适配器
 *
 * @param {Object} post 文章
 * @return {String} text
 */
module.exports = async function(post) {
  // 语雀img转成自己的cdn图片
  if (config.imgCdn.enabled) {
    post = await img2Cdn(post);
  }
  let { body } = post;
  let raw = formatRaw(body);
  raw = raw.replace(/<br \/>/g, '\n\n')
  return raw;
};
