import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

//This is for mapping elements in the list to tested out lists and table elements!
test("renders a list", () => {
  const items = [
    {
      name: "Item 1",
      href: "/item1",
    },
    {
      name: "Item 2",
      href: "/item2",
    },
    {
      name: "Item 3",
      href: "/item3",
    },
  ];
  render(<Sidebar items={items} />);
  const anchorElements = screen.getAllByRole("navigation");
  //if we change instead of Umrzoq to Jack, it will throw error
  expect(anchorElements[0]).toHaveTextContent(items[0].name);
  expect(anchorElements[0]).toHaveAttribute("href", items[0].href);
});
