import React from "react";

const Filter = ({ filter, handleFilter }) => {
  return (
    <div className="filter_block">
      <div className="filter_box">
        <div className="filter_box_container">
          <FilterItem
            label="color"
            handleChange={handleFilter}
            options={["Red", "Blue", "Green"]}
          />
          <FilterItem
            label="gender"
            handleChange={handleFilter}
            options={["Men", "Women"]}
          />
          <FilterItem
            label="price"
            handleChange={handleFilter}
            options={["0-250", "251-450", "450+ "]}
          />
          <FilterItem
            label="type"
            handleChange={handleFilter}
            options={["Polo", "Hoodie", "Basic"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;

export const FilterItem = ({ label, options, handleChange }) => {
  const onChangeFilter = (e) => {
    let { id, checked } = e.target;
    handleChange({ name: label, value: id, isCheck: checked });
  };
  return (
    <div className="filter_item">
      <div className="filter_item_title">{label}</div>
      <div className="filter_item_options">
        {options.map((option, index) => {
          return (
            <div className="filter_item_option" key={index}>
              <input
                type="checkbox"
                key={index}
                id={`${option}`}
                onChange={onChangeFilter}
              />
              <label className="filter_item_option_label" htmlFor={`${option}`}>
                {option}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
