import React from "react"
import {useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
// import "./homepage.css"

const Homepage = ({setLoginUser}) => {

    const [userList, setUserList] = useState([]);
    console.log(userList);

    const columns = [
        {dataField:'user.gender', text: 'Gender'},
        {dataField:'user.name.first', text: 'First Name', filter: textFilter() },
        {dataField:'user.name.last', text: 'Last Name'},
        {dataField:'user.email', text: 'Email Address'},
        {dataField:'user.phone', text: 'Phone Number'},
        {dataField:'user.username', text: 'User Name'}
    ]

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 10,
        showTotal: true,
        onPageChange: function(page, sizePerPage) {
            console.log('page', page)
            console.log('sizePerPage', sizePerPage)
        },
        onSizePerPageChange: function(page, sizePerPage) {
            console.log('page', page)
            console.log('sizePerPage', sizePerPage)
        }
        
    });






    useEffect(() => {

        let url = "https://randomuser.me/api/0.8/?results=200";
        fetch(url)
        .then(response => response.json())
        .then(userList => setUserList(userList.results))
        .catch(err => console.error(err))
      }, [])

    return (
        <div>
            <h1>User Details</h1>
            <BootstrapTable  keyField='user.registered' columns={columns} data={userList} pagination={pagination} filter={filterFactory()} />
        </div>
    )
}

export default Homepage