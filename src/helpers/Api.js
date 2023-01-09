const SERVER_PREFIX = "http://localhost:3001";

const Api = {
  addCustomer(customer) {
    const {name, gender, address, phone} = customer;

    return fetch(`${SERVER_PREFIX}/customers`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, gender, address, phone }),
      method: "POST",
    });
  },
  editCustomer(id, customer) {
    const {name, gender, address, phone} = customer;

    return fetch(`${SERVER_PREFIX}/customers/${id}`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, name, gender, address, phone }),
      method: "PUT",
    });
  },
  deleteCustomer(id) {
    return fetch(`http://localhost:3001/customers/${id}`, {
      method: "DELETE",
    });
  },
  getAllCustomers() {
    return fetch("http://localhost:3001/customers");
  },
  getCustomer(id) {
    return fetch(`http://localhost:3001/customers/${id}`);
  },
  searchCustomerByName(name) {
    return fetch(`http://localhost:3001/customers?name_like=${name}`);
  },
};

export default Api;