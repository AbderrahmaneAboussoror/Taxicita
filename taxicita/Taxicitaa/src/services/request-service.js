const store = async (requestForm) => {
  var token = sessionStorage.getItem("token");
  try {
    const response = await axios.post(
      "http://localhost:8000/api/requests",
      requestForm,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // handle success
    console.log("Request created:", response.data);
    return response.data;
  } catch (error) {
    // handle error
    console.error("Error creating request:", error.response.data);
  }
};

const requests = async () => {
  var token = sessionStorage.getItem("token");
  try {
    const response = await axios.get("http://localhost:8000/api/requests", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    // handle success
    console.log("Requests :", response.data);
    return response.data;
  } catch (error) {
    // handle error
    console.error("Error creating request:", error.response.data);
  }
};

const acceptRequest = async (requestForm) => {
  var token = sessionStorage.getItem("token");
  try {
    const response = await axios.post(
      "http://localhost:8000/api/requests/accept",
      requestForm,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // handle success
    console.log(response.data);
  } catch (error) {
    // handle error
    console.error(error.response.data);
  }
};

const getAcceptedRequestUser = async (requestForm) => {
  var token = sessionStorage.getItem("token");
  try {
    const response = await axios.post(
      "http://localhost:8000/api/requests/accepted",
      requestForm,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // handle success
    console.log(response.data);
    return response.data;
  } catch (error) {
    // handle error
    console.error(error.response.data);
  }
};

const deleteRequest = async (id) => {
  var token = sessionStorage.getItem("token");
  try {
    const response = await axios.delete(
      "http://localhost:8000/api/requests/" + id,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // handle success
    console.log("Request deleted:", response.data);
  } catch (error) {
    // handle error
    console.error("Error creating request:", error.response.data);
  }
};

const checkRequest = async (user_id) => {
  var token = sessionStorage.getItem("token");
  try {
    const response = await axios.get(
      `http://localhost:8000/api/requests/check/${user_id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // handle success
    console.log(response.data);
    return response.data;
  } catch (error) {
    // handle error
    console.error("Error :", error.response.data);
  }
};

const rating = async (formInputs) => {
  var token = sessionStorage.getItem("token");
  try {
    const response = await axios.post(
      "http://localhost:8000/api/users/rating",
      formInputs,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error :", error.response.data);
  }
};

export const requestService = {
  store,
  requests,
  acceptRequest,
  getAcceptedRequestUser,
  deleteRequest,
  checkRequest,
  rating,
};
