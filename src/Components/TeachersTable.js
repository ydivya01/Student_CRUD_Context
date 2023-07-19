import { useContext } from "react";
import Context from "./Context/Context";
import { useNavigate } from "react-router-dom";

import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TeachersTable() {
  const nav = useNavigate();
  const context = useContext(Context);

  return (
    <>
      <div className="">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row title-row">
              <div className="">
                <h2>
                  {context.createteacher === "edit" ? "Edit" : "Create"}{" "}
                  <b style={{ display: "block" }}>Teachers Data</b>
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
                    placeholder="Enter teacher Name"
                    value={context.newteacherData.name}
                    onChange={(e) =>
                      context.setnewteacherData({
                        ...context.newteacherData,
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
                placeholder="Enter teacher Email"
                value={context.newteacherData.email}
                onChange={(e) =>
                  context.setnewteacherData({
                    ...context.newteacherData,
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
                placeholder="Enter teacher Phone No"
                value={context.newteacherData.phoneno}
                onChange={(e) =>
                  context.setnewteacherData({
                    ...context.newteacherData,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Row
              className="genderinForm"
              onChange={(e) =>
                context.setnewteacherData({
                  ...context.newteacherData,
                  gender: e.target.value,
                })
              }
            >
              <div>
                <Form.Label className="genderHeading">Gender</Form.Label>
              </div>
              <div>
                <Form.Group>
                  <Form.Check
                    type="radio"
                    id="default-radio"
                    label="Male "
                    value="male"
                    name="gender"
                    checked={
                      context.newteacherData.gender === "male" ? true : false
                    }
                  />
                </Form.Group>
              </div>
              <div>
                <Form.Group>
                  <Form.Check
                    type="radio"
                    id="default-radio"
                    label="Female"
                    value="female"
                    name="gender"
                    checked={
                      context.newteacherData.gender === "female" ? true : false
                    }
                  />
                </Form.Group>
              </div>
              <div>
                <Form.Group>
                  <Form.Check
                    type="radio"
                    id="default-radio"
                    label="Others"
                    value="others"
                    name="gender"
                    checked={
                      context.newteacherData.gender === "others" ? true : false
                    }
                  />
                </Form.Group>
              </div>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Department</Form.Label>
                  <Form.Control
                    required
                    name="department"
                    type="text"
                    placeholder="Enter Department"
                    value={context.newteacherData.department}
                    onChange={(e) =>
                      context.setnewteacherData({
                        ...context.newteacherData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Salary</Form.Label>
                  <Form.Control
                    required
                    name="salary"
                    type="text"
                    placeholder="Enter Salary in $"
                    value={context.newteacherData.salary}
                    onChange={(e) =>
                      context.setnewteacherData({
                        ...context.newteacherData,
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
                value={context.newteacherData.address}
                onChange={(e) =>
                  context.setnewteacherData({
                    ...context.newteacherData,
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
                    value={context.newteacherData.city}
                    onChange={(e) =>
                      context.setnewteacherData({
                        ...context.newteacherData,
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
                    value={context.newteacherData.state}
                    onChange={(e) =>
                      context.setnewteacherData({
                        ...context.newteacherData,
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
                    value={context.newteacherData.country}
                    onChange={(e) =>
                      context.setnewteacherData({
                        ...context.newteacherData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="modal-btn">
              <Link to="/teachersData">
                <Button
                  variant="secondary"
                  onClick={() => {
                    context.setnewteacherData(context.teachersInitialValue);
                  }}
                >
                  Back
                </Button>
              </Link>
              <Button
                variant="primary"
                id={context.newteacherData.id}
                onClick={(e) => {
                  if (
                    context.newteacherData.name !== "" &&
                    context.newteacherData.email !== "" &&
                    context.newteacherData.address !== "" &&
                    context.newteacherData.phoneno !== "" &&
                    context.newteacherData.city !== "" &&
                    context.newteacherData.state !== "" &&
                    context.newteacherData.country !== ""
                  ) {
                    context.createTeacher(e.target.id);
                    nav("/teachersData");
                  } else {
                    alert("kindly fill all the Details");
                  }
                }}
              >
                {context.createteacher === "edit" ? "Update" : "Create"}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
