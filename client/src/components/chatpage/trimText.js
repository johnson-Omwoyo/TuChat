const trimText = (text) => {
  if (text.length <= 18) {
    return text;
  } else {
    return text.slice(0, 18) + "...";
  }
};

export default trimText;
