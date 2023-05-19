import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import Loader from "../loader/Loader";
import { ToastContainerEl } from "../toast/ToastContainer";
import { Header } from "./header/Header";
import { Container } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <ToastContainerEl />
      {/* <Link to="/tweets">Tweets</Link> */}
<Header/>
      <Suspense fallback={<Loader />}>
        <main>
          <Container>
            <Outlet />
          </Container>
        </main>
      </Suspense>
    </>
  );
};

export default Layout;
