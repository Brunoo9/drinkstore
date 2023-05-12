const getFilePath = (protocol, host, fileName) => {
  return `${protocol}://${host}/${fileName}`;
};

export { getFilePath };
