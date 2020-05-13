const Joi = require("joi");
const express = require("express");
const fs = require("fs");
const app = express();

let courses = [
  { id: 1, name: "course 1" },
  { id: 2, name: "course 2" },
  { id: 3, name: "course 3" },
];

app.use(express.json());

// get request for main page
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/courses", (req, res) => {
  courses = readCourses();
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  courses = readCourses();
  const course = courses.find((x) => x.id === parseInt(req.params.id));
  if (!course)
    return res
      .status(404)
      .send(`The course with id:${req.params.id} was not found!`);
  res.send(course);
});

app.post("/api/courses", (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  writeCourses();
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  courses = readCourses();
  const course = courses.find((x) => x.id === parseInt(req.params.id));
  if (!course)
    return res
      .status(404)
      .send(`The course with id:${req.params.id} was not found!`);
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  course.name = req.body.name;
  writeCourses();
  res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
  courses = readCourses();
  const course = courses.find((x) => x.id === parseInt(req.params.id));
  if (!course)
    return res
      .status(404)
      .send(`The course with id:${req.params.id} was not found!`);
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  writeCourses();
  res.send(course);
});

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return (result = Joi.validate(course, schema));
}

function readCourses() {
  try {
    courses = JSON.parse(fs.readFileSync(__dirname + "/courses.json", "utf-8"));
  } catch {
    fs.writeFileSync(
      __dirname + "/courses.json",
      JSON.stringify(courses),
      "utf-8"
    );
  }
  return courses;
}

function writeCourses() {
  fs.writeFileSync(
    __dirname + "/courses.json",
    JSON.stringify(courses),
    "utf-8"
  );
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
