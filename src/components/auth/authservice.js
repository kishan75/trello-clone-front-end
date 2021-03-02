import { signUp, login } from "../../services/auth";

export async function signup(credential) {
  var response = await signUp(credential);
  if (response.status !== 200) alert(response.reason);
  else {
    const content = await response.json();
    localStorage.setItem("accessToken", content.accessToken);
    //    window.location = "";
  }
}

export async function signIn(credential) {
  var response = await login(credential);
  if (response.status !== 200) alert(response.reason);
  else {
    const content = await response.json();
    localStorage.setItem("accessToken", content.accessToken);
    //    window.location = "";
  }
}
