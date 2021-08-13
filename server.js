import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const PORT = 3000;
const __dirname = path.resolve();

let components = fs.readdirSync("./components/");
let componentsData = new Map();
components.forEach((element) => {
  fs.readFile(`./components/${element}`, "utf-8", (err, data) => {
    componentsData.set(element, data);
  });
});
console.log(componentsData);

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
});

app.use(express.static(path.resolve()));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.post("/login", (req, res) => {
  res.send(componentsData.get("login-page.html"));
});
app.post("/main", (req, res) => {
  res.send(componentsData.get("main-page.html"));
});
app.post("/users", (req, res) => {
  res.send(componentsData.get("users-page.html"));
});

fs.watch("./components", (eventType, filename) => {
  console.log(`Event type is ${eventType}`);
  if (filename) {
    console.log(`filename provided ${filename}`);
    fs.readFile(`./components/${filename}`, "utf-8", (err, data) => {
      componentsData.set(filename, data);
    });
  } else {
    console.log(`folder`);
  }
});
