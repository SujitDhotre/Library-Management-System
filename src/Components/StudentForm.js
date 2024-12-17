import React, { useState } from "react";
import { addUser } from "../service/api"; // Ensure this path points to your API file

function StudentForm() {
    const [formData, setFormData] = useState({
        type: "",
        f_name: "",
        m_name: "",
        l_name: "",
        email: "",
        mob: "",
        // password: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        try {
            const user = {
                type: formData.type,
                f_name: formData.f_name,
                m_name: formData.m_name,
                l_name: formData.l_name,
                email: formData.email,
                mob: formData.mob,
                // password: formData.password,
            };
            const response = await addUser(user);
            console.log(user)
            console.log("User added successfully:", response);
            alert("User added successfully!");
        } catch (error) {
            console.error("Error adding user:", error);
            alert("Failed to add user.");
        }
    };

    return (
        <>
            <h1 className="text-center">Add New User</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Register As</label>
                        <select
                            className="form-select"
                            id="type"
                            value={formData.userType}
                            onChange={handleChange}
                        >
                            <option value="">Select</option>
                            <option value="author">Author</option>
                            <option value="student">Student</option>
                        </select>
                    </div>

                    <div className="mb-3 col">
                        <label className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="f_name"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Middle Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="m_name"
                            value={formData.middleName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="l_name"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Mobile No</label>
                        <input
                            type="text"
                            className="form-control"
                            id="mob"
                            value={formData.mobile}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {/* <div className="row">
                    <div className="mb-3 col">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                </div> */}
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
}

export default StudentForm;
