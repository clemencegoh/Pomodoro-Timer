import {fireEvent, render} from "@testing-library/react";
import SessionResetModalWithButton from "./SessionResetModalWithButton";
import {TestID} from "@/utils/testConstants";

describe("SessionReset", () => {
    const mockReset = jest.fn();

    it("should display reset modal when clicked", () => {
        const component = render(
            <SessionResetModalWithButton reset={mockReset} />
        );
        fireEvent.click(component.getByTestId(TestID.RESET_BUTTON));

        expect(component.getByTestId(TestID.NOTIFICATION_MODAL)).toBeTruthy();

        fireEvent.click(component.getByTestId(TestID.CONFIRM_BUTTON));
        expect(mockReset).toHaveBeenCalled();
    });
});
