const loadLocalStorage = (key: string) => {
  // parse old values from localstorage
  const shortLinks = localStorage.getItem(key);
  if (typeof shortLinks === "string") {
    const shortLinksObject = JSON.parse(shortLinks);
    return shortLinksObject;
  }
  return [];
};

export default loadLocalStorage;
