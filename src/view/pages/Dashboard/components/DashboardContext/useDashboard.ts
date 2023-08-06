import { useContext } from "react";
import { DashboardContext } from "./DashboardContent";

export function useDashboard () {
    return useContext(DashboardContext);
}