function getImgUrl(filename) {
  const imgUrl = new URL(`../assets/img/${filename}`, import.meta.url).href;
  return imgUrl;
}

export default getImgUrl;
