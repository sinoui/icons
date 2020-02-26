function myDestRewriter(svgPathObj) {
  let fileName = svgPathObj.base;

  fileName = fileName
    .replace(/_([0-9]+)px\.svg/, '.tsx')
    .replace(/(^.)|(_)(.)/g, (_match, p1, _p2, p3) => (p1 || p3).toUpperCase());

  if (fileName.indexOf('3dRotation') === 0) {
    fileName = `ThreeD${fileName.slice(2)}`;
  }

  if (fileName.indexOf('360') === 0) {
    fileName = `ThreeSixty${fileName.slice(3)}`;
  }

  if (fileName.indexOf('4k') === 0) {
    fileName = `FourK${fileName.slice(2)}`;
  }

  return fileName;
}

export default myDestRewriter;
