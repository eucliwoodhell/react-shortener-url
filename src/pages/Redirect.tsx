import React from "react";
import { useParams } from "react-router-dom";
import { useGetRedirectQuery } from "../store/home/link.api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Content from "../components/UI/content";

const Redirect = () => {
  const { handle } = useParams();
  const navigate = useNavigate();
  const { isSuccess, isError, data, error } = useGetRedirectQuery(
    encodeURIComponent(handle || "")
  );

  useEffect(() => {
    if (isSuccess && data) {
      window.location.href = data.url;
    } else if (isSuccess && !data) {
      navigate("/");
    } else if (isError) {
      navigate("/");
    }
  }, [data, isError, isSuccess, navigate]);

  return (
    <div style={{ height: "100vh" }}>
      {isError && (
        <>
          {error}
          <Content title="404 - Page Not Found" />
        </>
      )}
    </div>
  );
};

export default Redirect;
