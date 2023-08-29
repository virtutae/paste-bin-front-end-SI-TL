import InputPage from "./InputPage";
import { render, screen } from "../testUtils/testUtils";

describe("MyComponent", async () => {
    test("Should have text Hello from My Component on it", () => {
        render(<InputPage />);
        const elem = screen.getByText("Title(optional):");
        expect(elem).toBeInTheDocument();
    });
});
