const onSend = (e) => {
  e.preventDefault();
  const message = e.target[1].value;
  e.target[1].value = "";
  axios.post("http://localhost:3000/send", {
    message: message,
  });
};

export default onSend;
