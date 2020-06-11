//2. Create a App.jsx component.

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

function App() {
return <div>
    <Header />
    {notes.map(newCard => <Note key = {newCard.key} title = {newCard.title} content = {newCard.content} />)}
    <Footer />
    </div>;
}

export default App;