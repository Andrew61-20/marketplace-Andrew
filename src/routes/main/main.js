const mainRoute = (req, res) => {
  res.type('text/html');
  res.send('<h1>myusers</h1>');
};

module.exports = mainRoute;