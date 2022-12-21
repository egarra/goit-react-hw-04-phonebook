import { InputField } from './Filter.styled';

export const Filter = ({ onInputChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <InputField
        placeholder="Type contact"
        type="text"
        onChange={e => onInputChange(e.target.value)}
      />
    </>
  );
};
