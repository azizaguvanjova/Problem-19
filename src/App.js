import { useEffect, useState ,useRef} from 'react'

// isOpen true olduğunda Modalı açalım
export default function App() {
  const [isOpen, setOpen] = useState(false)

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  return (
    <>
    <div className='flex justify-center items-center h-screen bg-slate-400'>
      <button onClick={openModal} className='bg-white border-2 border-black p-2'>
        Modalı aç
        </button>
        </div>
      {isOpen && (
      <Modal onClose={openModal}>
        <h1 className='pb-2 text-lg font-bold'>Modal açık</h1>
        <button onClick={closeModal}>Kapalı</button>
      </Modal>
      )}
    </>
  )
}

function Modal({ children ,onClose}) {
  const dialogRef= useRef(null)

  useEffect(()=>{
    if(dialogRef.current){
      dialogRef.current.showModal()
    }

    // Clean up when component unmounts
    return () => {
      if(dialogRef.current){
        dialogRef.current.close()
      }
    }
},[])
  return (
  <dialog ref={dialogRef} className='border-2 border-black p-4'>{children}</dialog>
  )
}
