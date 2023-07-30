type Data = {
  full: string;
  short: string;
};

const key: string = "shortLinks";

const saveLocalStorage = (data: Data) => {
  // parse old values from localstorage
  const shortLinks = localStorage.getItem(key);
  if (typeof shortLinks === "string") {
    const shortLinksObject = JSON.parse(shortLinks);

    const foundInStorage = shortLinksObject.filter(
      (short: Data) => short.full === data.full
    );

    if (foundInStorage.length === 0) {
      // add new value to the old data
      const newValues = [...shortLinksObject, data];
      // convert to string
      const value = JSON.stringify(newValues);
      // save the data
      localStorage.setItem(key, value);
    } else if (foundInStorage[0].short !== data.short) {
      foundInStorage[0].short = data.short;
      const remainingValues = shortLinksObject.filter(
        (short: Data) => short.full !== data.full
      );
      // add new value to the old data
      const newValues = [...remainingValues, foundInStorage[0]];
      // convert to string
      const value = JSON.stringify(newValues);
      // save the data
      localStorage.setItem(key, value);
    }

    return;
  }

  // save the data
  const value = JSON.stringify([data]);
  localStorage.setItem(key, value);
};

export default saveLocalStorage;
