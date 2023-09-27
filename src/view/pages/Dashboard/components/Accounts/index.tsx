import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { AccountSliderNavigation } from "./SliderNavigation";
import { useAccountsController } from "./useAccountsController";
import { cn } from "../../../../../app/utils/cn";
import { Spinner } from "../../../../components/Spinner";
import { PlusIcon } from "@radix-ui/react-icons";



export function Accounts() {
    const { sliderState, 
        setSliderState, 
        windowWidth, 
        areValuesVisible, 
        toggleValuesVisibility, 
        isLoading,
        accounts,
        openNewAccountModal, } = useAccountsController();
    
    return (
        <div className="bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
            {isLoading && (
            <div className="h-full w-full flex items-center justify-center">
            <Spinner className="text-teal-950/50 fill-white w-10 h-10"/>
            </div>
            )}
            
            {!isLoading && (
                <>
                <div>
                <span className="tracking-[-0.5px] text-white block">Saldo total</span>
                <div className="flex items-center gap-2">
                    <strong className={cn(
                        "text-2xl tracking-[-1px] text-white",
                        !areValuesVisible && 'blur-[10px]'
                    )}>R$ 1.000,00</strong>
                    <button onClick={toggleValuesVisibility} className="w-8 h-8 flex items-center justify-center">
                        <EyeIcon open={areValuesVisible}/>
                    </button>
                </div>
            </div>

            <div className="flex-1 flex justify-end flex-col mt-10 md:mt-0">
            {accounts.length === 0 && (
                <>
                <div slot="container-start" className="mb-4">
                    <strong className="text-white tracking-[-1px] text-lg font-bold">Minhas contas</strong>
                </div>

                <button onClick={openNewAccountModal} className="flex flex-col items-center justify-center gap-4 mt-4 h-52 border-2 border-dashed border-teal-600 rounded-2xl text-white hover:bg-teal-800 transition-colors">
                    <div className="h-11 w-11 border-2 border-dashed border-white rounded-full flex items-center justify-center">
                    <PlusIcon className="w-6 h-6"/>
                    </div>
                    <span className="font-medium tracking-[-0.5px] block w-32 text-center">Cadastre uma nova conta</span>
                </button>
                </>
            )}
            
            {accounts.length > 0 && (
                <div>
                <Swiper spaceBetween={16}
                         slidesPerView={windowWidth >= 500 ? 2.15 : 1.15}
                         onSlideChange={swiper => {
                            setSliderState({
                                isBeginning: swiper.isBeginning,
                                isEnd: swiper.isEnd,
                            })
                         }}>
                    <div slot="container-start" className="flex items-center justify-between mb-4">
                        <strong className="text-white tracking-[-1px] text-lg font-bold">Minhas contas</strong>
                        <AccountSliderNavigation isEnd={sliderState.isEnd} isBeginning={sliderState.isBeginning}/>
                    </div>
                            {accounts.map(account => (
                                <SwiperSlide key={account.id}>
                                    <AccountCard 
                                    color={account.color} 
                                    name={account.name} 
                                    balance={account.currentBalance}
                                    type={account.type}/>
                                </SwiperSlide> 
                            ))}
                            
                            
                    </Swiper> 
                </div>
            )}
            </div>
            </>
            )}
        </div>
    )
}