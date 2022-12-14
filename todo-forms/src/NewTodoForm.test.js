import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", function() {
  render(<NewTodoForm />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

// it("runs the create function on form submit", function() {
//   const button = screen.getByText("Add a new tasks!");
//   fireEvent.click(button);

// });