export const registerUser = (username, password) => {
  localStorage.setItem("userData", JSON.stringify({ username, password }));
};

export const loginUser = (username, password) => {
  const saved = JSON.parse(localStorage.getItem("userData"));
  if (saved && saved.username === username && saved.password === password) {
    localStorage.setItem("user", username);
    return true;
  }
  return false;
};

export const logoutUser = () => {
  localStorage.removeItem("user");
};

export const getUser = () => localStorage.getItem("user");