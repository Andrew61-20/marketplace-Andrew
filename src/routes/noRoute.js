const noRoute = (req, res) => {
  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Not found");
};

module.exports = noRoute;