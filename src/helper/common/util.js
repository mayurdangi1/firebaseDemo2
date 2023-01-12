export function isEmpty(value) {
  if (!value || value === "" || (Array.isArray(value) && value.length === 0)) {
    return true;
  }
  return false;
}

export function isFunction(fun) {
  return typeof fun === "function";
}

export const converBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
    };
    reader.onerror = (err) => {
      reject(err);
    };
  });
};

export function consoleAPIError(error, url) {
  console.log(
    "======================================ERROR=============================="
  );
  console.log(error);
  console.log(
    "======================================API================================="
  );
  console.log(url);
}
