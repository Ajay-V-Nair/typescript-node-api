const ERROR_MESSAGES = {
    MONGO_URI_MISSING: "Missing MONGO_URI in environment variables.",
    MONGO_CONNECTION_FAILED: "MongoDB connection failed",
    INTERNAL_SERVER_ERROR: "An internal server error occurred.",
    USER_NOT_FOUND: "User not found.",
    CREATE_USER_ERROR: "Error creating user.",
    INVALID_USER_ID: "Invalid user ID.",
    UPDATE_USER_ERROR: "Error updating user with ID: ",
    DELETE_USER_ERROR: "Error deleting user with ID: ",
    FETCH_USERS_ERROR: "Error fetching users",
    FETCH_USER_ERROR: "Error fetching user with ID: ",
  };

const SUCCESS_MESSAGES = {
    USER_CREATED: "User created successfully.",
    USER_UPDATED: "User updated successfully.",
    USER_DELETED: "User deleted successfully.",
};
  
export { SUCCESS_MESSAGES, ERROR_MESSAGES };