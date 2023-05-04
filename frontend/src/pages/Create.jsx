import React from "react";

const Create = () => {
    return (
        <div>
            <h3>Year of production</h3>
            <input type={"number"}/>
            <h3>Manufacturer</h3>
            <select>
                <option>Manufacturer1</option>
                <option>Manufacturer2</option>
                <option>Manufacturer3</option>
            </select>
            <h3>Type</h3>
            <input type={"text"}/>
            <h3>Description</h3>
            <input type={"text"}/>
        </div>
    )
}

export default Create