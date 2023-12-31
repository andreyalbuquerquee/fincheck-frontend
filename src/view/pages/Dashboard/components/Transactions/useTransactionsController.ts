import { useState } from "react";
import { useDashboard } from "../DashboardContext/useDashboard";

export function useTransactionsController() {
    const { areValuesVisible } = useDashboard();
    
    const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

    function handleOpenFiltersModal() {
        setIsFiltersModalOpen(true);
    }

    function handleCloseFiltersModal() {
        setIsFiltersModalOpen(false);
    }

    return { 
        areValuesVisible,
        transactions: [1],
        isInitialLoading: false,
        isLoading: false,
        handleOpenFiltersModal,
        handleCloseFiltersModal,
        isFiltersModalOpen,    
    };

}