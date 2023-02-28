import { useForm } from 'react-hook-form';
import Modal from './Modal';
import modalStyles from './Modal.module.css';

interface AddDocumentModalProps {
    onClose?: () => void;
    onConfirm: (title: string, description: string) => void;
}

interface AddDocumentModalInput {
    title: string;
    description: string;
}

const AddDocumentModal = (props: AddDocumentModalProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddDocumentModalInput>({
        defaultValues: {
            title: '',
            description: '',
        },
    });

    const onSubmit = (data: any) => {
        props.onConfirm(data.title, data.description);
        if (props.onClose) props.onClose();
    };

    return (
        <Modal title="Add New Document" onClose={props.onClose}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={modalStyles.form}
            >
                <div className={modalStyles.inputGroup}>
                    <div className={modalStyles.inputRow}>
                        <label htmlFor="value">Title</label>
                        <input
                            id="value"
                            type="text"
                            className={modalStyles.input}
                            {...register('title', {
                                required: 'Title is required',
                                max: {
                                    value: 255,
                                    message: 'Title too long (> 255 chars)',
                                },
                            })}
                        />
                    </div>
                    <p className={modalStyles.error}>{errors.title?.message}</p>
                </div>
                <div className={modalStyles.inputGroup}>
                    <div className={modalStyles.inputRow}>
                        <label htmlFor="value">Description</label>
                        <input
                            id="value"
                            type="text"
                            className={modalStyles.input}
                            {...register('description', {
                                max: {
                                    value: 500,
                                    message:
                                        'Description too long (> 500 chars)',
                                },
                            })}
                        />
                    </div>
                    <p className={modalStyles.error}>{errors.title?.message}</p>
                </div>
                <div className={modalStyles.btnContainer}>
                    <input
                        className={modalStyles.btn}
                        type="button"
                        value="Cancel"
                        onClick={props.onClose}
                    />
                    <input
                        className={modalStyles.btn}
                        type="submit"
                        value="Add Document"
                    />
                </div>
            </form>
        </Modal>
    );
};

export default AddDocumentModal;
