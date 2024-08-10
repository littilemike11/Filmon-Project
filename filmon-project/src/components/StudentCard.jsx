import { Link } from "react-router-dom"
export default function StudentCard(props) {

    return (
        <>

            <div className="card my-8 bg-base-200 shadow-xl ">
                <div className="card-actions justify-end z-10">
                    <button
                        onClick={() => (props.handleDeleteStudent(props.student._id))}
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
                </div>
                <Link to={`/student/${props.student.Name}`}
                    state={props.student}
                >
                    <div className="lg:flex items-center  justify-between">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="shadow-xl p-1 my-2 border border-r rounded-md border-slate-400 ">
                            {props.student.Name}
                        </div>
                        <div className="shadow-xl p-1 my-2  border border-r rounded-md border-slate-400">
                            GPA: {props.student.GPA}
                        </div>
                        <div className="shadow-xl p-1 my-2  border border-r rounded-md border-slate-400">
                            Prayer: {props.student.Prayer}
                        </div>
                        <div className="shadow-xl p-1 my-2  border border-r rounded-md border-slate-400">
                            Tirgrina: {props.student.TigrinyaLevel}
                        </div>
                        <div className="shadow-xl p-1 my-2  border border-r rounded-md border-slate-400">
                            Qidasse: {props.student.Qidasse}
                        </div>
                        <div className="shadow-xl p-1 my-2  border border-r rounded-md border-slate-400">
                            BiblePg: {props.student.BiblePg}
                        </div>
                    </div>
                </Link>

            </div>
        </>
    )
}