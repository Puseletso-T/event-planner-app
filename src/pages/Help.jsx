import React from "react";

const Help = () => {
    return (
        <div className="container d-flex justify-content-center align-items-start my-5 pt-5">
            <div className="card shadow-sm p-4 w-100" style={{ maxWidth: "800px" }}>
                <h1 className="mb-4 text-center fw-bold">Help & User Guide</h1>

                <h3 className="fw-semibold mt-4">Getting Started</h3>
                <p>Register for an account using your name, email, username, and password. Then log in to access your dashboard.</p>

                <h3 className="fw-semibold mt-4">Dashboard</h3>
                <p>The dashboard displays your upcoming events. From here you can add, edit, or delete events.</p>

                <h3 className="fw-semibold mt-4">Adding an Event</h3>
                <p>To create a new event click "Add Event" in the navigation bar and fill in the event details: name, date, time, description, and location.</p>

                <h3 className="fw-semibold mt-4">Editing an Event</h3>
                <p>Click the <b>Edit</b> button on any event to update its details. Save or cancel changes as needed.</p>

                <h3 className="fw-semibold mt-4">Deleting an Event</h3>
                <p>Click the <b>Delete</b> button to permanently remove an event from your dashboard.</p>

                <h3 className="fw-semibold mt-4">Tips</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Use clear names for events to stay organised.</li>
                    <li className="list-group-item">Keep descriptions short but informative.</li>
                    <li className="list-group-item">Check dates and times carefully before saving.</li>
                </ul>
            </div>
        </div>
    );
};

export default Help;
