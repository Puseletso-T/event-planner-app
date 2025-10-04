import React from "react";

const Help = () => {
    return (
        <div className="container my-5 pt-5">
            <div className="row">
                <div className="col-12 col-lg-10 mx-auto">
                    <div className="card shadow-sm p-4 rounded-3">

                        <h1 className="text-center text-primary fw-bold mb-4">
                            Help & User Guide
                        </h1>
                        <p className="lead text-muted text-center mb-4">
                            Learn how to register, log in, and manage your events effectively.
                        </p>
                        <hr />


                        <h3 className="fw-semibold mt-4">Getting Started</h3>
                        <ul className="list-group list-group-flush mb-4">
                            <li className="list-group-item">
                                <strong>Register:</strong> Create an account with your name,
                                username, email, and password.
                            </li>
                            <li className="list-group-item">
                                <strong>Login:</strong> Use your username and password to access
                                your dashboard.
                            </li>
                        </ul>

                        <h3 className="fw-semibold mt-4">Event Management</h3>
                        <ul className="list-group list-group-flush mb-4">
                            <li className="list-group-item">
                                <strong>Add Event:</strong> Provide the event name, date, time,
                                location, and description.
                            </li>
                            <li className="list-group-item">
                                <strong>Edit Event:</strong> Update details anytime using the{" "}
                                <em>Edit</em> button.
                            </li>
                            <li className="list-group-item">
                                <strong>Delete Event:</strong> Remove events permanently with the{" "}
                                <em>Delete</em> button.
                            </li>
                        </ul>

                        <h3 className="fw-semibold mt-4">Tips</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Use clear, descriptive event names.</li>
                            <li className="list-group-item">Double-check dates and times before saving.</li>
                            <li className="list-group-item">Keep descriptions short but informative.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Help;
