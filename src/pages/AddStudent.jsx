import { LinkBtn } from "./LinkBtn";
import axios from "axios";

export function AddStudent() {
  async function addNewStudent(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const body = {
      name: name,
      phone: phone,
      email: email,
    };
    if (!name || !phone || !email) {
      alert("FILL all");
      return;
    }
    try {
      await axios.post(`http://localhost:8080/student/`, body);
      const msg = document.getElementById("msg");
      msg.innerText = "Added";
      setTimeout(() => (msg.innerHTML = ""), 3000);
    } catch (err) {
      return [];
    }
  }

  return (
    <div>
      <div className="card">
        <h1>Submit Student</h1>
        <flex>
          <input id="name" name="name" placeholder="Enter Name" />
          <input id="email" name="email" placeholder="Enter Email" />
          <input id="phone" name="contact" placeholder="Enter Phone Number" />
          <button onClick={addNewStudent}>Submit Student</button>
          <LinkBtn link="/" text="Back"></LinkBtn>
        </flex>

        <br />
        <text id="msg"></text>
        <br />
      </div>
    </div>
  );
}
