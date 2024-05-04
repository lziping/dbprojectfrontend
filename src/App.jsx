import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddStudent } from "./pages/AddStudent";
import { LookUp } from "./pages/LookUp";
import { UpdateStudent } from "./pages/UpdateStudent";
import { Outlet } from "react-router-dom";
import { LinkBtn } from "./pages/LinkBtn";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route
            index
            element={
              <div>
                <div className={"card"}>
                  <h1>NYU Student System</h1>
                  <img
                    src={
                      "https://images.unsplash.com/photo-1621438681255-838765fce783?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    width={"400px"}
                    style={{ borderRadius: "15px" }}
                  />
                  <br />
                  <br />
                  <LinkBtn link="/new-student" text="Add Student"></LinkBtn>
                  <LinkBtn link="/student" text="Look Up Student"></LinkBtn>
                </div>
              </div>
            }
          />
          <Route path={"new-student"} element={<AddStudent />} />
          <Route path={"student"} element={<LookUp />} />
          <Route path={"update/:id"} element={<UpdateStudent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
