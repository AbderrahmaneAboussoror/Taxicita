const isAuthenticated = () => {
  return sessionStorage.getItem("token") !== null;
};

const login = async (username, password) => {
  var data;
  await axios
    .post(
      "http://localhost:8000/api/login",
      {
        email: username,
        password: password,
      },

      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((res) => {
      data = res.data;
    })
    .catch((er) => console.error(er));
  console.log(data);

  if (data.token) {
    sessionStorage.setItem("token", data.token);
    sessionStorage.setItem("user_id", data.user.id);
    sessionStorage.setItem("role", data.user.role);
  }
};

const logout = async () => {
  var data;
  const token = sessionStorage.getItem("token");
  await axios
    .post("http://localhost:8000/api/logout", null, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((er) => console.error(er));
  sessionStorage.removeItem("token");
};

const register = async (first_name, last_name, role, email, password, confirm_password) => {
  var data;
  await axios
    .post(
      "http://localhost:8000/api/register",
      {
        first_name: first_name,
        last_name: last_name,
        role: role,
        email: email,
        password: password,
        password_confirmation: confirm_password,
      },

      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((res) => {
      data = res.data;
    })
    .catch((er) => console.error(er));

  if (data.token) {
    sessionStorage.setItem("token", data.token);
    sessionStorage.setItem("user_id", data.user.id);
    sessionStorage.setItem("role", data.user.role);
  }
};

export const authService = {
  isAuthenticated,
  login,
  logout,
  register,
};
