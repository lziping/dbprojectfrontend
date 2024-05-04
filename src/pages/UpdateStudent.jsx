import { useState } from "react";
import { useParams } from "react-router-dom";
import { LinkBtn } from "./LinkBtn";
import axios from "axios";

export function UpdateStudent() {
  const { id } = useParams();

  async function updateStudentInfo(event) {
    event.preventDefault();

    const currDetailResponse = await axios.get(
      `http://localhost:8080/student/${id}`
    );
    const currDetail = currDetailResponse.data;
    const body = {
      name:
        document.getElementById("name").value === ""
          ? currDetail.name
          : document.getElementById("name").value,
      email:
        document.getElementById("email").value === ""
          ? currDetail.email
          : document.getElementById("email").value,
      phone:
        document.getElementById("phone").value === ""
          ? currDetail.phone
          : document.getElementById("phone").value,
      introduce:
        document.getElementById("introduce").value === ""
          ? currDetail.introduce
          : document.getElementById("introduce").value,
      img_path:
        document.getElementById("img_path").value === ""
          ? currDetail.img_path
          : document.getElementById("img_path").value,
      schoolname:
        document.getElementById("school").value === ""
          ? currDetail.schoolname
          : document.getElementById("school").value,
      skillname:
        document.getElementById("skill").value === ""
          ? currDetail.skillname
          : document.getElementById("skill").value,
      certificatename:
        document.getElementById("certificate").value === ""
          ? currDetail.certificatename
          : document.getElementById("certificate").value,
    };

    try {
      await axios.put(`http://localhost:8080/student/${id}`, body);
      const msg = document.getElementById("msg");
      msg.innerText = "Updated";
      setTimeout(() => (msg.innerHTML = ""), 3000);
    } catch (err) {
      return [];
    }
  }

  return (
    <div>
      <div className="card">
        <h1>Update Student Details</h1>
        <flex>
          <input id="name" placeholder="Enter Name" />
          <input id="email" placeholder="Enter Email" />
          <input id="phone" placeholder="Enter Phone" />
          <input id="introduce" placeholder="Enter Student's Intro" />
          <input id="img_path" placeholder="Enter Image - URL only" />
          <input id="school" placeholder="Entter Current School" />
          <input id="skill" placeholder="Enter Top Skill" />
          <input id="certificate" placeholder="Enter latest Certificate" />
          <button onClick={updateStudentInfo}>Update Student Details</button>
          <LinkBtn link="/student" text="Back To Student Look Up"></LinkBtn>
        </flex>
        <br /> <text id="msg"></text>
        <br />
      </div>
    </div>
  );
}
