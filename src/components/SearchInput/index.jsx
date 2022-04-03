import P from 'prop-types';
import './styles.css';

export const SearchInput = ({ searchValue, handleChange }) => {
  return <input onChange={handleChange} value={searchValue} type="search" placeholder="Search in posts" />;
};

SearchInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
