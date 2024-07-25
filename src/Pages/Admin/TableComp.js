import React from "react";

function TableComp(props) {
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
      <div className="mb-10">
        <h1 className="text-center text-teal-400">
          Here are your clubs total registration :{" "}
        </h1>
        <div className="flex justify-center mt-5">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-gray-900">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead class="text-xs bg-gray-50 text-gray-700">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Sr.No.
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Student Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Class
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Department
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email id
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Mobile
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Reciept
                  </th>
                </tr>
              </thead>
              <tbody>
                {response.map((rec, index) => (
                  <tr
                    key={index}
                    className="odd:bg-white even:bg-gray-50 border-b border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap text-gray-900"
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{rec.name}</td>
                    <td className="px-6 py-4">{rec.class}</td>
                    <td className="px-6 py-4">{rec.department}</td>
                    <td className="px-6 py-4">{rec.email}</td>
                    <td className="px-6 py-4">{rec.mobile}</td>
                    <td className="px-6 py-4">
                      <a
                        href={rec.reciept}
                        className="font-medium text-blue-500 hover:underline"
                      >
                        Receipt
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableComp;
