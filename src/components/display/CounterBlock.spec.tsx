import {render} from "@testing-library/react";
import CounterBlock from "./CounterBlock";
import {TestID} from "@/utils/testConstants";

describe("Counter Block Display", () => {
    it("should display items", () => {
        const component = render(
            <CounterBlock
                icon={<div data-testid="test-icon" />}
                counter={1}
                label={"test label"}
            />
        );
        expect(
            component.getByTestId(TestID.DISPLAY_BLOCK_COUNTER).textContent
        ).toBe("1");
        expect(
            component.getByTestId(TestID.DISPLAY_BLOCK_LABEL).textContent
        ).toBe("test label");
        expect(component.getByTestId("test-icon")).toBeDefined();
    });
});
