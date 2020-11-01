import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { users, columns } from "./UserDetails";
import { Button, Modal, InputGroup, FormControl, FormGroup } from "react-bootstrap";
import { Table } from "./Table"

function App() {

  var usersData = users;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let userName = ""
  let userEmail = ""
  let userPhone = ""
  let userId = users.Details.length + 1;

  const saveDetails = () => {

    const newUser = {
      userId: userId,
      userName: userName,
      phoneNumber: userPhone,
      emailAddress: userEmail
    }
    users.Details = users.Details.push(newUser);
    setShow(false);
  }

  const handleChangeUserName = (e) => {
    userName = e.value;
  }


  return (
    <div className="App">
      <h1>User searcher</h1>

      <Button variant="primary" onClick={handleShow}>
        Add user
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>

            <form>
              <FormGroup
                controlId="formBasicText"

              >

                <FormControl
                  type="text"
                  value={userName}
                  placeholder="user name"
                  onChange={handleChangeUserName}
                />
                <FormControl
                  type="text"
                  value={userEmail}
                  placeholder="email"
                  onChange={handleChangeUserName}
                />
                <FormControl
                  type="text"
                  value={userPhone}
                  placeholder="phone number"
                  onChange={handleChangeUserName}
                />

              </FormGroup>
            </form>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveDetails}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Table />
    </div>
  );
}

export default App;


