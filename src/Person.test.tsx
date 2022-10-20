import { render, screen } from "@testing-library/react";
import Person from "./Person";

test("renders a name", () => {
  render(<Person name="Umrzoq" />);
  const divElement = screen.getByRole("contentinfo");
  //if we change instead of Umrzoq to Jack, it will throw error
  expect(divElement).toHaveTextContent("Name is Umrzoq");
  expect(divElement).toHaveAttribute("role", "contentinfo");
});
