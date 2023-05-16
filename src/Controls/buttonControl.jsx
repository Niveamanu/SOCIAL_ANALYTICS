import React from "react";

import { Formik } from "formik";

const BtnControl = ({ setSubmitBtnName }) => {
  return (
    <div className="buttonContainer">
      <button
        type="submit"
        className="btn"
        name="save"
        onClick={(e) => setSubmitBtnName(e.target.name)}
        onSubmit={Formik.onSubmit}
      >
        save data
      </button>

      <button
        type="submit"
        name="generate"
        className="btn"
        onClick={(e) => setSubmitBtnName(e.target.name)}
        onSubmit={Formik.onSubmit}
      >
        generate JSON
      </button>
    </div>
  );
};

export default BtnControl;
