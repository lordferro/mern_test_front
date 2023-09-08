import React from "react";
import ButtonGroup from "./ButtonGroup";
import Button from "../Button/Button";

const ButtonGroupSandbox = () => {
  return (
    <>
      <h2>
        <span>1. Horizontal button group:</span>
      </h2>
      <ButtonGroup>
        <Button active>First</Button>
        <Button>Middle</Button>
        <Button>Last</Button>
      </ButtonGroup>

      <h2>
        <span>2. Vertical button group:</span>
      </h2>
      <ButtonGroup vertical>
        <Button>First</Button>
        <Button active>Middle</Button>
        <Button>Last</Button>
      </ButtonGroup>

      <h2>
        <span>3. Switcher button group:</span>
      </h2>
      <ButtonGroup>
        <Button active>ON</Button>
        <Button>OFF</Button>
      </ButtonGroup>
    </>
  );
};

export default ButtonGroupSandbox;
