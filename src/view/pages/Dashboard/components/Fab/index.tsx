import { PlusIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "../../../../components/DropdownMenu";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import { BankAccountIcon } from "../../../../components/icons/BankAccountIcon";

export function Fab() {
    return (
        <div className="fixed bottom-4 right-4">
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                <button className="h-12 w-12 rounded-full bg-teal-900 text-white flex items-center justify-center">
                    <PlusIcon className="w-6 h-6"/>
                </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="">
                
                <DropdownMenu.Item className="gap-2">
                    <CategoryIcon type="expense"/>
                    Nova despesa
                </DropdownMenu.Item>

                <DropdownMenu.Item className="gap-2">
                <CategoryIcon type="income"/>
                    Nova receita
                </DropdownMenu.Item>

                <DropdownMenu.Item className="gap-2">
                    <BankAccountIcon/>
                    Nova conta
                </DropdownMenu.Item>
                
                </DropdownMenu.Content>
            </DropdownMenu.Root>
            </div>
        );
}