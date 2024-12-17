import React from "react";

function Dashboard() {
    


    return(
        <div className="container">
            <h1>Your Dashboard</h1>      
            <div className="container">
            <div className="row g-2">
                <div className="col-6 ">
                    <div className="p-3 border rounded-4 bg-success-subtle">
                        <div className="row">
                            <div className="col-6">
                                <h3>All Users</h3>
                                <h4>100</h4>
                            </div>
                            <div className="col-6">
                            <div className="row">
                                <div className="col-6">
                                    <h4>Authors</h4>
                                    <h4>50</h4>
                                </div>
                                <div className="col-6">
                                    <h4>Readers</h4>
                                    <h4>50</h4>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-sm btn-success">View All</button>
                        </div>
                    </div>
                </div>
                <div className="col-6 ">
                    <div className="p-3 border rounded-4 bg-warning-subtle">
                        <h3>All Books</h3>
                        <h4>50</h4>   
                        <div>
                            <button className="btn btn-sm btn-warning">View All</button>
                        </div>                    
                    </div>
                </div>
                <div className="col-6">
                    <div className="p-3 border rounded-4 bg-info-subtle">
                        <h3>Books Issued</h3>
                        <h4>20</h4>
                    </div>
                </div>
                <div className="col-6">
                    <div className="p-3 border rounded-4 bg-danger-subtle">
                    <h3>Pending Payments</h3>
                    <h4>20</h4>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Dashboard