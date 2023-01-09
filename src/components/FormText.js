function FormText({ id, name, label, value, onChange }) {
  return (
    <div className="row">
      <div className="col-25">
        <label htmlFor="id">{label}</label>
      </div>
      <div className="col-75">
        <input id={id} name={name} value={value} onChange={onChange} />
      </div>
    </div>
  );
}

 export default FormText;