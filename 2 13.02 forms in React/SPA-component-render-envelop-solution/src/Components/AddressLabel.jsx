import '../CSS/AddressLabel.css';

function AddressLabel({ person }) {
  return (
    <div className="person">
      <p className="full-name">{person.fullName}</p>
      <p className="address">{person.address}</p>
      <p className="state-city-zip">
        {person.cityStateZip}
      </p>
    </div>
  );
}

export default AddressLabel;
