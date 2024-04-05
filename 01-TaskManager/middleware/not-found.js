const notFound = (req, res) => {
  res.status(404).sendFile(__dirname + "/error404.html");
};

module.exports = notFound;
