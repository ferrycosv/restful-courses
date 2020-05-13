# RESTFUL-COURSES: development strategy

---

## 0. Setup

- created `index.js`, `development-strategy.md`, installed express framework for node.js, initialized `README.md`.

---

## 1. User Story: `GET request, retrieve courses`

- Using express framework, I can run up a server in the local machine listening for HTTP requests through an specified port number.
- User must be able to fetch information from the server using REST  API commands, the server must process the request and give back a response with all or one precise course id.
- The file `index.js` add the functionality to process incoming GET requests `/`, `/api/courses` and `/api/courses/:id`.

---

## 2. User Story: `POST request, storing new courses`

- User must be able to post information to the server using REST  API commands, the server must process the request and give back a response the new course stored.
- The file `index.js` add the functionality to process incoming POST request `/api/courses` with the body containing a JSON object with the name property.
- Using `Joi` middleware I can automate the validation process using predefined rules and error messages. 

---