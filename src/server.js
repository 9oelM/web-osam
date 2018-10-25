const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = 8081;

http.listen(8081, function() {
  console.log("익스프레스 서버가 켜졌습니다. 포트는 8081입니다.");
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

io.on("connection", function(socket) {
  console.log("연결됐습니다");
  socket.on("disconnect", function() {
    console.log("연결이 끊겼습니다");
  });
  socket.on("chat message", function(msg) {
    io.emit("chat message", msg);
    console.log(`보낸 이: ${msg.sender}, 
    내용: ${msg.content},
    notMe: ${msg.notMe},
    id: ${msg.id}`);
  });
});

app.get("/test", function(req, res) {
  res.send({ data: `Hello from backend running at ${port}` });
});
