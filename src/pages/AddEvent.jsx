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
        <div className="container my-5 pt-5">
            <h1 className="mb-4">Add New Event</h1>
            <form onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder="Event Name *"
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-3">
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-3">
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-12">
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            placeholder="Location *"
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-12">
                        <textarea
                            name="description"
                            value={formData.description}
                            placeholder="Description"
                            onChange={handleChange}
                            className="form-control"
                            rows="3"
                        />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-success w-100">
                            Add Event
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddEvent;
