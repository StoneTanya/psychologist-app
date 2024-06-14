import ModalWrapper from './modal-wrapper';
import ModalDefault from './modal-default';
import ModalForbidding from './modal-forbidding';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { cookieTime } from '../../../utils/consts';

function Modal() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isUnderAge, setUnderAge] = useState(false);

  useEffect(() => {
    /* Если cookie не существует, показать окно с проверкой возраста */
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
      expires: cookieTime,
    }); /* имя "areYouOver18"    Значение "yes"       Хранится "15 минут" */
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
