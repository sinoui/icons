import icons from './icon-data';

/**
 * 获取图标分类
 */
export default function getIconCategories() {
  const allCategories = new Set<string>();
  icons.forEach(({ categories }) => {
    categories.forEach((category) => allCategories.add(category));
  });

  return [...allCategories]
    .map((item) => `${item.substr(0, 1).toUpperCase()}${item.substr(1)}`)
    .sort();
}
