import s from './SearchBox.module.css';

const SearchBox = ({ handleFilter }) => {
  return (
    <div className={s.search_wrapper}>
      <label htmlFor="search">Find contact by name:</label>
      <input
        type="text"
        id="search"
        onChange={handleFilter}
        className={s.search_input}
      />
    </div>
  );
};

export default SearchBox;
