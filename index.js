const express = require("express");
const app = express();

const courses = [
  { id: 1, name: "course 1" },
  { id: 2, name: "course 2" },
  { id: 3, name: "course 3" },
];

// get request for main page
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((x) => x.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send(`The course with id:${req.params.id} was not found!`);
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
