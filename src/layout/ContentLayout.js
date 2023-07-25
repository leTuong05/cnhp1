import { Outlet } from "react-router-dom";

function ContentLayout() {
  return (
    <div
      style={{
        margin: "auto",
        paddingLeft: 0,
        paddingRight: 0,
        width: "1200px",
      }}
    >
      <Outlet />
    </div>
  );
}

export default ContentLayout;
