import './styles.css';

export const SearchInput = ({ searchValue, handleChange }) => {
  return (
    <input
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Search in posts"
    />
  )
}