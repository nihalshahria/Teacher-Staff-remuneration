import React, { useState } from "react";
import "../Components/SampleDropdown/styles.css";

const TwoField = ({ inputFields, setInputFields }) => {
  const removeInputFields = (e, index) => {
    e.preventDefault();
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  const handleChange = (evnt, index) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        name: "",
        course: "",
      },
    ]);
    console.log(inputFields);
  };
  return (
    // <div className="container">
    <div className="Container">
      {inputFields.map((data, index) => {
        const { name, course } = data;
        return (
          <div
            // className="row"
            className="FormRow"
            key={index}
          >
            {/* <div className="form-group col-md-3"> */}
            <div className="FormRowElement">
              {index === 0 ? <label>Teacher's Name</label> : ""}
              <input
                type="text"
                name="name"
                onChange={(evnt) => handleChange(evnt, index)}
                value={name}
                // className="form-control"
                className="FormControl"
                placeholder="Name"
              />
            </div>
            {/* <div className="form-group col-md-2"> */}
            <div className="FormRowElement">
              {index === 0 ? <label>Course ID</label> : ""}
              <input
                type="text"
                name="course"
                onChange={(evnt) => handleChange(evnt, index)}
                value={course}
                className="FormControl"
                // className="form-control"
                placeholder="Course"
              />
            </div>
            {/* <div className="col-md-1 text-center mt-3"> */}
            <div className="FormRowElement">
              {inputFields.length !== 1 ? (
                <button
                  // className="btn-outline-danger add"
                  className="crossButton"
                  onClick={(evnt) => removeInputFields(evnt, index)}
                >
                  x
                </button>
              ) : (
                ""
              )}
            </div>
            {inputFields.length - 1 === index && (
              // <div className="row">
              <div className="FormRow">
                {/* <div className="col-sm-1"> */}
                <button
                  // className="btn-outline-success add"
                  className="addButton"
                  onClick={() => addInputField()}
                  type="button"
                >
                  <i className="fa-sharp fa-solid fa-plus"></i>
                </button>
                {/* </div> */}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TwoField;