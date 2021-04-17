import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Search from "./components/Search";
import Accordion from "./components/Accordion";
import Route from "./Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a front end JavaScript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  { label: "The color Red", value: "red" },
  { label: "The color Green", value: "green" },
  { label: "A Shade of Blue", value: "blue" },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  // *** the components inside <Route> are "children" of <Route>, so we can use "children" as props to access them in Route.js
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
