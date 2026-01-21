import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("EZShop App", () => {
  it("renders EZShop text", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByText(/EZShop/i)).toBeInTheDocument();
  });
});