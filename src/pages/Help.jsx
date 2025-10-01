import React from "react";

const Help = () => {
    return (
        <div className="container my-5 pt-5">
            <h1 className="mb-4">Help & User Guide</h1>
            <h3>Getting Started</h3>
            <p>Register for an account using your name, email, username, and password. Then log in to access your dashboard.</p>

            <h3>Dashboard</h3>
            <p>The dashboard displays your upcoming events. From here you can add, edit, or delete events.</p>

            <h3>Adding an Event</h3>
            <p>To create a new event click "Add Event" in the navigation bar and fill in the event details: name, date, time, description, and location.</p>

            <h3>Editing an Event</h3>
            <p>Click the <b>Edit</b> button on any event to update its details. Save or cancel changes as needed.</p>

            <h3>Deleting an Event</h3>
            <p>Click the <b>Delete</b> button to permanently remove an event from your dashboard.</p>

            <h3>Tips</h3>
            <ul>
                <li>Use clear names for events to stay organised.</li>
                <li>Keep descriptions short but informative.</li>
                <li>Check dates and times carefully before saving.</li>
            </ul>
        </div>
    );
};

export default Help;
