import { Form } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { message } from "antd";
import { hideLoading, showLoading } from "../../redux/rootSlice";

function Login() {
  const [passType, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const passwordToggle = () => {
    if (passType === "password") {
      setType("text");
      setIcon(eye);
    } else {
      setType("password");
      setIcon(eyeOff);
    }
  };
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      //   console.log(values);
      const response = await axios.post("/api/admin/login", values);
      console.log(response);
      dispatch(hideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        // window.location.href = "http://localhost:3000/admin";
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error(error.message);
    }
  };
  return (
    <div className="flex justify-center bg-gray-900 items-center h-screen">
      <div className="w-96 flex gap-5 flex-col shadow border rounded-2xl border-gray-500 p-5 bg-slate-400">
        <h1 className="text-green-500 font-bold text-center text-2xl">
          DYP - Login
        </h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="username" label="Name :">
            <label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-3 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></input>
            </label>
          </Form.Item>
          <Form.Item name="email" label="Email :">
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-3 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </Form.Item>
          <Form.Item name="role" label="Role :">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-3 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </Form.Item>
          <Form.Item name="password" label="Password :">
            <label htmlFor="password">
              <div className="flex relative">
                {" "}
                <input
                  type={passType}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-3 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></input>
                <span onClick={() => passwordToggle()}>
                  <Icon
                    style={{ color: "black" }}
                    className="absolute right-3 py-2"
                    icon={icon}
                  ></Icon>
                </span>
              </div>
            </label>
          </Form.Item>
          <div className="flex justify-end w-full pt-8">
            <button
              className="text-white m-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              type="submit"
            >
              Login
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
