import {fireEvent, render} from "@testing-library/react";
import AppHeader from "./Header";
import {TestID} from "@/utils/testConstants";

describe("Header", () => {
    it("should display timer title", () => {
        const component = render(<AppHeader />);
        expect(component.getByTestId(TestID.HEADER_TITLE).textContent).toBe(
            "Pomodoro Timer"
        );
    });

    it("should open modal", () => {
        const component = render(<AppHeader />);

        expect(component.getByTestId(TestID.SETTINGS_BUTTON)).toBeDefined();
        fireEvent.click(component.getByTestId(TestID.SETTINGS_BUTTON));

        expect(component.getByTestId(TestID.SETTINGS_MODAL)).toBeDefined();
    });
});
