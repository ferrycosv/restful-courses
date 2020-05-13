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

## 3. User Story: `PUT request, updating courses`

- User must be able to put information to the server using REST  API commands, the server must process the request and give back a response the course updated.
- The file `index.js` add the functionality to process incoming PUT request `/api/courses/:id` with the body containing a JSON object with the name property.
- Refactored the code from the validation process so it is used as a function anywhere in the code. 

---

## 4. User Story: `DELETE request, deleting courses`

- User must be able to put information to the server using REST  API commands, the server must process the request and give back a response the course deleted.
- The file `index.js` add the functionality to process incoming DELETE request `/api/courses/:id` with no body.
- Refactored some code for better readability.

---

## 5. User Story: `Refactor to use file system`

- The actions performed by the REST API must be saved to the local file system of the server, the `courses.json` file contains the JSON string serialization of the state in memory of the courses array, updated each time an operation is triggered.
- The file `index.js` add the functionality to dump the state of the `courses` object to a JSON file stored in the local file system of the server, use of the `fs` library functions to read and write files in the secondary storage.
- Refactored some code for better readability.

---