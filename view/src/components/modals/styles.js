import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ModalBackground = styled(motion.main)`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .main-modal {
    position: fixed;
    background: ${props => props.theme.primary};
    width: 500px;
    height: 440px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 4px;
  }

  .display-block {
    display: block;
  }

  .display-none {
    display: none;
  }

  .background-form {
    width: 100%;
  }
  .modal-header {
     padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
   }
`;

export const FormWrapper = styled.form`
  padding: 20px;
`;

