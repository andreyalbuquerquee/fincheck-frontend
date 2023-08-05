import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

export function SliderNavigation() {
    const swiper = useSwiper();

    return (
        <>
        <button onClick={() => swiper.slidePrev()} className="absolute left-0 top-1/2 translate-y-[-50%] h-12 w-12 flex items-center justify-center bg-gradient-to-r from-gray-100 to-transparent z-10">
            <ChevronLeftIcon className="h-6 w-6 text-gray-800"/>
        </button>
        <button onClick={() => swiper.slideNext()} className="absolute right-0 top-1/2 translate-y-[-50%] h-12 w-12 flex items-center justify-center bg-gradient-to-l from-gray-100 to-transparent z-10">
            <ChevronRightIcon className="h-6 w-6 text-gray-800"/>
        </button>
        </>
    )
}