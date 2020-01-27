const token = sessionStorage.getItem('token');
const endpoint = process.env.REACT_APP_ENDPOINT;
const userAuth = {
  isAuthenticated: false,
  authenticate: () => {
    if (token) userAuth.isAuthenticated = true;
    return userAuth.isAuthenticated;
  },
  signOut: () => {
    if (token) sessionStorage.removeItem('token');
  },
};

function handleResponse(res) {
  return res.json().then((data) => {
    if (res.ok) {
      return data;
    } else {
      let error = Object.assign({}, res, {
        status: res.status,
        statusText: res.statusText,
      });
      return Promise.reject(error);
    }
  });
}

export const userLogin = (payload) => {
  console.log(endpoint);
  fetch(`${endpoint}accounts/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then(handleResponse)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default userAuth;
