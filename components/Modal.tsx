type ModalProps = {
  message: string
  confirmFn: () => void
  setIsModalOpen: (bool: boolean) => void
}

const Modal = ({ message, confirmFn, setIsModalOpen }: ModalProps) => {
  const confirmModal = () => {
    confirmFn()
    setIsModalOpen(false)
  }

  const modalBox = document.getElementById('modal-box')

  const clickOutsideCloseModal = (e: React.MouseEvent) => {
    if (e.target !== modalBox) {
      setIsModalOpen(false)
    }
  }

  return (
    <div
      className="fixed left-0 top-0 z-50 flex h-full w-full animate-fade items-center overflow-auto bg-black/40 animate-normal animate-duration-[150ms] animate-fill-forwards animate-once animate-ease-out"
      onClick={clickOutsideCloseModal}
    >
      <div
        id="modal-box"
        className="mx-auto flex w-3/4 max-w-md -translate-y-1/2 flex-col gap-6 rounded-md border bg-white p-6 shadow-2xl"
      >
        <div>
          <h3 className="text-center text-lg font-medium">{message}</h3>
        </div>
        <div className="flex justify-center gap-8 px-5">
          <button
            className={`w-20 rounded border bg-white py-2 font-medium transition hover:bg-black/10`}
            onClick={() => setIsModalOpen(false)}
          >
            No
          </button>
          <button
            className={`w-20 rounded border bg-red-500 py-2 font-medium text-white transition hover:bg-red-700`}
            onClick={confirmModal}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
