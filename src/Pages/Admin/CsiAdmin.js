import React, { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader";
import TableComp from "./TableComp";
import { decodeToken } from "./Authenticated";
import { hideLoading, showLoading } from "../../redux/rootSlice";
import { useDispatch } from "react-redux";

// const check = async () => {
//   const auth = await decodeToken();
//   return auth;
// };

function CsiAdmin() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const p = await decodeToken();
        console.log(p);
        setLoading(true);
        dispatch(showLoading());
        // if (!p) {
        //   alert("Please Login");
        //   window.location.href = "http://localhost:3000/admin-login";
        // }
        if (p.role === "csi") {
          setUser("Computer Society Of India");
        } else if (p.role === "coders") {
          setUser("Coders Club");
        } else if (p.role === "main") {
          setUser("DYPIEMR");
        }
        console.log("p set success");
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
        dispatch(hideLoading());
      }
    };

    fetchData();
  }, [dispatch]);
  if (!loading) {
    return (
      <div>
        <AdminHeader user={user} />
        <TableComp user={user} />
      </div>
    );
  }
}

export default CsiAdmin;
