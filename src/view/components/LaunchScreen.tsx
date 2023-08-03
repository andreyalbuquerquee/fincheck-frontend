import { Logo } from "./Logo";
import { Spinner } from "./Spinner";

export function LaunchScreen() {
    return (
        <div className="bg-teal-900 fixed top-0 left-0 w-full h-full grid place-items-center">
            <div className="flex flex-col items-center gap-4">
            <Logo className="h-10 text-white"/>
            <Spinner className="text-teal-900 fill-white"/>
            </div>
        </div>
    )
}