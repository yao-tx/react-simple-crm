import Api from "../helpers/Api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SearchCustomers() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [editModes, setEditModes] = useState({});

  useEffect(() => {
    Api.getAllCustomers()
      .then((res) => res.json())
      .then((customers) => {
        setData(customers);
      });
  }, []);

  useEffect(() => {
    refreshData();
  }, []);

  function deleteEntry(id) {
    Api.deleteCustomer(id)
      .then(() => refreshData());
  }

  function onEdit(id) {
    navigate(`/view/${id}`);
  }

  function onDelete(id) {
    deleteEntry(id);
  }

  function refreshData() {
    Api.getAllCustomers()
      .then((res) => res.json())
      .then((customers) => setData(customers));
  }

  function searchCustomer(name = "") {
    Api.searchCustomerByName(name)
      .then((res) => res.json())
      .then((customers) => setData(customers));
  }

  const rows = data.map((ele) => {
    return (
      <tr key={ele.id}>
        <td>{ele.id}</td>
        <td>{ele.name}</td>
        <td>{ele.gender}</td>
        <td>{ele.address}</td>
        <td>{ele.phone}</td>
        <td>
          <button
            className="btn btn-orange"
            onClick={() => {
              onEdit(ele.id);
            }}
          >
            Edit
          </button>{" "}
          <button
            className="btn btn-red"
            onClick={() => {
              if (window.confirm("Do you want to delete?")) {
                onDelete(ele.id);
              }
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => { searchCustomer(e.target.value); }}
          placeholder="Enter customer Name to search"
        />
        <br />
        <br />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchCustomers;