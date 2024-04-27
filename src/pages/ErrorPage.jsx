import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <section
        className="error"
        style={{
          paddingTop: "160px",
          display: "grid",
          gap: "32px",
        }}
      >
        <h1>Error 404</h1>
        <h2>Page not found</h2>
        <p>
          The page you're trying to access does not exist.{" "}
          <NavLink to="https://lort.dev">Go back to home page.</NavLink>
        </p>
      </section>
    </>
  );
};

export default ErrorPage;
