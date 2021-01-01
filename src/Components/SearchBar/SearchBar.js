import React, { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import { Form, Button, Input } from "./style";

function SearchBar(props) {
  const [input, setInput] = useState("");
  const [state, setState] = useState(false);
  const node = useRef();
  const inputFocus = useRef();

  const history = useHistory();

  useEffect(() => {
    //page load huda mount hanne
    document.addEventListener("mousedown", handleClick);
    //unmount when the page is left the listener should be removed
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  function handleClick(e) {
    if (!node.current.contains(e.target)) {
      setState(false);
    }
  }

  function onFormSubmit(e) {
    e.preventDefault();
    if (input.length === 0) {
      return;
    }
    setInput("");
    setState(false);
    history.push(process.env.PUBLIC_URL + "/search/" + input);
  }

  return (
    <Form
      state={state}
      ref={node}
      onSubmit={onFormSubmit}
      onClick={() => {
        setState(true);
        inputFocus.current.focus();
      }}
    >
      <Button type="submit" state={state}>
        <FiSearch size="20px" />
      </Button>
      <Input
        state={state}
        ref={inputFocus}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for a movie..."
      />
    </Form>
  );
}

export default SearchBar;
