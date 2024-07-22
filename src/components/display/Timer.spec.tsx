import {act, fireEvent, render} from "@testing-library/react";
import Timer from "./Timer";
import {TestID} from "@/utils/testConstants";
import {POMODORO_STATES} from "@/hooks/usePomodoroStateMachine";

describe("Timer Component", () => {
    afterEach(() => {
        jest.useRealTimers();
    });
    beforeEach(() => {
        jest.useFakeTimers();
    });

    it("should display bottom display", () => {
        const component = render(<Timer currentState={POMODORO_STATES.WORK} />);
        expect(
            component.getByTestId(TestID.TIMER_BOTTOM_DISPLAY).textContent
        ).toBe("Work");
    });

    it("should display initial timer for > 10 mins", () => {
        const component = render(
            <Timer
                initialMinutes={12}
                initialSeconds={0}
                currentState={POMODORO_STATES.WORK}
            />
        );
        expect(
            component.getByTestId(TestID.TIMER_TIME_DISPLAY).textContent
        ).toBe("12:00");
    });
    it("should display initial timer for < 10 mins", () => {
        const component = render(
            <Timer
                initialMinutes={2}
                initialSeconds={0}
                currentState={POMODORO_STATES.WORK}
            />
        );
        expect(
            component.getByTestId(TestID.TIMER_TIME_DISPLAY).textContent
        ).toBe("02:00");
    });

    it("should countdown properly", () => {
        const component = render(
            <Timer
                initialMinutes={12}
                initialSeconds={0}
                currentState={POMODORO_STATES.WORK}
            />
        );
        expect(
            component.getByTestId(TestID.TIMER_TIME_DISPLAY).textContent
        ).toBe("12:00");

        act(() => {
            jest.advanceTimersByTime(1000);
        });

        expect(
            component.getByTestId(TestID.TIMER_TIME_DISPLAY).textContent
        ).toBe("11:59");
    });

    it("should display pause button while playing and play button while pausing", () => {
        const component = render(
            <Timer
                initialMinutes={12}
                initialSeconds={0}
                currentState={POMODORO_STATES.WORK}
            />
        );
        expect(component.getByTestId(TestID.TIMER_PAUSE_ICON)).toBeDefined();

        fireEvent.click(component.getByTestId(TestID.TIMER_PLAY_PAUSE_BUTTON));
        expect(component.getByTestId(TestID.TIMER_PLAY_ICON)).toBeDefined();
    });

    it("should reset", () => {
        const component = render(
            <Timer
                initialMinutes={12}
                initialSeconds={0}
                currentState={POMODORO_STATES.WORK}
            />
        );

        expect(
            component.getByTestId(TestID.TIMER_TIME_DISPLAY).textContent
        ).toBe("12:00");

        act(() => {
            jest.advanceTimersByTime(1000);
        });

        expect(
            component.getByTestId(TestID.TIMER_TIME_DISPLAY).textContent
        ).toBe("11:59");

        fireEvent.click(component.getByTestId(TestID.TIMER_RESET_ICON));
        expect(
            component.getByTestId(TestID.TIMER_TIME_DISPLAY).textContent
        ).toBe("12:00");
    });
});
