import { useEffect, useState } from "react";

import Context from "../Context/Context";

export default function Provider(props) {
  let studentsInitialValue = {
    name: "",
    email: "",
    phoneno: "",
    department: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    id: "",
    teacher: ""
  };
  let teachersInitialValue = {
    name: "",
    email: "",
    phoneno: "",
    department: "",
    salary: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    id: ""
  };
  const [studentData, setStudentData] = useState(studentsInitialValue);
  const [newStudentData, setnewStudentData] = useState(studentsInitialValue);
  const [createstudent, setcreatestudent] = useState("");
  const [teacherData, setteacherData] = useState(studentsInitialValue);
  const [newteacherData, setnewteacherData] = useState(studentsInitialValue);
  const [createteacher, setcreateteacher] = useState("");

  const getstudentData = () => {
    fetch("https://649c087004807571923757eb.mockapi.io/Users")
      .then((data) => data.json())
      .then((res) => {
        setStudentData(res);
      });
  };

  useEffect(() => {
    getstudentData();
  }, []);

  const handleDeleteStudent = (id) => {
    fetch("https://649c087004807571923757eb.mockapi.io/Users/" + id, {
      method: "DELETE"
    })
      .then((data) => data.json())
      .then((res) => {
        getstudentData();
      });
  };

  const createStudent = (id) => {
    if (id) {
      fetch("https://649c087004807571923757eb.mockapi.io/Users/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newStudentData)
      }).then((res) => {
        setnewStudentData(studentsInitialValue);
        getstudentData();
      });
    } else {
      fetch("https://649c087004807571923757eb.mockapi.io/Users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newStudentData)
      }).then((res) => {
        setnewStudentData(studentsInitialValue);
        getstudentData();
      });
    }
  };

  const getstudentById = (id) => {
    let index = studentData.findIndex((value) => value.id === id);
    setnewStudentData(studentData[index]);
  };

  const getteacherData = () => {
    fetch("https://649c087004807571923757eb.mockapi.io/Users")
      .then((data) => data.json())
      .then((res) => {
        setteacherData(res);
      });
  };

  useEffect(() => {
    getteacherData();
  }, []);

  const handleDeleteteacher = (id) => {
    fetch("https://649c087004807571923757eb.mockapi.io/Users/" + id, {
      method: "DELETE"
    })
      .then((data) => data.json())
      .then((res) => {
        getteacherData();
      });
  };

  const createTeacher = (id) => {
    if (id) {
      fetch("https://649c087004807571923757eb.mockapi.io/Users/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newteacherData)
      }).then((res) => {
        setnewteacherData(teachersInitialValue);
        getteacherData();
      });
    } else {
      fetch("https://649c087004807571923757eb.mockapi.io/Users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newteacherData)
      }).then((res) => {
        setnewteacherData(teachersInitialValue);
        getteacherData();
      });
    }
  };

  const getteacherById = (id) => {
    let index = teacherData.findIndex((value) => value.id === id);
    setnewteacherData(teacherData[index]);
  };

  return (
    <Context.Provider
      value={{
        studentsInitialValue,
        teachersInitialValue,
        newStudentData,
        setnewStudentData,
        studentData,
        setStudentData,
        createStudent,
        getstudentById,
        handleDeleteStudent,
        createstudent,
        setcreatestudent,
        createteacher,
        setcreateteacher,
        newteacherData,
        setnewteacherData,
        teacherData,
        setteacherData,
        getteacherById,
        createTeacher,
        handleDeleteteacher,
        getteacherData
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
