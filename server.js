const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3000);

app.locals.title = "Weather Report";
app.locals.pets = [
  { id: "1", date: "10/06/2019", day: "Sunday", forecast: {high: 75, low: 35} },
  { id: "2", date: "10/07/2019", day: "Monday", forecast: {high: 75, low: 35} },
  { id: "3", date: "10/08/2019", day: "Tuesday", forecast: {high: 75, low: 35} },
  { id: "4", date: "10/09/2019", day: "Wednesday", forecast: {high: 75, low: 35} },
  { id: "5", date: "10/10/2019", day: "Thursday", forecast: {high: 75, low: 35} },
  { id: "6", date: "10/11/2019", day: "Friday", forecast: {high: 75, low: 35} },
  { id: "7", date: "1012/2019", day: "Saturday", forecast: {high: 75, low: 35} }
];

app.get("/", (request, response) => {
  response.send("Welcome to Weather Report");
});

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});
