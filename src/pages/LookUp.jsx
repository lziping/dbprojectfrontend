import { useState } from "react";
import { LinkBtn } from "./LinkBtn";
import axios from "axios";

export function LookUp() {
  const [output, setOutput] = useState();

  async function getStudentById(event) {
    event.preventDefault();

    const id = document.getElementById("id").value;

    if (id === "") {
      const msg = document.getElementById("msg");
      msg.innerText = "Enter Student Id";
      setTimeout(() => (msg.innerHTML = ""), 3000);
    }
    if (isNaN(id)) {
      document.getElementById("id").focus();
      alert("Student ID only");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8080/student/${id}`);
      const data = response.data;
      setOutput({
        id: data.id,
        name: data.name,
        introduce: data.introduce,
        img: data.img_path,
        email: data.email,
        phone: data.phone,
        skill: data.skillname,
        certificate: data.certificatename,
        school: data.schoolname,
      });
    } catch (err) {
      return [];
    }
  }
  async function DeleteStudent(id) {
    await axios.delete(`http://localhost:8080/student/${id}`);
    window.location.reload();
  }
  async function getAllStudent(event) {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8080/student/`);

      const res = [];
      response.data.forEach((data) => {
        res.push({
          id: data.id,
          name: data.name,
          introduce: data.introduce,
          img: data.img_path,
          email: data.email,
          phone: data.phone,
          skill: data.skillname,
          certificate: data.certificatename,
          school: data.schoolname,
        });
      });
      setOutput(res);
    } catch (err) {
      return [];
    }
  }

  return (
    <div>
      <div className="card">
        <h1>Get Student Details</h1>
        <br />
        <flex>
          <input id="id" name="id" placeholder="Enter Student ID Number" />
          <button onClick={getAllStudent}>All Student</button>
          <button onClick={getStudentById}>Get Student Details</button>
          <LinkBtn text="Back" link="/"></LinkBtn>
        </flex>
        {output ? (
          Array.isArray(output) ? (
            output.map((output) => {
              return (
                <div>
                  <div>
                    <flex>
                      <h3>Student Id : {output.id}</h3>
                      <h3>Student Name : {output.name}</h3>
                      <h3>Introduce : {output.introduce}</h3>
                      <h3>Email :{output.email}</h3>
                      <h3>Phone : {output.phone} </h3>
                      <h3>School : {output.school} </h3>
                      <h3>Top Skill : {output.skill} </h3>
                      <h3>Latest Certificate : {output.certificate} </h3>
                      <LinkBtn
                        text="Update Student"
                        link={`/update/${output.id}`}
                      />
                      <button
                        onClick={() => {
                          DeleteStudent(output.id);
                        }}
                      >
                        Delete Student
                      </button>
                    </flex>
                    <img src={output.img} style={{ maxHeight: "15vh" }}></img>
                  </div>
                </div>
              );
            })
          ) : document.getElementById("id").value !== "" ? (
            <div>
              <div>
                <flex>
                  <h3>Student Id : {output.id}</h3>
                  <h3>Student Name : {output.name}</h3>
                  <h3>Introduce : {output.introduce}</h3>
                  <h3>Email :{output.email}</h3>
                  <h3>Phone : {output.phone} </h3>
                  <h3>School : {output.school} </h3>
                  <h3>Top Skill : {output.skill} </h3>
                  <h3>Latest Certificate : {output.certificate} </h3>
                  <LinkBtn
                    text="Update Student"
                    link={`/update/${output.id}`}
                  />
                  <button
                    onClick={() => {
                      DeleteStudent(output.id);
                    }}
                  >
                    Delete Student
                  </button>
                </flex>
                <img src={output.img} style={{ maxHeight: "15vh" }}></img>
              </div>
            </div>
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
        <br /> <text id="msg"></text>
        <br />
      </div>
    </div>
  );
}
