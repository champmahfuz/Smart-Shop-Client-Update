import { useEffect, useState } from "react";

const useEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://smart-shop-server-update.onrender.com/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  return employees;
};

export default useEmployees;
