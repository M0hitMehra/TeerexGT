import React from "react";
import { FilterItem } from ".";

const MobileFilter = ({ handleFilter }) => {
  return (
    <div className="m_filter_block view_on_small_screen">
      <div className="m_filter_box">
        <div className="m_filter_box_container">
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

export default MobileFilter;
