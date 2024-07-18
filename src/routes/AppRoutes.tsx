import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import {ROUTE} from "./routes";
import PomodoroTimerPage from "@/features/pomodoro-timer/PomodoroTimerPage";

export const AppRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path={ROUTE.HOME} element={<PomodoroTimerPage />} />
                <Route
                    path="*"
                    element={<Navigate to={ROUTE.HOME} replace />}
                />
            </Routes>
        </HashRouter>
    );
};
