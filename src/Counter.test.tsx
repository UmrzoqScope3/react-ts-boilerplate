import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

//testing out hooks
test("handle counter", () => {
  render(<Counter />);
  const buttonElement = screen.getByText("Add One");
  const divElement = screen.getByRole("contentinfo");
  fireEvent.click(buttonElement);
  expect(divElement).toHaveTextContent("Count is 1");
});
