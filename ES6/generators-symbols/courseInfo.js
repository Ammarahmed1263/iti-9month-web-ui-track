const generateCourseInfo = ({
  courseName = "ES6",
  courseDuration = "3days",
  courseOwner = "javascript",
  ...rest
} = {}) => {
  if (Object.keys(rest).length !== 0)
    throw new SyntaxError(
      "only courseName, courseDuration, courseOwner properties allowed ",
    );

    return {
        courseName,
        courseDuration,
        courseOwner,
    }
};


const obj1 = {
    courseName: "intro to c++",
    instructor: "Ammar Ahmed"
}

const obj2 = {
    courseDuration: "2weeks",
    courseOwner: "cpp"
}

console.log(generateCourseInfo())

console.log(generateCourseInfo(obj2))

try {
    console.log(generateCourseInfo(obj1))
} catch(e) {
    console.error(e);
}