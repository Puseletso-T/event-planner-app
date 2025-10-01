import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
    const { user, events, setEvents } = useContext(AppContext);

    // Tracks which event is being edited
    const [editingEventId, setEditingEventId] = useState(null);
    const [editData, setEditData] = useState({
        name: "",
        date: "",
        time: "",
        location: "",
        description: "",
    });

    // Deletes event
    const handleDeleteEvent = (id) => {
        setEvents(events.filter((event) => event.id !== id));
    };

    // Enables editing mode
    const handleEditEvent = (event) => {
        setEditingEventId(event.id);
        setEditData({ ...event });
    };

    // Handles input change for edit form
    const handleEditChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    // Saves edited event
    const handleSaveEdit = (id) => {
        setEvents(events.map((event) => (event.id === id ? { ...editData, id } : event)));
        setEditingEventId(null);
    };

    // Cancels editing
    const handleCancelEdit = () => {
        setEditingEventId(null);
    };

    return (
        <div className="container my-5 pt-5">
            <h1 className="mb-4 text-center"> Welcome {user ? user.username : "Guest"}</h1>

            {/* Event list */}
            <h2 className="mb-3">Upcoming Events</h2>
            {events.length === 0 ? (
                <p>No events added yet. Go to <b>Add Event</b> to create one!</p>
            ) : (
                <ul className="list-group">
                    {events.map((event) => (
                        <li
                            key={event.id}
                            className="list-group-item d-flex justify-content-between align-items-start flex-column flex-md-row"
                        >
                            {editingEventId === event.id ? (
                                // Edit form
                                <div className="w-100">
                                    <input
                                        type="text"
                                        name="name"
                                        value={editData.name}
                                        onChange={handleEditChange}
                                        className="form-control mb-2"
                                        placeholder="Event Name"
                                        required
                                    />
                                    <div className="d-flex gap-2 mb-2">
                                        <input
                                            type="date"
                                            name="date"
                                            value={editData.date}
                                            onChange={handleEditChange}
                                            className="form-control"
                                            required
                                        />
                                        <input
                                            type="time"
                                            name="time"
                                            value={editData.time}
                                            onChange={handleEditChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        name="location"
                                        value={editData.location}
                                        onChange={handleEditChange}
                                        className="form-control mb-2"
                                        placeholder="Location"
                                        required
                                    />
                                    <textarea
                                        name="description"
                                        value={editData.description}
                                        onChange={handleEditChange}
                                        className="form-control mb-2"
                                        placeholder="Description"
                                        rows="2"
                                    />
                                    <div className="d-flex gap-2">
                                        <button
                                            className="btn btn-success btn-sm"
                                            onClick={() => handleSaveEdit(event.id)}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="btn btn-secondary btn-sm"
                                            onClick={handleCancelEdit}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                // Event display
                                <>
                                    <div>
                                        <h5>{event.name}</h5>
                                        <p className="mb-1">
                                            {event.date} at {event.time} — {event.location}
                                        </p>
                                        {event.description && (
                                            <p className="text-muted">{event.description}</p>
                                        )}
                                    </div>
                                    <div className="mt-2 mt-md-0">
                                        <button
                                            className="btn btn-warning btn-sm me-2"
                                            onClick={() => handleEditEvent(event)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDeleteEvent(event.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dashboard;
