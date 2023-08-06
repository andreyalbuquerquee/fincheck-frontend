import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";
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

export function Transactions() {
    const { areValuesVisible, isLoading } = useTransactionsController();
    
    return (
        <div className="bg-gray-100 rounded-2xl w-full h-full p-10 flex flex-col">
            {isLoading && (
                <div className="h-full w-full flex items-center justify-center">
                    <Spinner className="h-10 w-10"/>
                </div>
            )}

            {!isLoading && (
                <>
                <header>
                <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2">
                        <TransactionsIcon />
                    <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">Transações</span>
                    <ChevronDownIcon className="text-gray-900"/>
                    </button>

                    <button>
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
            </div>
            </>
            )}
        </div>
    )
}