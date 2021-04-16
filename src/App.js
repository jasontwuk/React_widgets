import React, { useState } from "react";
// import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
// import Search from "./components/Search";
// import Accordion from "./components/Accordion";

// const items = [
//   {
//     title: "What is React?",
//     content: "React is a front end JavaScript framework",
//   },
//   {
//     title: "Why use React?",
//     content: "React is a favorite JS library among engineers",
//   },
//   {
//     title: "How do you use React?",
//     content: "You use React by creating components",
//   },
// ];

// const options = [
//   { label: "The color Red", value: "red" },
//   { label: "The color Green", value: "green" },
//   { label: "A Shade of Blue", value: "blue" },
// ];

export default () => {
  // const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <Dropdown
        label="Select a Color"
        options={options}
        selected={selected}
        onSelectChange={setSelected}
      /> */}
      <Translate />
    </div>
  );
};
