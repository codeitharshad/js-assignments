function getObjectFromJson(jsonString) {
  try {
    const obj = JSON.parse(jsonString);
    return obj;
  } catch (err) {
    console.error("Failed to parse JSON");
  }
}

const string = '{"name": "Harshad", "age": 24}';
const result = getObjectFromJson(string);

console.log(result)