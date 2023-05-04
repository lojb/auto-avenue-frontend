import React from "react";

const Browse = () => {
    return (
        <div>
            <div id={"filter"}>
                <h2>Filter menu</h2>
                <h3>filter by year</h3>
                <p>From</p>
                <input type={"number"}/>
                <p>To</p>
                <input type={"number"}/>
                <h3>filter by make</h3>
                <select>
                    <option>make1</option>
                    <option>make2</option>
                    <option>make3</option>
                </select>
                <h3>filter by model</h3>
                <input type={"text"}/>
                <button>Apply filters</button>
            </div>
            <div>
                <ul>
                    <li>car1</li>
                    <li>car2</li>
                    <li>car3</li>
                    <li>car4</li>
                    <li>car5</li>
                </ul>
            </div>
        </div>
    )
}

export default Browse