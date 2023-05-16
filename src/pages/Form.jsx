import React from "react";
import { data, endpoint } from "../data";
import { useState, useEffect } from "react";
import { Formik } from "formik";
import { useGlobalContext } from "../GlobalContext/context";
import { toast } from "react-toastify";
import { _ } from "lodash";
import Formcomponent from "../Controls/formControl";

const DynamicForm = () => {
  const {
    currentItem,

    uniqueStream,

    uniqueheader,

    setOptions,

    setTimOptions,

    settimeoptions,

    setlifeoptions,

    time,

    life,

    options,

    timOptions,

    submitBtnName,
    uniqueParamsLen,
  } = useGlobalContext();

  const [initval, setinitval] = useState([]);
  const [jsonfile, setjsonfile] = useState([]);
  let [comJsonFile, setComJsonFile] = useState([]);
  const finalObj = {};

  let arr = [];

  {
    data.map((item) => {
      arr.push({ [item.name]: item.initial?.[currentItem] });
    });
  }

  arr.map((item) => {
    Object.assign(finalObj, item);
  });
  let [field, setfield] = useState(finalObj);
  useEffect(() => {
    let x = [];
    let y = [];

    data

      .filter((item) => item.type == "select")

      .map((i) => {
        endpoint

          .filter((item) => item.type == i.label && item.stream == currentItem)

          .map((filterdata) => {
            if (filterdata.type == "LifeTime") {
              x.push(filterdata.label);
            } else {
              y.push(filterdata.label);
            }
          });
      });

    setOptions(x);

    setTimOptions(y);
  }, [currentItem]);

  useEffect(
    () => {
      const index = uniqueStream.indexOf(currentItem);

      if (initval[index] === undefined) setfield(finalObj);
      else setfield(initval[index]);

      if (time[index] == undefined) {
        settimeoptions([]);
      } else settimeoptions(time[index]);
      if (life[index] == undefined) setlifeoptions([]);
      else setlifeoptions(life[index]);
    },
    [currentItem],
    []
  );

  const getValues = (values) => {
    var sorted = {};

    for (var i = 0, max = data.length; i < max; i++) {
      if (sorted[data[i].header] == undefined) {
        sorted[data[i].header] = [];
      }

      sorted[data[i].header].push(data[i].name);
    }

    let obj2;

    if (uniqueParamsLen[0] > 0) {
      obj2 = { ...obj2, credential: {} };
    }
    if (uniqueParamsLen[1] > 0) {
      obj2 = { ...obj2, parameter: {} };
    }
    if (uniqueParamsLen[2] > 0) {
      obj2 = { ...obj2, path: {} };
    }
    if (uniqueParamsLen[3] > 0) {
      obj2 = { ...obj2, endpoint: {} };
    }

    {
      uniqueheader.map((items, i) => {
        const array = sorted[items];

        const obj = values;

        function picker(array, obj) {
          return array.reduce(function (newObj, key) {
            if (key in obj) newObj[key] = obj[key];

            {
              if (items == "credentials") {
                if (obj2?.credential) obj2.credential = newObj;

                return newObj;
              }

              if (items == "parameters") {
                if (obj2?.parameter) obj2.parameter = newObj;

                return newObj;
              }

              let final_arr = [];

              let concat_string = "";

              if (items == "path") {
                if (obj2?.path) obj2.path = newObj;

                return newObj;
              }

              if (items == "Endpoint") {
                for (let i in values) {
                  if (i == "life_time" || i == "time_bound") {
                    let val = values[i];

                    for (let j in val) {
                      for (let k in endpoint) {
                        if (
                          val[j] == endpoint[k].label &&
                          currentItem == endpoint[k].stream
                        ) {
                          concat_string += endpoint[k].value + ",";

                          var trim = concat_string.replace(
                            /(^\s*,)|(,\s*$)/g,

                            ""
                          );
                          const index = uniqueStream.indexOf(currentItem);
                          final_arr[index] = trim;
                        }
                      }
                    }
                  }
                }

                var res = final_arr.filter((elements) => {
                  return elements !== null;
                });

                if (obj2?.endpoint) obj2.endpoint = res;

                return res;
              }
            }
          }, {});
        }

        picker(array, obj);
      });
    }
    const test = `{${currentItem}:` + (JSON.stringify(obj2) + "}");

    {
      const index = uniqueStream.indexOf(currentItem);
      initval[index] = values;

      time[index] = values.time_bound;

      life[index] = values.life_time;

      if (submitBtnName == "save") jsonfile[index] = test;
      else comJsonFile[index] = test;
    }
  };

  return (
    <div className="hero-container">
      <Formik
        key={`${currentItem}`}
        initialValues={field}
        enableReinitialize
        onSubmit={(values, e) => {
          if (submitBtnName == "save") {
            getValues(values);

            setComJsonFile(jsonfile);

            toast.success("saved successfully");
          } else {
            setComJsonFile([]);
            setjsonfile(comJsonFile);
            getValues(values);
            if (_.isEqual(jsonfile, comJsonFile)) {
              if (jsonfile == comJsonFile) {
                var filtered = jsonfile.filter((elm) => elm);

                alert(filtered);
              }
            }

            if (!_.isEqual(jsonfile, comJsonFile)) {
              toast.error("save data before generating JSON");
            }
          }
        }}
      >
        {({ values, setFieldValue }) => (
          <Formcomponent setFieldValue={setFieldValue} values={values} />
        )}
      </Formik>
    </div>
  );
};

export default DynamicForm;
