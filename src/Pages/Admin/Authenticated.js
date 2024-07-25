import { jwtDecode } from "jwt-decode";
// import { jwt } from "jsonwebtoken";

export const decodeToken = async () => {
  const token = await document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    .split("=")[1];
  // console.log("Token is ");
  // console.log(token);
  if (!token) {
    return null;
  }

  try {
    const decoded = await jwtDecode(token);
    // console.log(decoded);
    return decoded;
  } catch (err) {
    console.error("Failed to decode token", err);
    return null;
  }
};
