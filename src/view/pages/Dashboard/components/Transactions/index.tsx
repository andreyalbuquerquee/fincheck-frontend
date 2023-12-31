import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constants";
import { SliderOption } from "./SliderOption";
import { SliderNavigation } from "./SliderNavigation";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import { cn } from "../../../../../app/utils/cn";
import { useTransactionsController } from "./useTransactionsController";
import { Spinner } from "../../../../components/Spinner";
import emptyStateImage from "../../../../../assets/empty-state.svg"
import { TransactionTypeDropdown } from "./TransactionTypeDropdown";
import { FiltersModal } from "./FiltersModal";

export function Transactions() {
    const { areValuesVisible, transactions, isInitialLoading, isLoading, isFiltersModalOpen, handleOpenFiltersModal, handleCloseFiltersModal } = useTransactionsController();

    const hasTransactions = transactions.length > 0;
    
    return (
        <div className="bg-gray-100 rounded-2xl w-full h-full p-10 flex flex-col">
            
            {isInitialLoading && (
                <div className="h-full w-full flex items-center justify-center">
                    <Spinner className="h-10 w-10"/>
                </div>
            )}

            {!isInitialLoading && (
                <>
                <FiltersModal
                open={isFiltersModalOpen}
                onClose={handleCloseFiltersModal}
                />

                <header>
                <div className="flex items-center justify-between">
                    <TransactionTypeDropdown/>
                    <button onClick={handleOpenFiltersModal}>
                        <FilterIcon/>
                    </button>
                </div>

                <div className="mt-6 relative">
                    <Swiper slidesPerView={3}
                    centeredSlides
                    slideToClickedSlide
                    >
                        <SliderNavigation/>

                        {MONTHS.map((month) => (
                            <SwiperSlide key={month}>
                            {({ isActive }) => (
                            <SliderOption isActive={isActive} month={month}/>
                            )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </header>

            <div className="mt-4 space-y-2 flex-1 overflow-y-auto">
                {isLoading && (
                    <div className="flex flex-col items-center justify-center h-full gap-4">
                    <Spinner className="h-10 w-10"/>
                    </div>
                )}
                
                {(!hasTransactions && !isLoading) && (
                    <div className="flex flex-col items-center justify-center h-full gap-4">
                            <img src={emptyStateImage} alt="Empty state" />
                            <p className="text-gray-700">Não encontramos nenhuma transação!</p>
                    </div>
                )}
                {(hasTransactions && !isLoading) && (
                    <>
                    <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 flex-1">
                        <CategoryIcon type="income"/>
                        <div className="flex flex-col">
                            <strong className="text-gray-800 tracking-[-0.5px]">Salário</strong>
                            <span className="text-gray-600 text-sm">05/08/2023</span>
                        </div>
                    </div>
                    <span className={cn(
                        'text-green-800 tracking-[-0.5px] font-medium',
                        !areValuesVisible && 'blur-[10px]'
                    )}>+ {formatCurrency(1300)}</span>
                </div>
                
                <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 flex-1">
                        <CategoryIcon type="expense"/>
                        <div className="flex flex-col">
                            <strong className="text-gray-800 tracking-[-0.5px]">Escola</strong>
                            <span className="text-gray-600 text-sm">07/08/2023</span>
                        </div>
                    </div>
                    <span className={cn(
                        'text-red-800 tracking-[-0.5px] font-medium',
                        !areValuesVisible && 'blur-sm'
                    )}>- {formatCurrency(50)}</span>
                </div>  
                    </>
                )}
                
            </div>
            </>
            )}
        </div>
    )
}