import React from "react";
import Button from "./Button";

const ButtonSandbox = () => (
  <>
    <h2>
      <span>1. Text and onClick function:</span>
    </h2>
    <Button
      onClick={() => {
        console.log("!!!!");
      }}
    >
      Button text
    </Button>

    <h2>
      <span>2. Disabled button:</span>
    </h2>
    <Button
      onClick={() => {
        console.log("!!!!");
      }}
      disabled
    />

    <h2>
      <span>3. Active button:</span>
    </h2>
    <Button
      active
      onClick={() => {
        console.log("!!!");
      }}
    />

    <h2>
      <span>4. Supporting data, type and etc. attributes:</span>
    </h2>
    <Button
      data-name="button"
      onClick={() => {
        console.log("!!!");
      }}
    />
    <Button
      type="submit"
      onClick={() => {
        console.log("!!!");
      }}
    />

    <h2>
      <span>5. Button link</span>
    </h2>
    <Button
      href="/"
      onClick={() => {
        console.log("!!!");
      }}
    >
      Link
    </Button>
    <Button
      onClick={() => {
        console.log("!!!");
      }}
      href="/"
      disabled
    >
      Link
    </Button>
    <h2>
      <span>5. Invert button (secondary button)</span>
    </h2>
    <Button invert />
  </>
);

export default ButtonSandbox;
