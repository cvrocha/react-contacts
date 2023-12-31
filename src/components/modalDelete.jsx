import React from 'react';
import { FaTrashCan } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCircleXmark } from "react-icons/fa6";

class ModalDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.id = props.id
    this.onDelete = props.onDelete
  }

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleDelete = () => {
    // Lógica para excluir o item
    // Por exemplo, você pode chamar uma função ou fazer uma solicitação para o servidor aqui
    console.log('Item deletado!');
    this.closeModal(); // Feche a modal após a exclusão
  };

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <button onClick={this.openModal} className="profile-card__button button--orange">
          <FaTrashCan /> Delete
        </button>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.closeModal}>&times;</span>
              <p>Do you want to delete this contact?</p>
              <div className="container-buttons-modal">
                <button onClick={() => this.onDelete(this.id)} className="profile-card__button button--green">
                  <FaCircleCheck />Yes
                </button>
                <button onClick={this.handleDelete} className="profile-card__button button--orange">
                <FaCircleXmark />  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ModalDelete;

