import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Image from "next/image";
import { Link } from "components";
import { Layout } from "components/account";
import { userService, alertService } from "services";

export default Login;

function Login() {
  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit({ username, password }) {
    return userService
      .login(username, password)
      .then(() => {
        // get return url from query parameters or default to '/'
        const returnUrl = router.query.returnUrl || "/";
        router.push(returnUrl);
      })
      .catch(alertService.error);
  }

  return (
    <Layout>
      <div className="row">
        <div
          className="col cardParentRow"
          style={{
            paddingLeft: "109px !important",
            paddingRight: "0% !important",
            paddingTop: '5%',
            paddingBottom: '5%',
            marginBottom: '5%',
            width: "100%",
            height: "100vh",
          }}
        >
          <Image
            alt="bopis-login-logo"
            src="/login-sur1.png"
            width="72%" height="95vh" layout="responsive"
          />
        </div>
        <div
          className="col"
          style={{
            width: "420px",
            height: "327px",
            paddingTop: "25%",
            paddingRight: "155px",
          }}
        >
          <div>
            <div
              className="card"
              style={{ border: "none", paddingLeft: "120px", width: '80%' }}
            >
              <h4
                className="card-header"
                style={{
                  fontFamily: "Lato !important",
                  fontWeight: "400",
                  fontSize: "31px",
                  lineHeight: "37.2px",
                }}
              >
                LOGIN
              </h4>
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div
                    className="form-group"
                    style={{
                      fontWeight: "700",
                      fontSize: "14px",
                      lineHeight: "16.8px",
                      width: "100%",
                      height: "65px",
                      marginBottom: "0% !important",
                    }}
                  >
                    <label>Username</label>
                    <input
                      style={{ paddingTop: "8px" }}
                      name="username"
                      type="text"
                      {...register("username")}
                      className={`form-control ${
                        errors.username ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.username?.message}
                    </div>
                  </div>
                  <div
                    className="form-group"
                    style={{
                      fontWeight: "700",
                      fontSize: "14px",
                      lineHeight: "16.8px",
                      width: "100%",
                      height: "65px",
                      paddingTop: "24px",
                      marginBottom: " 0% !important",
                    }}
                  >
                    <label>Password</label>
                    <input
                      name="password"
                      type="password"
                      {...register("password")}
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.password?.message}
                    </div>
                  </div>
                  <div style={{ paddingTop: "48px" }}>
                    <button
                      style={{
                        height: "48px",
                        width: "125px",
                        backgroundColor: "black",
                        color: "white",
                        marginRight: "20px",
                      }}
                      disabled={formState.isSubmitting}
                      className="btn btn-primary"
                    >
                      {formState.isSubmitting && (
                        <span className="spinner-border spinner-border-sm mr-1"></span>
                      )}
                      LOGIN
                    </button>
                    {/* <Link
                      href="/account/register"
                      className="btn btn-link"
                      style={{
                        height: "48px",
                        width: "125px",
                        backgroundColor: "black",
                        color: "white",
                        lineHeight: '36px'
                      }}
                    >
                      REGISTER
                    </Link> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
