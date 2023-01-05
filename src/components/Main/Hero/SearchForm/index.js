import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

import { SearchFormBtn, SearchFormInput, SearchFormWrapper } from './styles';

const SearchForm = ({ value, setValue, handleSubmit }) => {
  const { t } = useTranslation();

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
        placeholder={t('dashboard.inputPlaceholder')}
      />

      <SearchFormBtn type="submit" disabled={!value}>
        <FontAwesomeIcon icon={faSearch} />
      </SearchFormBtn>
    </SearchFormWrapper>
  );
};

export default SearchForm;
