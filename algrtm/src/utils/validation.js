const validateForm = (name, email, message) => {
  const errors = {};

  if (!name.trim()) {
    errors.your_name = "Name field cannot be empty.";
  } else if (name.length > 20) {
    errors.your_name = "Name cannot exceed 20 characters.";
  }

  if (!email) {
    errors.your_email = "Email field cannot be empty.";
  } else if (email.length > 320) {
    errors.your_email = "Email cannot exceed 320 characters.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.your_email = "Invalid email address.";
  }

  if (!message.trim()) {
    errors.message = "Message field cannot be empty.";
  } else if (message.length > 1000) {
    errors.message = "Message cannot exceed 1000 characters.";
  }

  return errors;
};

export default validateForm;
