import React, { HTMLAttributes } from "react";

type ModalProps = {
  handleClose: () => void;
  borderRadius?: number;
};

type Props = ModalProps & HTMLAttributes<HTMLDivElement>;

const Modal: React.FC<Props> = ({
  handleClose = () => null,
  children,
  className,
  borderRadius,
  ...rest
}) => {
  return (
    <div className={`modal modal-overlay ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Modal;
