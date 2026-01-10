import { Navigate } from "react-router";

function RouteGuard({ currentPage, children }) {
  const introduction = sessionStorage.getItem("welcome");
  const experience = sessionStorage.getItem("experience");
  console.log(introduction);
  console.log(experience);
  if (introduction !== currentPage && experience !== currentPage) {
    return <Navigate to="/" replace />;
  }
  return children;
}
export default RouteGuard;
