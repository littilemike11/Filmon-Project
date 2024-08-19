import { Link } from "react-router-dom"
import Modal from "./Modal"
export default function StudentCard(props) {
    return (
        <>

            <div className="card my-8 bg-base-200 shadow-xl ">
                <div className="card-actions justify-end z-10">
                    <Modal
                        handleDeleteStudent={props.handleDeleteStudent}
                        studentName={props.student.Name}
                        id={props.student._id}
                    />
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