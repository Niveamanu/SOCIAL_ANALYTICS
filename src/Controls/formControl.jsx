import React from "react";

import { data } from "../data";

import { HiChevronUp, HiChevronDown } from "react-icons/hi";

import { useState } from "react";

import { Form } from "formik";

import { useGlobalContext } from "../GlobalContext/context";

import TextControl from "../Controls/Text";

import SelectControl from "../Controls/Select";

import DateControl from "../Controls/Date";

import BtnControl from "../Controls/buttonControl";

const Formcomponent = ({ setFieldValue, values }) => {
  const {
    currentItem,

    options,

    timOptions,

    lifeoptions,

    timeoptions,

    uniqueheader,

    uniqueParamsLen,

    setSubmitBtnName,
  } = useGlobalContext();

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) return setSelected(null);

    setSelected(i);
  };

  return (
    <>
      <Form>
        <div>
          {uniqueheader.map((items, i) => {
            if (uniqueParamsLen[i] > 0) {
              return (
                <section className="question" key={i}>
                  <div className="title" onClick={() => toggle(i)}>
                    <h4 className="hd-btn">{items}</h4>

                    <span>
                      {selected === i ? (
                        <HiChevronUp></HiChevronUp>
                      ) : (
                        <HiChevronDown></HiChevronDown>
                      )}
                    </span>
                  </div>

                  <div
                    key={i}
                    className={selected === i ? "content show" : "content"}
                  >
                    {data

                      .filter(
                        (item) =>
                          item.header == items &&
                          item.stream.includes(currentItem)
                      )

                      .map((filteredlist, i) => (
                        <div className="form-row header" key={i}>
                          <label
                            htmlFor={filteredlist.name}
                            className="form-label"
                          >
                            {filteredlist.label}
                          </label>

                          {filteredlist.type == "date" && (
                            <DateControl
                              id={filteredlist.id}
                              values={values}
                              setFieldValue={setFieldValue}
                              {...filteredlist}
                            />
                          )}

                          {(filteredlist.type == "url" ||
                            filteredlist.type == "text") && (
                            <TextControl {...filteredlist} />
                          )}

                          {filteredlist.type == "select" && (
                            <SelectControl
                              {...filteredlist}
                              setFieldValue={setFieldValue}
                              options={options}
                              timOptions={timOptions}
                              lifeoptions={lifeoptions}
                              timeoptions={timeoptions}
                            />
                          )}
                        </div>
                      ))}
                  </div>
                </section>
              );
            } else return null;
          })}
        </div>
        <BtnControl setSubmitBtnName={setSubmitBtnName} />
      </Form>
    </>
  );
};

export default Formcomponent;
