import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { users, columns } from "./UserDetails"

const { SearchBar } = Search;

let nameFilter;
let idFilter;
let emailFilter;
let phoneFilter;

const ClearButton = props => {
  const handleClick = () => {
    props.onSearch("");
    props.clearAllFilter();
  };
  return (
    <Button
      variant="secondary"
      onClick={handleClick}
      style={{
        fontSize: "16px",
        padding: "5px",
        margin: "10px",
        height: "40px"
      }}
    >
      Clear
    </Button>
  );
};





//const [userData,setData] = useState(user.Details);
let userData = users.Details;
export class Table extends React.Component {
  columns = [
    {
      dataField: "userId",
      text: "User ID",
      filter: textFilter({
        getFilter: filter => {
          idFilter = filter;
        }
      })
    },
    {
      dataField: "userName",
      text: "User Name",
      filter: textFilter({
        getFilter: filter => {
          nameFilter = filter;
        }
      }),
      sort: true
    },
    {
      dataField: "phoneNumber",
      text: "Phone Number",
      filter: textFilter({
        getFilter: filter => {
          phoneFilter = filter;
        }
      })
    },
    {
      dataField: "emailAddress",
      text: "Email Address",
      filter: textFilter({
        getFilter: filter => {
          emailFilter = filter;
        }
      })
    }
  ];

  clearAllFilter() {
    idFilter("");
    nameFilter("");
    phoneFilter("");
    emailFilter("");
  }






  render() {
    return (


      <div>


        <ToolkitProvider
          bootstrap4
          keyField="name"
          data={userData}
          columns={this.columns}
          search
        >
          {props => (
            <div>
              <SearchBar
                {...props.searchProps}
                style={{ width: "400px", height: "40px" }}
              />
              <ClearButton
                {...props.searchProps}
                clearAllFilter={this.clearAllFilter}
              />
              <BootstrapTable
                {...props.baseProps}
                filter={filterFactory()}
                noDataIndication="There is no solution"
                striped
                hover
                condensed
              />
            </div>
          )}
        </ToolkitProvider>
      </div>
    );
  }
}