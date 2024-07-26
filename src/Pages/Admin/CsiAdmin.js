import React, { useState } from "react";
import AdminHeader from "./AdminHeader";
import TableComp from "./TableComp";
import { decodeToken } from "./Authenticated";

// const check = async () => {
//   const auth = await decodeToken();
//   return auth;
// };

function CsiAdmin() {
  const [user, setUser] = useState(null);
  const auth = decodeToken()
    .then((p) => {
      if (!p) {
        alert("Please Login");
        window.location.href = "http://localhost:3000/admin-login";
      } else if (p.user === "csi") {
        setUser("Computer Society Of India");
      } else if (p.user === "coders") {
        setUser("Coders Club");
      } else if (p.user === "main") {
        console.log("main user");
        setUser("DYPIEMR");
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .finally((p) => {
      console.log(p);
    });
  console.log(auth);

  return (
    <div>
      <AdminHeader user={user} />
      <TableComp user={user} />
    </div>
  );
}

export default CsiAdmin;
