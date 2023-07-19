import { useContext, useState } from "react";
import Context from "./Context/Context";

import { Button, Col, Form, Row, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function StudentsData() {
  const context = useContext(Context);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const [deleteId, setDeleteId] = useState({});

  return (
    <>
      <div className="">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row title-row">
              <div className="">
                <h2>
                  Manage <b style={{ display: "block" }}>Students Data</b>
                </h2>
              </div>
              <div className="">
                <Link to="/studentForm">
                  <Button
                    className="addButton"
                    variant="success"
                    onClick={() => {
                      context.setcreatestudent("create");
                    }}
                  >
                    <i
                      className="fa-solid fa-circle-plus"
                      style={{ color: "#ffffff" }}
                    ></i>{" "}
                    <span>Add Student</span>
                  </Button>
                </Link>
                {/* <a className="btn btn-success" data-toggle="modal">
                  <i
                    className="fa-solid fa-circle-plus"
                    style={{ color: "#ffffff" }}
                  ></i>{" "}
                  <span>Add New User</span>
                </a> */}
              </div>
            </div>
          </div>
          {/* <UserData /> */}
          <div className="clearfix">
            <div className="hint-text">
              {/* Showing <b>{context.userData.length}</b> entries */}
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                 
                  <th>Department</th>
                  <th>Address</th>
                
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {context.studentData.length > 0 &&
                  context.studentData.map((user, index) => {
                    return (
                      <tr key={user.id}>
                        <td data-label="No:">{index + 1}</td>
                        <td data-label="Name:">{user.name}</td>
                        <td data-label="Email:">{user.email}</td>
                      
                        <td data-label="Department:">{user.department}</td>
                        <td data-label="Address:">
                          {user.address},{user.city},{user.state}
                          {user.country}
                        </td>
                      
                      

                        <td data-label="Action:" className="action-bar">
                          <Link
                            to="/studentForm"
                            className="edit"
                            onClick={(e) => {
                              context.getstudentById(e.target.id);
                              context.setcreatestudent("edit");
                            }}
                          >
                            <i
                              className="fa-solid fa-pen-to-square"
                              id={user.id}
                            ></i>
                          </Link>
                          <a
                            href="#editEmployeeModal"
                            className="delete"
                            data-toggle="modal"
                            onClick={(e) => {
                              setDeleteId(e.target.id);
                              handleShow();
                              // handleDelete(e.target.id);
                            }}
                          >
                            <i
                              className="fa-solid fa-trash"
                              id={user.id}
                              style={{ color: "#f00505" }}
                            ></i>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Card>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Delete User</Modal.Title>
          </Modal.Header>
          <div className="modal-body">
            <p>Are you sure you want to delete this Record?</p>
            <p className="text-danger">
              <small>This action cannot be undone.</small>
            </p>
          </div>

          <Form
            className="card shadow p-4"
            style={{
              rowGap: "15px",
              borderBottomLeftRadius: "30px",
              borderBottomRightRadius: "30px",
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px",
            }}
          >
            <div className="modal-btn">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="danger"
                id={context.newStudentData.id}
                onClick={(e) => {
                  context.handleDeleteStudent(deleteId);
                  handleClose();
                }}
              >
                Delete
              </Button>
            </div>
          </Form>
        </Modal>
      </Card>
    </>
  );
}
