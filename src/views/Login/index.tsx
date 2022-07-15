import React from "react";
// LOGIN
import Login1 from "src/components/layouts/Login/Login-1";
import Login2 from "src/components/layouts/Login/LOGIN2/Login-2";
import Login22 from "src/components/layouts/Login/LOGIN2/Login-2.2";
import Login3 from "src/components/layouts/Login/LOGIN3/Login-3";
import Login31 from "src/components/layouts/Login/LOGIN3/Login-3.1";
import Login4 from "src/components/layouts/Login/LOGIN4/Login-4";
import Login41 from "src/components/layouts/Login/LOGIN4/Login-4.1";
import Login5 from "src/components/layouts/Login/LOGIN4/Login-5";
import Login51 from "src/components/layouts/Login/LOGIN4/Login-5.1";
import Login6 from "src/components/layouts/Login/Login-6";

interface IProps {
  id: number;
}

export default function Home({ id }: IProps) {
  const renderLayout = () => {
    if (id === 1) {
      return <Login1 />;
    } else if (id === 2) {
      return <Login2 />;
    } else if (id === 3) {
      return <Login22 />;
    } else if (id === 4) {
      return <Login3 />;
    } else if (id === 5) {
      return <Login31 />;
    } else if (id === 6) {
      return <Login4 />;
    } else if (id === 7) {
      return <Login41 />;
    } else if (id === 8) {
      return <Login5 />;
    } else if (id === 9) {
      return <Login51 />;
    } else {
      return <Login6 />;
    }
  };

  return <>{renderLayout()}</>;
}
