import React from "react";

const Helmet = (prosp: {
  title: string;
  children: React.ReactNode;
}): JSX.Element => {
  document.title = "Url: " + prosp.title;
  return (
    <div className="w-100" style={{}}>
      {prosp.children}
    </div>
  );
};

export default Helmet;
