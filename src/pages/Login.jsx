import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";

import * as Yup from "yup";
import { AppContext } from "../context/AppContext";


const Login = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(AppContext);

    const LoginSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    });

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-sm p-4 w-100" style={{ maxWidth: "500px" }}>
                <h1 className="mb-3 display-4 fw-bold">Event Planner</h1>
                <Formik
                    initialValues={{ username: "", password: "" }}
                    validationSchema={LoginSchema}
                    onSubmit={(values) => {
                        setUser({ username: values.username }); // Stores user
                        alert(`Welcome ${values.username}!`);
                        navigate("/dashboard"); // Redirects to dashboard on login
                    }}
                >
                    {() => (
                        <Form className="d-flex flex-column gap-3">
                            <div>
                                <Field type="text" name="username" placeholder="Username" className="form-control p-3 fs-5" />
                                <ErrorMessage name="username" component="div" className="text-danger mt-1" />
                            </div>
                            <div>
                                <Field type="password" name="password" placeholder="Password" className="form-control p-3 fs-5" />
                                <ErrorMessage name="password" component="div" className="text-danger mt-1" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg w-100">Login</button>
                        </Form>
                    )}
                </Formik>

                <p className="mt-3">
                    Don’t have an account?{" "}
                    <Link to="/registration" className="text-decoration-none">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
