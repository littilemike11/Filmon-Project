export default function Modal(props) {
    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
                onClick={() => document.getElementById('my_modal_5').showModal()}
                className="btn btn-square btn-sm">

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello! Are you sure you want to delete:</h3>
                    <h3 className="font-bold text-lg">{props.studentName}</h3>
                    <p className="py-4">Press ESC key or click the cancel button to close</p>
                    <div className="modal-action flex justify-between">

                        <form className="flex w-full justify-between" method="dialog">
                            <button
                                onClick={() => (props.handleDeleteStudent(props.id))}
                                className="btn text-red-600">Delete</button>
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}