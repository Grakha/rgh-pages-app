const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.use((req, res, next) => {
  const body = req.body;
  console.log(body);

  if (req.method === "POST") {
    res.json({ message: "Message Sent successfully", body: req.body});
  } else {
    next();
  }
});

server.use(router);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log("Server json is running", PORT);
});