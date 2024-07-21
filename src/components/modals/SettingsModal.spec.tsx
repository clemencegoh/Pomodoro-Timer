import {render, fireEvent, RenderResult} from "@testing-library/react";
import SettingsModal from "./SettingsModal";
import {TestID} from "@/utils/testConstants";

describe("Settings Modal", () => {
    const mockClose = jest.fn();
    let component: RenderResult;

    beforeEach(() => {
        component = render(<SettingsModal isOpen={true} onClose={mockClose} />);
    });

    it("should change input value correctly", () => {
        expect(
            component
                .getByTestId(TestID.SETTINGS_MODAL_WORK_TIMER)
                .getAttribute("data-value")
        ).toBe("25");
        fireEvent.change(
            component.getByTestId(TestID.SETTINGS_MODAL_WORK_TIMER),
            {target: {value: "22"}}
        );

        expect(
            component
                .getByTestId(TestID.SETTINGS_MODAL_WORK_TIMER)
                .getAttribute("data-value")
        ).toBe("22");
    });
});
