import { useState } from "react";
import { useHistory } from "react-router";

let Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let history = useHistory();

  return (
    <div>
      <div className="row">
        <div className="col-4">
          <form className="m-4">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
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
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
                value={password}
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Login
            </button>

            <br></br>
            <br></br>

            <button
              onClick={() => {
                history.push("/signup");
              }}
              class="btn btn-primary"
            >
              Go to Sign up!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
