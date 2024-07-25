import React from "react";
import AdminHeader from "./AdminHeader";
import TableComp from "./TableComp";

function CodersAdmin() {
  const response = [
    {
      name: "test1 lastname",
      email: "test@test.com",
      mobile: 304445,
      class: "SE",
      department: "Computer",
      reciept: "mmmmm.com",
    },
    {
      name: "test12 lastname",
      email: "test@test.com",
      mobile: 304445,
      class: "SE",
      department: "Computer",
      reciept: "mmmmm.com",
    },
    {
      name: "test2 lastname",
      email: "test@test.com",
      mobile: 304445,
      class: "SE",
      department: "Computer",
      reciept: "mmmmm.com",
    },
    {
      name: "test3 lastname",
      email: "test@test.com",
      mobile: 304445,
      class: "SE",
      department: "Computer",
      reciept: "mmmmm.com",
    },
  ];
  return (
    <div>
      <AdminHeader user={"Coders Club"} />
      <TableComp user={"Coders club"} />
    </div>
  );
}

export default CodersAdmin;
