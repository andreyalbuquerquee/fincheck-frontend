import { ChevronDownIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "../../../../components/DropdownMenu";
import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";
import { IncomeIcon } from "../../../../components/icons/IncomeIcon";
import { ExpensesIcon } from "../../../../components/icons/ExpensesIcon";

export function TransactionTypeDropdown() {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
            <button className="flex items-center gap-2">
                <TransactionsIcon />
                <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">Transações</span>
                <ChevronDownIcon className="text-gray-900"/>
            </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content className="mt-2 w-[279px]">
                <DropdownMenu.Item className="gap-2">
                    <IncomeIcon color="#2B8A3E"/>
                    Receitas
                </DropdownMenu.Item>
                <DropdownMenu.Item className="gap-2">
                    <ExpensesIcon color="#C92A2A"/>
                    Despesas
                </DropdownMenu.Item>
                <DropdownMenu.Item className="gap-2">
                    <TransactionsIcon color="#364FC7"/>
                    Transações
                </DropdownMenu.Item>
            </DropdownMenu.Content>

        </DropdownMenu.Root>
    );
}