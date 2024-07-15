import Modal from "react-bootstrap/Modal"
import MyButton from "./MyButton"

import './styles/CustomModal.scss'

const CustomModal = ({ show, onAction, onHide, title, children, actionText }) => (
    <Modal className="custom-modal" show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
        <Modal.Footer>
            {(actionText && onAction) && <MyButton onClick={onAction}>{actionText}</MyButton>}
            <MyButton type="submit" onClick={onHide} variant="danger">Cancelar</MyButton>
        </Modal.Footer>
    </Modal>
)

export default CustomModal