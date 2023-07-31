import { customAlphabet } from "nanoid";
type Data = {
  full: string;
  short: string;
};

const saveLocalStorage = (key: string, dataWoId: Data) => {
  // parse old values from localstorage
  const shortLinks = localStorage.getItem(key);
  if (typeof shortLinks === "string") {
    const shortLinksObject = JSON.parse(shortLinks);

    const foundInStorage = shortLinksObject.filter(
      (short: Data) => short.full === dataWoId.full
    );

    if (foundInStorage.length === 0) {
      const id = customAlphabet("1234567890abcdef", 10)();
      const data = { ...dataWoId, sl: id };
      // add new value to the old data
      const newValues = [...shortLinksObject, data];
      // convert to string
      const value = JSON.stringify(newValues);
      // save the data
      localStorage.setItem(key, value);
    } else if (foundInStorage[0].short !== dataWoId.short) {
      foundInStorage[0].short = dataWoId.short;
      const remainingValues = shortLinksObject.filter(
        (short: Data) => short.full !== dataWoId.full
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

  const id = customAlphabet("1234567890abcdef", 10)();
  const data = { ...dataWoId, sl: id };

  // save the data
  const value = JSON.stringify([data]);
  localStorage.setItem(key, value);
};

export default saveLocalStorage;
