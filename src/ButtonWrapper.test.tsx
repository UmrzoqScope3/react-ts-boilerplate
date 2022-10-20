import { render, screen, fireEvent } from "@testing-library/react";
import ButtonWrapper from "./ButtonWrapper";

//testing out event triggers
test("handle onClick", () => {
  const onClick = jest.fn();
  render(<ButtonWrapper onClick={onClick} title="Add" />);
  const buttonElement = screen.getByText("Add");
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
