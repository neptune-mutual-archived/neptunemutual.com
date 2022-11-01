export const getLocalStorageValue = (key) => {
  if (!window || !key) return null;

  try {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : "";
  } catch (error) {
    console.log(error);
    return "";
  }
};

export const analyticsLogger = (logFunction) => {
  const accepted = getLocalStorageValue("dev-cookies");
  if (!accepted) {
    return;
  }
  logFunction();
};
