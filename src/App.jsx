import React from "react";
import emojipedia from "./emojipedia";
import Entry from "./components/entry";

function createCard(props){
  return (
    <Entry
      key={props.id}
      name={props.name}
      emoji={props.emoji}
      meaning={props.meaning}
    />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)}

      </dl>
    </div>
  );
}

export default App;
