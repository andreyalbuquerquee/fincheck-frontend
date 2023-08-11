import { Modal } from "../../../../components/Modal";

interface FiltersModalProps {
    open: boolean;
    onClose(): void;
}


export function FiltersModal({ open, onClose }: FiltersModalProps) {
    return (
        <Modal open={open} onClose={onClose} title="Filtros">
            <div>
            <span className="text-lg tracking-[-1px] font-bold text-gray-800">Conta</span>
            </div>
            <div className="space-y-2 mt-2">
                <button className="p-2 rounded-2xl w-full text-left text-gray-800 bg-gray-200">Nubank</button>
                <button className="p-2 rounded-2xl w-full text-left text-gray-800">XP Investimentos</button>
                <button className="p-2 rounded-2xl w-full text-left text-gray-800">Dinheiro</button>
            </div>
        </Modal>
    );
}