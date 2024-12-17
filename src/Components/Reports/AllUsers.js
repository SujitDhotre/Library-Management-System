import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule } from "ag-grid-community"; // Ensure this is imported
import { getUsers } from "../../service/api"; // Adjust path as needed

// Register required modules
ModuleRegistry.registerModules([ClientSideRowModelModule]);

function AllUsers() {
  const [rowData, setRowData] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Column definitions
  const colDefs = [
    { headerName: "User Id", field: "id" },
    { headerName: "First Name", field: "f_name" },
    { headerName: "Middle Name", field: "m_name" },
    { headerName: "Last Name", field: "l_name" },
    { headerName: "Mobile Number", field: "mob" },
    { headerName: "User Type", field: "type" },
    { headerName: "Email", field: "email" },
  ];

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        console.log(response.data);
        
        setRowData(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container m-2">
      <h1>All Users</h1>
        <input
          type="text"
          className="search"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        />
      <div className="ag-theme-balham" style={{ height: 400, width: 1200 }}>
        <br />
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          pagination={true}
          paginationPageSize={5}
          quickFilterText={searchText}
        />
      </div>
    </div>
  );
}

export default AllUsers;
