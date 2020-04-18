import React from "react";
import ReactDom from "react-dom";

const Info = (props) => {
  return <div>this is Info component : {props.info}</div>;
};

const withAdminWarning = (WrappingComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>Wrapped Component:</p>}
      <WrappingComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappingComponent) => {
  return (props) => (
    <div>
      <h1>requireAuthentication wrapping component</h1>
      {props.isAuthenticated ? <WrappingComponent {...props} /> : <p>Log in</p>}
    </div>
  );
};
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDom.render(
//   <AdminInfo isAdmin={true} info="info component props pass correct" />,
//   document.getElementById("app")
// );

ReactDom.render(
  <AuthInfo isAuthenticated={true} info="info component props pass correct" />,
  document.getElementById("app")
);
