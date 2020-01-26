import validator from 'validator';

export const isEmpty = (value, name) => {
  if (validator.isEmpty(value))
    return `${name} cannot be empty. Please provide ${name}`;

  if (name === 'password' && value.length < 6)
    return `${name} cannot be lesser than 6 characters`;

  return;
};
export const isEmail = (value) => {
  if (!validator.isEmail(value))
    return 'Email invalid. Please provide a valid email';
  return;
};

export const emailCheck = (value, name) => {
  const isEmptyError = isEmpty(value, name);
  const isEmailError = isEmail(value);

  return isEmptyError || isEmailError;
};

export const passwordCheck = (value, name) => isEmpty(value, name);
