import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";

import * as Yup from "yup";

const Registration = () => {
    const navigate = useNavigate();
    const RegistrationSchema = Yup.object().shape({
        name: Yup.string().max(15, "First name must not exceed 15 characters").required(" Name is required"),
        username: Yup.string().max(20, "Username must not exceed 20 characters").required("Username is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .matches(/[A-Z]/, "Must contain at least one uppercase letter")
            .matches(/[a-z]/, "Must contain at least one lowercase letter")
            .matches(/\d/, "Must contain at least one number")
            .matches(/[@$!%*?&]/, "Must contain at least one special character")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
    });
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-sm p-4 w-100" style={{ maxWidth: "500px" }}>
                <h1 className="mb-4 text-center fw-bold">Register</h1>
                <Formik
                    initialValues={{ name: "", username: "", email: "", password: "", confirmPassword: "" }}
                    validationSchema={RegistrationSchema}
                    onSubmit={(values) => {
                        console.log("Registration successful:", values);
                        alert(`Welcome ${values.name}! Your account has been created.`);
                        navigate("/login"); //Redirects to login page on successful registration 
                    }}
                >
                    {() => (
                        <Form className="d-flex flex-column gap-3">
                            <div>
                                <Field type="text" name="name" placeholder="Full Name" className="form-control p-3 fs-5" />
                                <ErrorMessage name="name" component="div" className="text-danger mt-1" />
                            </div>
                            <div>
                                <Field type="text" name="username" placeholder="Username" className="form-control p-3 fs-5" />
                                <ErrorMessage name="username" component="div" className="text-danger mt-1" />
                            </div>
                            <div>
                                <Field type="email" name="email" placeholder="Email" className="form-control p-3 fs-5" />
                                <ErrorMessage name="email" component="div" className="text-danger mt-1" />
                            </div>
                            <div>
                                <Field type="password" name="password" placeholder="Password" className="form-control p-3 fs-5" />
                                <ErrorMessage name="password" component="div" className="text-danger mt-1" />
                            </div>
                            <div>
                                <Field type="password" name="confirmPassword" placeholder="Confirm Password" className="form-control p-3 fs-5" />
                                <ErrorMessage name="confirmPassword" component="div" className="text-danger mt-1" />
                            </div>
                            <button type="submit" className="btn btn-success btn-lg w-100">Register</button>
                        </Form>
                    )}
                </Formik>

                <p className="mt-3">
                    Already have an account?{" "}
                    <Link to="/login" className="text-decoration-none">Login here</Link>
                </p>
            </div>
        </div>
    );
};


export default Registration;
