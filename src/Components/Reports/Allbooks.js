import React, { useState, useEffect, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule } from "ag-grid-community";
import { getBooks } from "../../service/api"; // Adjust path as needed

// Register required modules
ModuleRegistry.registerModules([ClientSideRowModelModule]);

function AllBooks() {
  const [rowData, setRowData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const gridRef = useRef(); // Reference to the grid

  // Column definitions
  const colDefs = [
    { headerName: "Book Id", field: "id" },
    { headerName: "Book Name", field: "book_name" },
    { headerName: "Author Name", field: "author" },
    { headerName: "Quantity", field: "qty" },
    { headerName: "Price", field: "price" },
    { headerName: "Location", field: "row_shell" },
  ];

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks();
        setRowData(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  // Handle search input change
  const onSearchChange = (e) => {
    setSearchText(e.target.value);
    if (gridRef.current) {
      gridRef.current.api.setQuickFilter(e.target.value); // Apply quick filter
    }
  };

  return (
    <div className="container m-2">
      <h1>All Books</h1>
      <input
        type="text"
        className="search"
        placeholder="Search"
        onChange={onSearchChange}
        value={searchText}
      />
      <div className="ag-theme-balham" style={{ height: 400, width: 1200 }}>
        <AgGridReact
          ref={gridRef} // Attach grid reference
          rowData={rowData}
          columnDefs={colDefs}
          pagination={true}
          paginationPageSize={5}
          domLayout="autoHeight" // Ensures layout adapts
        />
      </div>
    </div>
  );
}

export default AllBooks;
