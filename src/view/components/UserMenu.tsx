import { ExitIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "./DropdownMenu";
import { useAuth } from "../../app/hooks/useAuth";

export function UserMenu() {
    const { signout } = useAuth();
    
    return (
        <DropdownMenu.Root>
        <DropdownMenu.Trigger>
        <div className="bg-teal-50 rounded-full w-12 h-12 flex justify-center items-center border border-teal-100">
            <span className="text-sm tracking-[-0.5px] text-teal-900 font-medium">AB</span>
        </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className="w-32">
        <DropdownMenu.Item onSelect={signout} className="flex items-center justify-between">
                Sair
                <ExitIcon className="h-4 w-4"/>
        </DropdownMenu.Item>
        </DropdownMenu.Content>

        </DropdownMenu.Root>
    );
}