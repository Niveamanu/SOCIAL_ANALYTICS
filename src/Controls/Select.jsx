import React from "react";
import MultiSelect from "multiselect-react-dropdown";
import { useState } from "react";

const SelectControl = ({
  setFieldValue,
  options,
  timOptions,
  lifeoptions,
  timeoptions,
  ...item
}) => {
  return (
    <MultiSelect
      isObject={false}
      options={item.label == "LifeTime" ? options : timOptions}
      selectedValues={item.label == "LifeTime" ? lifeoptions : timeoptions}
      showCheckbox
      onRemove={(data) => {
        setFieldValue(`${item.name}`, data);
      }}
      onSelect={(data) => {
        setFieldValue(`${item.name}`, data);
      }}
    ></MultiSelect>
  );
};

export default SelectControl;
