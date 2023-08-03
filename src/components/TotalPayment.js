// import { useState, useEffect } from 'react';
import React from "react";
// import DataTable from 'react-data-table-component';
import Datatables from './CustomDatatables';

function TotalPayment() {
    // const sortIcon = <i class="fa-solid fa-chevron-down"></i>;
    // const [columns, setColumns] = useState([]);
    // const [pending, setPending] = useState(true);

    // const data = [
    //     {
    //         id: 1,
    //         sNo: '1',
    //         Date: '1988',
    //         Payment: '10,000'
    //     },
    //     {
    //         id: 2,
    //         sNo: '2',
    //         Date: '1984',
    //         Payment: '7,000'
    //     },
    // ]

    // useEffect(() => {
	// 	const timeout = setTimeout(() => {
	// 		setColumns([
    //             {
    //                 name: 'S.No',
    //                 selector: row => row.sNo,
    //                 sortable: true,
    //             },
    //             {
    //                 name: 'Date',
    //                 selector: row => row.Date,
    //                 sortable: true,
    //             },
    //             {
    //                 name: 'Payment',
    //                 selector: row => row.Payment,
    //                 sortable: true,
    //             },
	// 		]);
	// 		setPending(false);
	// 	}, 1000);
	// 	return () => clearTimeout(timeout);
	// }, []);
    return (
        <div className="container mt-5">
            <div className="main-page-heading">
                <h3>Total Payments List</h3>
            </div>
            <div className="page-datatables">
                {/* <DataTable
                    pagination
                    columns={columns}
                    data={data}
                    sortIcon={sortIcon}
                    progressPending={pending}
                /> */}
                <Datatables />
            </div>
        </div>
    )
}

export default TotalPayment
