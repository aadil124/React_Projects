
import React from "react";
import ReactDOM  from "react-dom";
import {add, sub, mul, div} from "./App";

ReactDOM.render( 
    <>
    <ul>
        <li>The Sum of Two Number is {add(40,4)}</li> <br/>
        <li>The Diffrence of Two Number is {sub(40,4)}</li><br/>
        <li>The Multiplication of Two Number is {mul(40,4)}</li><br/>
        <li>The Division of Two Number is {div(40,3)}</li>
    </ul>
    </>
    ,document.getElementById("root")
);