export const useDecodeLink = (encodedLink) => {
  let link;
  try {
    link = decodeURIComponent(encodedLink);
  } catch (e) {
    console.error(e);
  }
  return link;
};
