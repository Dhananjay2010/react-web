import { useState } from "react";
import { useHistory } from "react-router";

export const SignUp = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let history = useHistory();

  let onSignUp=() => {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify([]));
    }

    if(password==""){
        return;
    }

    if (password != confirmPassword) {
      alert("Your password and confirm password are not same");
      return;
    }

    let a = JSON.parse(localStorage.getItem("users"));
    let obj = { email, password };
    a.push(obj);
    localStorage.setItem("users", JSON.stringify(a));
    history.push("/login");
  }

  let onChangeEmail=(e) => {
    setEmail(e.currentTarget.value);
  }

  let onChangePassword=(e) => {
    setPassword(e.currentTarget.value);
  }

  let onChangeConfirmPassword=(e) => {
    setConfirmPassword(e.currentTarget.value);
  }

  return (
    <>
      <div className="row">
        <div className="col-4">
          <form className="m-4">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                value={email}
                onChange={onChangeEmail}
                type="email"
                class="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                value={password}
                onChange={onChangePassword}
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword2" class="form-label">
                Confirm Password
              </label>
              <input
                value={confirmPassword}
                onChange={onChangeConfirmPassword}
                type="password"
                class="form-control"
                id="exampleInputPassword2"
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={onSignUp}
            >
              Sign Up!
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

