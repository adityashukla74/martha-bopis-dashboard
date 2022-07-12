import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Link } from "components";
import { Layout } from "components/account";
import { userService, alertService } from "services";
import Image from "next/image";

export default Register;

function Register() {
  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(user) {
    return userService
      .register(user)
      .then(() => {
        alertService.success("Registration successful", {
          keepAfterRouteChange: true,
        });
        router.push("login");
      })
      .catch(alertService.error);
  }

  return (
    <Layout>
      <div className="row">
        <div
          className="col cardParentRow"
          style={{
            paddingLeft: "109px",
            paddingTop: "115px",
            paddingBottom: "115px",
            paddingRight: "0% !important",
            width: "551px !important",
            height: "794px !important",
          }}
        >
          <Image
            alt="bopis-login-logo"
            src="/login-sur1.png"
            width={551}
            height={794}
          />
        </div>
        <div
          className="col"
          style={{
            width: "420px",
            height: "327px",
            paddingTop: "349px",
            paddingRight: "155px",
          }}
        >
          <div>
            <div
              className="card"
              style={{ border: "none", paddingLeft: "120px" }}
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
                REGISTER
              </h4>
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div
                    className="form-group"
                    style={{
                      fontWeight: "700",
                      fontSize: "14px",
                      lineHeight: "16.8px",
                      width: "420px",
                      height: "65px",
                      marginTop: "24px",
                      marginBottom: "0% !important",
                    }}
                  >
                    <label>First Name</label>
                    <input
                      name="firstName"
                      type="text"
                      {...register("firstName")}
                      className={`form-control ${
                        errors.firstName ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.firstName?.message}
                    </div>
                  </div>
                  <div
                    className="form-group"
                    style={{
                      fontWeight: "700",
                      fontSize: "14px",
                      lineHeight: "16.8px",
                      width: "420px",
                      height: "65px",
                      marginTop: "24px",
                      marginBottom: " 0% !important",
                    }}
                  >
                    <label>Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      {...register("lastName")}
                      className={`form-control ${
                        errors.lastName ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.lastName?.message}
                    </div>
                    <div className="invalid-feedback">
                      {errors.password?.message}
                    </div>
                  </div>

                  <div
                    className="form-group"
                    style={{
                      fontWeight: "700",
                      fontSize: "14px",
                      lineHeight: "16.8px",
                      width: "420px",
                      height: "65px",
                      marginTop: "24px",
                      marginBottom: " 0% !important",
                    }}
                  >
                    <label>Username</label>
                    <input
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
                      width: "420px",
                      height: "65px",
                      marginTop: "24px",
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
                      disabled={formState.isSubmitting}
                      className="btn btn-primary"
                      style={{
                        height: "48px",
                        width: "125px",
                        backgroundColor: "black",
                        color: "#FFFFFF !important",
                        lineHeight: "30px",
                        marginRight: "20px",
                        fontSize: '16px',
                      }}
                    >
                      {formState.isSubmitting && (
                        <span className="spinner-border spinner-border-sm mr-1"></span>
                      )}
                      
                      SUBMIT
                    </button>
                    <Link
                      href="/account/login"
                      className="btn btn-link"
                      style={{
                        height: "48px",
                        width: "125px",
                        backgroundColor: "black",
                        color: "white",
                        lineHeight: "30px",
                        fontSize: '16px',
                      }}
                    >
                      CANCEL
                    </Link>
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
