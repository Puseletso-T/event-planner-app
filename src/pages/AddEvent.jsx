import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const AddEvent = () => {
    const { events, setEvents } = useContext(AppContext);

    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: "",
        location: "",
        description: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.date || !formData.time || !formData.location) {
            alert("Please fill in all required fields.");
            return;
        }

        const newEvent = { ...formData, id: Date.now() };
        setEvents([...events, newEvent]); // Adding event to global context
        setFormData({ name: "", date: "", time: "", location: "", description: "" });

        alert("Event added successfully!");
    };

    return (
        <div className="container d-flex justify-content-center align-items-center my-5 pt-5">
            <div className="card shadow-sm p-4 w-100" style={{ maxWidth: "600px" }}>
                <h1 className="mb-4 text-center fw-bold">Add New Event</h1>
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="Event Name *"
                        onChange={handleChange}
                        className="form-control p-3"
                        required
                    />
                    <div className="row g-3">
                        <div className="col-md-6">
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="form-control p-3"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="form-control p-3"
                                required
                            />
                        </div>
                    </div>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        placeholder="Location *"
                        onChange={handleChange}
                        className="form-control p-3"
                        required
                    />
                    <textarea
                        name="description"
                        value={formData.description}
                        placeholder="Description"
                        onChange={handleChange}
                        className="form-control p-3"
                        rows="3"
                    />
                    <button type="submit" className="btn btn-success w-100">
                        Add Event
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddEvent;
