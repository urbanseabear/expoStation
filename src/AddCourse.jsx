import React, { useState } from "react";

const AddCourse = (props) => {

    return (
        <div>
        <label className="form-label" htmlFor="course-name">
        Course {props.course + 1}:
      </label>
      <span style={{ fontSize: '25px', color: '#f50057', marginRight: '5px'}}>* 
      </span>
      <input
        onChange={(e) => props.handleChange(e)}
        id="course-name"
        className="form-input"
        type="text"
        placeholder="oysters"
      ></input>
      </div>
    );
};

export default AddCourse;