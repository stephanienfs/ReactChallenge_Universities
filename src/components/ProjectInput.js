import React, { useState } from 'react';

import { ActionButton, CancelButton } from './ui/Button';

function ProjectInput({ handleAddProjectClick }) {
  const [universityName, setUniversityName] = useState('');
  const [country, setCountry] = useState('');

  const handleInputUniversityNameChange = ({ target: { value } }) => setUniversityName(value);
  const handleInputCountryChange = ({ target: { value } }) => setCountry(value); 
 
  const handleLocalAddButtonClick = () => {
    handleAddProjectClick({ name, country });
    setProjectName('');
    setLocation('');
  };

  return (
    <>
      <label>University Name</label><br />
      <input value={name} onChange={handleInputUniversityNameChange} /><br />
      <label>Location</label><br />
      <input value={country} onChange={handleInputCountryChange} /><br />
      <ActionButton primary onClick={handleLocalAddButtonClick}>Add New Project</ActionButton><br />
      <CancelButton>Cancel Button</CancelButton><br />
    </>
  );
}

export default ProjectInput;