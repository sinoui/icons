export default function transferName(name: string) {
  let newName = name;
  newName = newName
    .replace(/_([0-9]+)px\.svg/, '.tsx')
    .replace(/(^.)|(_)(.)/g, (_match, p1, _p2, p3) => (p1 || p3).toUpperCase());

  if (newName.indexOf('3dRotation') === 0) {
    newName = `ThreeD${newName.slice(2)}`;
  }

  if (newName.indexOf('360') === 0) {
    newName = `ThreeSixty${newName.slice(3)}`;
  }

  if (newName.indexOf('4k') === 0) {
    newName = `FourK${newName.slice(2)}`;
  }

  return newName;
}
