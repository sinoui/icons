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
    fileName = fileName.replace(/_([0-9]+)px\.svg/, '.tsx');
  }
  fileName = fileName.replace(/(^.)|(_)(.)/g, (_match, p1, _p2, p3) =>
    (p1 || p3).toUpperCase(),
  );
  console.log(fileName);
  return path.join(innerPath, fileName);
}

export default defaultDestRewriter;
