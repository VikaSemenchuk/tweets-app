import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../loader/Loader";
import { ToastContainerEl } from "../toast/ToastContainer";
import { Container } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <ToastContainerEl />
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
