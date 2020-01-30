const endpoint = process.env.REACT_APP_ENDPOINT;

const handleResponse = (res) => {
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
};

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const formatOptions = (method, authorize, payload) => {
  if (method) options.method = method;
  if (authorize)
    options.headers.Authorization = `Token ${sessionStorage.getItem('token')}`;
  if (payload) options.body = JSON.stringify(payload);
  return options;
};

const apiCall = async (route, method, payload, authorize) => {
  console.log('fired', route, method);
  let data;
  let apiError;
  const apiOptions = formatOptions(method, authorize, payload);
  await fetch(endpoint + route, apiOptions)
    .then(handleResponse)
    .then((res) => {
      console.log('got here for success');
      data = res;
    })
    .catch((err) => (apiError = err));

  if (apiError) return { ...apiError };
  return { ...data };
};

export default apiCall;
