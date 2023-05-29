import React from "react";
import Tombol from "./Tombol"
import KotakTeks from "./KotakTeks";

function Login() {
  return (
    <>
      <KotakTeks teks="Email" />
      <KotakTeks teks="Password" />
      <Tombol teks="Login" />
    </>
  );
}

export default Login;