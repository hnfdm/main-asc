import React, { useState } from 'react';
import '@styles/node/elixir/ValidatorForm.css'; // Pastikan Anda mengimpor CSS

const ValidatorForm = ({ onUpdate }) => {
  const [moniker, setMoniker] = useState('moniker');
  const [keybaseId, setKeybaseId] = useState('keybase-id');
  const [details, setDetails] = useState('details');
  const [website, setWebsite] = useState('website');

  const handleUpdate = () => {
    onUpdate({ moniker, keybaseId, details, website });
  };

  return (
    <div className="validator-form">
      <input
        type="text"
        placeholder="moniker"
        value={moniker}
        onChange={(e) => { setMoniker(e.target.value); handleUpdate(); }}
      />
      <input
        type="text"
        placeholder="keybase-id"
        value={keybaseId}
        onChange={(e) => { setKeybaseId(e.target.value); handleUpdate(); }}
      />
      <input
        type="text"
        placeholder="details"
        value={details}
        onChange={(e) => { setDetails(e.target.value); handleUpdate(); }}
      />
      <input
        type="text"
        placeholder="your-website"
        value={website}
        onChange={(e) => { setWebsite(e.target.value); handleUpdate(); }}
      />
    </div>
  );
};

export default ValidatorForm;
