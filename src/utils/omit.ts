export function omit(obj: { [key: string]: any }) {
  const newObj: { [key: string]: any } = {};

  Object.keys(obj).forEach((key) => {
    const value = obj[key];

    if (value !== undefined) {
      newObj[key] = value;
    }
  });

  return newObj;
}
