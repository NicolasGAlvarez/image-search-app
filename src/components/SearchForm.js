import React from 'react';

const SearchForm = (props) => {
  const { formSubmitted, searchTermChanged, searchTerm } = props;
  return (
    <form onSubmit={formSubmitted}>
      <div className="row">
        <label
          className="twelve columns"
          htmlFor="searchTerm"
        >Search term</label>
      </div>

      <div className="row">
        <div className="nine columns">
          <input
            name="searchTerm"
            id="searchTerm"
            className="u-full-width"
            onChange={searchTermChanged}
            value={searchTerm}
          />
        </div>

        <div className="three columns">
          <button
            type="submit"
            className="button-primary u-full-width"
          >Search</button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;