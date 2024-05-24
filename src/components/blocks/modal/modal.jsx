import ModalWrapper from './modal-wrapper';
import ModalDefault from './modal-default';
import ModalForbidding from './modal-forbidding';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { inFiveMinutes } from '../../../utils/consts';

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

  const overAge = () => {
    setModalOpen(false);
    Cookies.set('areYouOver18', 'yes', {
      path: '',
      expires: inFiveMinutes,
    }); /* имя "areYouOver18"    Значение "yes"       Хранится "5 минут" */
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
