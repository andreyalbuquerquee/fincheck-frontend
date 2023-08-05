import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

interface AccountSliderNavigationProps {
    isBeginning: boolean;
    isEnd: boolean;
}

export function AccountSliderNavigation({ isBeginning, isEnd }: AccountSliderNavigationProps) {
    const swiper = useSwiper();
    swiper.isBeginning
 
    return (
        <div>
            <button disabled={isBeginning} onClick={() => swiper.slidePrev()} className="rounded-full py-3 pl-2.5 pr-3.5 enabled:hover:bg-black/10 transition-colors disabled:opacity-40"><ChevronLeftIcon className="text-white w-6 h-6"/> </button>
            <button disabled={isEnd} onClick={() => swiper.slideNext()} className="rounded-full py-3 pl-2.5 pr-3.5 enabled:hover:bg-black/10 transition-colors disabled:opacity-40"><ChevronRightIcon className="text-white w-6 h-6"/> </button>
        </div>
    );
}