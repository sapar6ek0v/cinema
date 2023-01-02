import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { SearchFormBtn, SearchFormInput, SearchFormWrapper } from './styles';

const SearchForm = ({ value, setValue, handleSubmit }) => {
  const handleOnChange = (event) => setValue(event.target.value.trim());

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <SearchFormWrapper onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
      <SearchFormInput
        onChange={handleOnChange}
        value={value}
        type="text"
        aria-label="search"
        placeholder="Search for a movie, TV Show or celebrity that you are looking for"
      />

      <SearchFormBtn type="submit" disabled={!value}>
        <FontAwesomeIcon icon={faSearch} />
      </SearchFormBtn>
    </SearchFormWrapper>
  );
};

export default SearchForm;
