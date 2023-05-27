const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(router);
server.get("/", (req, res) => {
  res.send("Welcome to Freelancers Service")
})
server.listen(3000, () => {
  console.log("JSON Server is running");
});
