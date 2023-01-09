import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormSelect from "../components/FormSelect";
import FormText from "../components/FormText";
import Api from "../helpers/Api";

function ManageCustomer() {
  const { id = 0 } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const buttonLabel = id === 0 ? "Add" : "Edit";

  useEffect(() => {
    if (id !== 0) {
      Api.getCustomer(id)
        .then((res) => res.json())
        .then((customer) => {
          setName(customer.name);
          setGender(customer.gender);
          setAddress(customer.address);
          setPhone(customer.phone);
        });
    } else {
      setName("");
      setGender("Male");
      setAddress("");
      setPhone("");
    }
  }, [id]);

  function addNewEntry(customer) {
    Api.addCustomer(customer)
      .then(() => {
        navigate("/customers");
      });
  }

  function editEntry(id, customer) {
    Api.editCustomer(id, customer)
      .then(() => { 
        navigate("/customers");
      });
  }
 
  function validate() {
    if (name.trim().length <= 0) {
      alert("Please enter a name");
      return false;
    }

    return true;
  }

  function handleAddEditAction(e) {
    e.preventDefault();

    if (validate()) {
      if (id === 0) {
        addNewEntry({name, gender, phone, address});
      } else {
        editEntry(id, {name, gender, phone, address});
      }
    }
  }

  const genders = ["Male", "Female"];

  return (
    <div className="form-container">
      <form onSubmit={handleAddEditAction}>
        <FormText
          id="input-name"
          name="name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value) }
        />
        <FormSelect
          id="select-gender"
          name="gender"
          label="Gender"
          selectData={genders}
          selectedValue={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <FormText
          id="input-address"
          name="address"
          label="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value) }
        />
        <FormText
          id="input-phone"
          name="phone"
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value) }
        />
        <div className="row align-right">
          <input
            type="submit" value={buttonLabel}
            className="btn btn-blue"
          />
        </div>
      </form>
    </div>
  );
}

export default ManageCustomer;