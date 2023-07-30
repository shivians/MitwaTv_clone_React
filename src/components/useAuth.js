const useAuth = () => {
  const auth = localStorage.getItem("Login");
  return auth;
};

export default useAuth;
