import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { AccountSliderNavigation } from "./SliderNavigation";
import { useAccountsController } from "./useAccountsController";
import { cn } from "../../../../../app/utils/cn";



export function Accounts() {
    const { sliderState, setSliderState, windowWidth, areValuesVisible, toggleValuesVisibility } = useAccountsController();
    
    return (
        <div className="bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
            <div>
                <span className="tracking-[-0.5px] text-white block">Saldo total</span>
                <div className="flex items-center gap-2">
                    <strong className={cn(
                        "text-2xl tracking-[-1px] text-white",
                        !areValuesVisible && 'blur-[10px]'
                    )}>R$ 1.000,00</strong>
                    <button onClick={toggleValuesVisibility} className="w-8 h-8 flex items-center justify-center">
                        <EyeIcon open={!areValuesVisible}/>
                    </button>
                </div>
            </div>

            <div className="flex-1 flex justify-end flex-col mt-10 md:mt-0">
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
                        <SwiperSlide>
                            <AccountCard color="#7950F2" name="Nubank" balance={1250} type="CHECKING"/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <AccountCard color="#333" name="XP Investimentos" balance={25000} type="INVESTMENT"/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <AccountCard color="#00f" name="Cash" balance={500} type="CASH"/>
                        </SwiperSlide>   
                </Swiper> 
            </div>
            </div>
        </div>
    )
}