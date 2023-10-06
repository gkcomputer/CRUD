export const validation = (values) => {
  console.log("values", values);
  let errors = {};

  if (!values.name) {
    errors.name = "Enter valid username";
  }

  if (!values.password) {
    errors.password = "Enter valid password";
  }
  return errors;
};
