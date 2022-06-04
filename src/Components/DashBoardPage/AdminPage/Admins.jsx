import React, { useEffect, useState } from "react";
import AdminListCard from "./AdminListCard";

const Admins = () => {
  const [adminInfo, setAdminInfo] = useState([]);
  console.log("adminInfo", adminInfo);
  useEffect(() => {
    fetch("https://polar-eyrie-50368.herokuapp.com/allAdmin")
      .then((res) => res.json())
      .then((data) => {
        setAdminInfo(data);
      });
  }, []);
  return (
    <div>
      <div className="text-center">
        <h3>General Admin</h3>
        <p>Here is our general Admins</p>
      </div>
      <div className="table-responsive mx-2">
        <table className="table bg-white text-center">
          <thead className="bg-dark text-white">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">E-Mail</th>
              <th scope="col">Birthday</th>
            </tr>
          </thead>
          <tbody>
            {adminInfo.map((data, index) => (
              <AdminListCard data={data} i={index + 1} key={Math.random()} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admins;
