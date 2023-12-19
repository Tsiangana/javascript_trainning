
/*import { capitalizeStringOne } from "./22_import_and_export";

// Understand the Differences Between import and require
const my = capitalizeStringOne("hello!");*/

// console.log(my);




// Use export to Reuse a Code Block
const capitalizeStringTwo = (string) => {
    return string.chartAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeStringTwo };

export const foo = "bar";
export const bar = "foo";