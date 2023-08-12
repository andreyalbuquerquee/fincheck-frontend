import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Modal } from "../../../../../components/Modal";
import { Button } from "../../../../../components/Button";
import { useFiltersModal } from "./useFiltersModal";
import { cn } from "../../../../../../app/utils/cn";

interface FiltersModalProps {
    open: boolean;
    onClose(): void;
}

export function FiltersModal({ open, onClose }: FiltersModalProps) {
    const { 
        selectedBankAccountId,
        handleSelectBankAccount,
        selectedYear,
        handleChangeYear,
     } = useFiltersModal();

    const mockedAccounts = [
        {
            id: '123',
            name: 'Inter'
        },
        {
            id: '456',
            name: 'XP Investimentos'
        },
        {
            id: '789',
            name: 'Nubank'
        },
        
     ]
    
    return (
        <Modal open={open} onClose={onClose} title="Filtros">
            <div>
                <span className="text-lg tracking-[-1px] font-bold text-gray-800">
                    Conta
                </span>
            
                <div className="space-y-2 mt-2">
                    {mockedAccounts.map(account => (
                    <button key={account.id} 
                    onClick={() => handleSelectBankAccount(account.id)}
                    className={cn(
                        'p-2 rounded-2xl w-full text-left text-gray-800 hover:bg-gray-50 transition-colors',
                        account.id === selectedBankAccountId && '!bg-gray-200',
                    )}>
                        {account.name}
                    </button>
                    ))}
                </div>   
            </div>

            <div className="mt-10">
                <span className="text-lg tracking-[-1px] font-bold text-gray-800">
                    Ano
                </span>
            
                <div className="mt-2 w-52 text-gray-800 flex items-center justify-between">
                    <button onClick={() => handleChangeYear(-1)} className="h-12 w-12 flex items-center justify-center">
                        <ChevronLeftIcon className="w-6 h-6"/>
                    </button>
                    <div className="flex-1 text-center">
                        <span className="text-sm font-medium tracking-[-0.5px]">{selectedYear}</span>
                    </div>
                    <button onClick={() => handleChangeYear(1)} className="h-12 w-12 flex items-center justify-center">
                        <ChevronRightIcon className="w-6 h-6"/>
                    </button>
                </div>   
            </div>

            <Button className="w-full mt-10">
                Aplicar filtros
            </Button>

        </Modal>
    );
}