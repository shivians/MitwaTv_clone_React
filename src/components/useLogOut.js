import Swal from "sweetalert2";

const useLogOut = () => {
  const logOut = localStorage.removeItem("Login");
  Swal.fire("success!", "LogOut successfully");

  window.location.href = "/";
  return logOut;
};

export default useLogOut;
