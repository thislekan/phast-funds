const userAuth = {
  isAuthenticated: false,
  confirmToken: () => {
    const token = sessionStorage.getItem('token');
    if (token) userAuth.isAuthenticated = true;
    return userAuth.isAuthenticated;
  },
  authenticate: (cb) => {
    const confirmed = userAuth.confirmToken();
    if (cb) setTimeout(cb, 100);
    return confirmed;
  },
  signOut: () => {
    const confirmed = userAuth.confirmToken();
    if (confirmed) sessionStorage.removeItem('token');
  },
};

export const endpoint = process.env.REACT_APP_ENDPOINT;
export function handleResponse(res) {
  return res.json().then((data) => {
    if (res.ok) {
      return data;
    } else {
      let error = Object.assign({}, res, {
        status: res.status,
        statusText: res.statusText,
        message: data,
      });
      return Promise.reject(error);
    }
  });
}

export default userAuth;
