function FormSelect({ id, name, label, selectData, selectedValue, onChange }) {
  const options = selectData.map((value, index) => {
    return (
      <option key={index} value={value}>
        {value}
      </option>
    );
  });
  
  return (
    <div className="row">
      <div className="col-25">
        <label htmlFor={id}>{label}</label>
      </div>
      <div className="col-75">
        <select
          id={id}
          name={name}
          onChange={onChange}
          value={selectedValue}
        >
          {options}
        </select>
      </div>
    </div>
  );
}

export default FormSelect;