import { Button } from "../../../../components/Button";
import { DatePickerInput } from "../../../../components/DatePickerInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { useNewTransactionModalController } from "./useNewTransactionModalController";


export function NewTransactionModal() {
    const { isNewTransactionModalOpen, closeNewTransactionModal, newTransactionType } = useNewTransactionModalController();
    
    const isIncome = newTransactionType === 'INCOME';
    
    return (
        <Modal title={isIncome? 'Nova receita' : 'Nova despesa'} open={isNewTransactionModalOpen} onClose={closeNewTransactionModal}>
            <form>
                <div>
                <span className="text-gray-600 tracking-[-0.5px] text-xs">{`Valor da ${isIncome? 'receita' : 'despesa'}`}</span>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-600 tracking-[-0.5px] text-lg">R$</span>
                        <InputCurrency/>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-4">
                    <Input type="text" name="name" placeholder={`Nome da ${isIncome? 'Receita' : 'Despesa'}`}/>
                    <Select options={[
                        {value: 'INVESTMENT', label: 'Investimentos',},
                        {value: 'CHECKING', label: 'Conta Corrente',},
                        {value: 'CASH', label: 'Dinheiro Físico',},
                        ]} placeholder="Categoria"/>

                    <Select options={[
                        {value: 'INVESTMENT', label: 'Investimentos',},
                        {value: 'CHECKING', label: 'Conta Corrente',},
                        {value: 'CASH', label: 'Dinheiro Físico',},
                        ]} placeholder={isIncome? 'Receber na conta': 'Pagar com'}/>

                    <DatePickerInput/>
                </div>

                <Button type="submit" className="w-full mt-6">
                    Criar
                </Button>

            </form>
        </Modal>
    );
}