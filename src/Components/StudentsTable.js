import { useContext } from "react";
import Context from "./Context/Context";

import { Button, Col, Form, Row, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function StudentsTable() {
  const context = useContext(Context);
  const nav = useNavigate();

  return (
    <>
      <div className="">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row title-row">
              <div className="">
                <h2>
                  {context.createstudent === "edit" ? "Edit" : "Create"}{" "}
                  <b style={{ display: "block" }}>Students Data</b>
                </h2>
              </div>
            </div>
          </div>
          {/* <UserData /> */}
          <div className="clearfix">
            <div className="hint-text">
              {/* Showing <b>{context.userData.length}</b> entries */}
            </div>
          </div>

          <Form
            className="card p-4"
            style={{
              rowGap: "15px",
              borderBottomLeftRadius: "0.35rem",
              borderBottomRightRadius: "0.35rem",
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px",
            }}
          >
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    name="name"
                    type="text"
                    placeholder="Enter Student Name"
                    value={context.newStudentData.name}
                    onChange={(e) =>
                      context.setnewStudentData({
                        ...context.newStudentData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                name="email"
                type="email"
                placeholder="Enter Student Email"
                value={context.newStudentData.email}
                onChange={(e) =>
                  context.setnewStudentData({
                    ...context.newStudentData,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                required
                name="phoneno"
                type="tel"
                placeholder="Enter Student Phone No"
                value={context.newStudentData.phoneno}
                onChange={(e) =>
                  context.setnewStudentData({
                    ...context.newStudentData,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Row>
              <Col>
                {" "}
                <Form.Group>
                  <Form.Label>Department</Form.Label>
                  <Form.Control
                    required
                    name="department"
                    type="text"
                    placeholder="Enter Department"
                    value={context.newStudentData.department}
                    onChange={(e) =>
                      context.setnewStudentData({
                        ...context.newStudentData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Class Teacher</Form.Label>
                  <Form.Control
                    required
                    name="teacher"
                    type="text"
                    placeholder="Teacher Name"
                    value={context.newStudentData.teacher}
                    onChange={(e) =>
                      context.setnewStudentData({
                        ...context.newStudentData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                required
                name="address"
                type="text"
                placeholder="Address"
                value={context.newStudentData.address}
                onChange={(e) =>
                  context.setnewStudentData({
                    ...context.newStudentData,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    required
                    name="city"
                    type="text"
                    placeholder="City"
                    value={context.newStudentData.city}
                    onChange={(e) =>
                      context.setnewStudentData({
                        ...context.newStudentData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    required
                    name="state"
                    type="text"
                    placeholder="State"
                    value={context.newStudentData.state}
                    onChange={(e) =>
                      context.setnewStudentData({
                        ...context.newStudentData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    required
                    name="country"
                    type="text"
                    placeholder="Country"
                    value={context.newStudentData.country}
                    onChange={(e) =>
                      context.setnewStudentData({
                        ...context.newStudentData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="modal-btn">
              <Link to="/studentsData">
                <Button
                  variant="secondary"
                  onClick={() => {
                    context.setnewStudentData(context.studentsInitialValue);
                  }}
                >
                  Back
                </Button>
              </Link>
              <Button
                variant="primary"
                id={context.newStudentData.id}
                onClick={(e) => {
                  if (
                    context.newStudentData.name !== "" &&
                    context.newStudentData.email !== "" &&
                    context.newStudentData.address !== "" &&
                    context.newStudentData.phoneno !== "" &&
                    context.newStudentData.city !== "" &&
                    context.newStudentData.state !== "" &&
                    context.newStudentData.country !== ""
                  ) {
                    // context.createOrEdit === "Create"
                    //   ? context.createUser()
                    //   : context.createUser(e.target.id);
                    context.createStudent(e.target.id);
                    nav("/studentsData");
                  } else {
                    alert("kindly fill all the Details");
                  }
                }}
              >
                {context.createstudent === "edit" ? "Update" : "Create"}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
