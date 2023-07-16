import React from 'react';

function Modal({ show, onClose, children }) {
  if (!show) {
    return null;
  }

  
//   if(show){
//       body.addEventListener((event), ()=>{
//         onClose();
//       });
//   }

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-dialog">
        <button className="modal-close" onClick={handleClose}>
          Close
        </button>
        <div className='Modal'>
            {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
