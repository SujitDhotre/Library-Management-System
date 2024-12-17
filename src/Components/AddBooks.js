import React, { useState } from "react";
import { addBook } from "../service/api";

function AddBooks() {
  const [rows, setRows] = useState([]);
  const [counter, setCounter] = useState(1);

  const handleAddRow = () => {
    const newRow = { id: Date.now(), serial: counter };
    setRows([...rows, newRow]);
    setCounter(counter + 1);
  };

  const handleRemoveRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleChange = (e, rowId) => {
    const { id, value } = e.target;
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId ? { ...row, [id]: value } : row
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      for (const row of rows) {
        const book = {
          book_name: row.book_name,
          author: row.author,
          price: row.price,
          qty: row.qty,
          row_shell: row.row_shell,
        };
        await addBook(book);
      }
      alert("Books added successfully!");
    } catch (error) {
      console.error("Error adding books:", error);
      alert("Failed to add books.");
    }
  };

  return (
    <div className="container">
      <h1>Add New Books</h1>
      <button className="btn btn-success btn-sm" onClick={handleAddRow}>
                    Add Row
        </button>

      <form onSubmit={handleSubmit}>
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
          <hr />
          {rows.map((row) => (
            <div className="row mb-1 row-cols-7" key={row.id}>
              <div className="col col-1">
                <p>{row.serial}</p>
              </div>
              <div className="col col-2">
                <input
                  type="text"
                  className="form-control"
                  id="book_name"
                  value={row.book_name || ""}
                  onChange={(e) => handleChange(e, row.id)}
                  placeholder="Book Name"
                />
              </div>
              <div className="col col-2">
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  value={row.author || ""}
                  onChange={(e) => handleChange(e, row.id)}
                  placeholder="Author Name"
                />
              </div>
              <div className="col col-1">
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  value={row.price || ""}
                  onChange={(e) => handleChange(e, row.id)}
                  placeholder="Price"
                />
              </div>
              <div className="col col-2">
                <input
                  type="number"
                  className="form-control"
                  id="qty"
                  value={row.qty || ""}
                  onChange={(e) => handleChange(e, row.id)}
                  placeholder="Quantity"
                />
              </div>
              <div className="col col-2">
                <input
                  type="text"
                  className="form-control"
                  id="row_shell"
                  value={row.row_shell || ""}
                  onChange={(e) => handleChange(e, row.id)}
                  placeholder="Row & Shell.No"
                />
              </div>
              <div className="col col-2">
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemoveRow(row.id)}
                >
                  Remove
                </button>
                <button type="button" className="btn btn-success btn-sm m-2" onClick={handleAddRow}>
                    Add Row
                </button>
              </div>
            </div>
          ))}
        </div>
          <hr />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddBooks;
