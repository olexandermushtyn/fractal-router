import path from "path";
import fs from "fs";

let components = fs.readdirSync("./components/");
components.forEach((element) => {
  fs.readFile(`./components/${element}`, "utf-8", (err, data) => {
    console.log(data);
  });
});
