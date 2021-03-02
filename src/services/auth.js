import { BASE_URL } from "../constant";
var myHeaders = new Headers();

myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

export async function signUp(payload) {
  var urlencoded = new URLSearchParams();

  Object.keys(payload).forEach((data) => {
    urlencoded.append(data, payload[data]);
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const URL = `${BASE_URL}auth/signup`;

  const response = await fetch(URL, requestOptions);
  return response;
}

export async function login(payload) {
  var urlencoded = new URLSearchParams();

  Object.keys(payload).forEach((data) => {
    urlencoded.append(data, payload[data]);
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const URL = `${BASE_URL}auth/login`;

  const response = await fetch(URL, requestOptions);
  return response;
}
