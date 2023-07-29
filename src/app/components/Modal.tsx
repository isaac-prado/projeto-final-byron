import React from 'react'

const Modal = ({isOpen, setOpenModal, children}) => {
    if (isOpen) {
        return (
            <div className='fixed top-0 bottom-0 left-0 right-0 bg-white bg-opacity-60 z-40'>
                <div className='fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 p-20 md:p-36 bg-marrom_escuro rounded-lg text-white gap-12'>
                    <div className='fixed top-2 right-5 cursor-pointer text-4xl' onClick={setOpenModal} >
                        x
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
          )
    }

}

export default Modal