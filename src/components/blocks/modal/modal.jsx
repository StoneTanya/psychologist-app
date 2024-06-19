import ModalWrapper from './modal-wrapper';
import ModalDefault from './modal-default';
import ModalForbidding from './modal-forbidding';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function Modal() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isUnderAge, setUnderAge] = useState(false);

  useEffect(() => {
    if (!Cookies.get('areYouOver18')) {
      setTimeout(() => {
        setModalOpen(true);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const overAge = () => {
    setModalOpen(false);
    Cookies.set('areYouOver18', 'yes', {
      path: '',
      expires: 7,
    });
  };

  const underAge = () => {
    setUnderAge(true);
  };

  const backToVerify = () => {
    setUnderAge(false);
  };

  return (
    <ModalWrapper isOpen={isModalOpen}>
      {isUnderAge ? (
        <ModalForbidding isBack={backToVerify} />
      ) : (
        <ModalDefault isUnder={underAge} isOver={overAge} />
      )}
    </ModalWrapper>
  );
}

export default Modal;
