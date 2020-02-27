function calcColor(color, theme) {
  if (color === 'primary') {
    return theme.palette.primary[500];
  }
  if (color === 'textSecondary') {
    return theme.palette.text.secondary;
  }
  return theme.palette.text.primary;
}

export default calcColor;
