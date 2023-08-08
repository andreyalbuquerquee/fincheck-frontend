import { DropdownMenu } from "./DropdownMenu";

export function UserMenu() {
    return (
        <DropdownMenu.Root>
        <DropdownMenu.Trigger>
        <div className="bg-teal-50 rounded-full w-12 h-12 flex justify-center items-center border border-teal-100">
            <span className="text-sm tracking-[-0.5px] text-teal-900 font-medium">AB</span>
        </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
        <DropdownMenu.Item>
                Sair
        </DropdownMenu.Item>
        </DropdownMenu.Content>

        </DropdownMenu.Root>
    )
}