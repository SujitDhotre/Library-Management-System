import React, { useState } from "react";
import { issueBooks } from "../service/api"; // Import the issueBooks function

function IssuBook() {
    const [rows, setRows] = useState([]);
    const [counter, setCounter] = useState(1); // Use state for the counter
    const [userDetails, setUserDetails] = useState({
        memberId: "",
        firstName: "",
        lastName: "",
        date: "",
    });
    const [totalAmount, setTotalAmount] = useState("");
    const [payType, setPayType] = useState("");
    const [status, setStatus] = useState("");

    // Function to add a new row
    const handleAddRow = () => {
        const newRow = { id: Date.now(), serial: counter }; // Include serial in row data
        setRows([...rows, newRow]);
        setCounter(counter + 1); // Increment the counter
    };

    // Function to remove a row by ID
    const handleRemoveRow = (id) => {
        setRows(rows.filter(row => row.id !== id));
        // No need to decrement the counter because it's a sequential counter
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare book data from rows
        const books = rows.map(row => ({
            bookName: document.getElementById(`b_name${row.serial}`).value,
            authorName: document.getElementById(`author${row.serial}`).value,
            price: parseFloat(document.getElementById(`price${row.serial}`).value),
            qty: parseInt(document.getElementById(`qty${row.serial}`).value),
            rowShell: document.getElementById(`row${row.serial}`).value,
        }));

        const user = {
            memberId: userDetails.memberId,
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            date: userDetails.date,
        };

        try {
            const transactionId = await issueBooks(user, books); 
            console.log("Transaction ID:", transactionId);
        } catch (error) {
            console.error("Error issuing books:", error);
        }
    };

    return (
        <>
            <div className="container">
                <h1>Issue Or Return Book</h1>
                <button className="btn btn-primary" onClick={handleAddRow}>Add Row</button>

                <form onSubmit={handleSubmit}>
                    <div className="row row-cols-3"> 
                        <div className="mb-1 col">
                            <label className="form-label">Select</label>
                            <select className="form-select" id="inputGroupSelect01">
                                <option value="1">Select</option>
                                <option value="issue">Issue</option> 
                                <option value="return">Return</option>
                            </select>
                        </div>    
                        <div className="mb-1 col">
                            <label className="form-label">Member Id</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="m_name" 
                                value={userDetails.memberId} 
                                onChange={(e) => setUserDetails({ ...userDetails, memberId: e.target.value })}
                            />
                        </div>
                        <div className="mb-1 col">
                            <label className="form-label">First Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={userDetails.firstName} 
                                onChange={(e) => setUserDetails({ ...userDetails, firstName: e.target.value })}
                            />
                        </div>
                        <div className="mb-1 col">
                            <label className="form-label">From</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                value={userDetails.lastName} 
                                onChange={(e) => setUserDetails({ ...userDetails, lastName: e.target.value })}
                            />
                        </div>
                        <div className="mb-1 col">
                            <label className="form-label">To</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                value={userDetails.date} 
                                onChange={(e) => setUserDetails({ ...userDetails, date: e.target.value })}
                            />
                        </div>                        
                    </div>
                    <hr />
                    <div className="book_div">
                        <div className="row sticky-top back">
                            <div className="col col-1 text-center">Sr.No</div>
                            <div className="col col-2 text-center">Book Name</div>
                            <div className="col col-2 text-center">Author Name</div>
                            <div className="col col-1 text-center">Price</div>
                            <div className="col col-2 text-center">Quantity</div>
                            <div className="col col-2 text-center">Row & Shell</div>
                            <div className="col col-2 text-center">Action</div>
                        </div>
                        {rows.map((row) => (
                            <div className="row mb-1 row-cols-7" key={row.id}>
                                <div className="col col-1">
                                    <p>{row.serial}</p>
                                </div>
                                <div className="col col-2">
                                    <input type="text" className="form-control" id={`b_name${row.serial}`} placeholder="Book Name" />
                                </div>
                                <div className="col col-2">
                                    <input type="text" className="form-control" id={`author${row.serial}`} placeholder="Author Name" />
                                </div>
                                <div className="col col-1">
                                    <input type="number" className="form-control" id={`price${row.serial}`} placeholder="Price" />
                                </div>
                                <div className="col col-2">
                                    <input type="number" className="form-control" id={`qty${row.serial}`} placeholder="Quantity" />
                                </div>
                                <div className="col col-2">
                                    <input type="text" className="form-control" id={`row${row.serial}`} placeholder="Row & Shell.No" />
                                </div>
                                <div className="col col-2">
                                    <button type="button" className="btn btn-success btn-sm m-1" onClick={handleAddRow}>Add</button>
                                    <button type="button" className="btn btn-danger btn-sm" onClick={() => handleRemoveRow(row.id)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr />
                    <div className="row row-col-3">
                        <div className="mb-1 col">
                            <label className="form-label">Total Amount</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={totalAmount} 
                                onChange={(e) => setTotalAmount(e.target.value)}
                            />
                        </div>
                        <div className="mb-1 col">
                            <label className="form-label">Pay Type</label>
                            <select 
                                className="form-select" 
                                value={payType} 
                                onChange={(e) => setPayType(e.target.value)}
                            >
                                <option value="1">Select</option>
                                <option value="cash">Cash</option> 
                                <option value="credit">Credit</option>
                                <option value="UPI">UPI</option>
                            </select>
                        </div>
                        <div className="mb-1 col">
                            <label className="form-label">Status</label>    
                            <select 
                                className="form-select" 
                                value={status} 
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="1">Select</option>
                                <option value="paid">Paid</option>
                                <option value="pending">Pending</option>
                            </select>
                        </div> 
                    </div>
                    <div className="align-centerd-grid gap-2 d-md-flex justify-content-md-center">
                        <button type="submit" className="btn btn-primary mt-2">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default IssuBook;
