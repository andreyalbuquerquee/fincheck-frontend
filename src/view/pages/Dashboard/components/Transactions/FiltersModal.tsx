import { Modal } from "../../../../components/Modal";

interface FiltersModalProps {
    open: boolean;
    onClose(): void;
}


export function FiltersModal({ open, onClose }: FiltersModalProps) {
    return (
        <Modal open={open} onClose={onClose} title="Filtros">
            Filtros...
        </Modal>
    );
}