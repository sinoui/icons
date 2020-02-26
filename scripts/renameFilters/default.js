import path from 'path';

/**
 * 默认的解析函数
 * @param {*} svgPathObj svg图标路径
 * @param {*} innerPath 文件导出位置
 * @param {*} options 文件配置
 */
function defaultDestRewriter(svgPathObj, innerPath, options) {
  let fileName = svgPathObj.base;
  if (options.fileSuffix) {
    fileName.replace(options.fileSuffix, '.svg');
  } else {
    fileName = fileName.replace('.svg', '.tsx');
  }
  fileName = fileName.replace(/(^.)|(_)(.)/g, (match, p1, p2, p3) =>
    (p1 || p3).toUpperCase(),
  );
  return path.join(innerPath, fileName);
}

export default defaultDestRewriter;
