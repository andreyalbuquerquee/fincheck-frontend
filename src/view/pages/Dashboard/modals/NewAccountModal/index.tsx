import { Modal } from "../../../../components/Modal";
import { useNewAccountModalController } from "./useNewAccountModalController";

export function NewAccountModal() {
    const { isNewAccountModalOpen, closeNewAccountModal } = useNewAccountModalController();
    
    return (
        <Modal title="Nova Conta" open={isNewAccountModalOpen} onClose={closeNewAccountModal}>
            NewAccountModal
        </Modal>
    );
}