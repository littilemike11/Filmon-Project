import { Link, useLocation } from "react-router-dom"
import NavBar from "./NavBar"
export default function StudentPage(props) {
    const location = useLocation();
    const student = location.state?.student;
    console.log(student)
    return (
        <>
            {/* navbar */}
            <NavBar />
            <div className="navbar bg-base-100">

                <div className="flex-1 gap-2">
                    <div className="flex">
                        <div className="avatar">
                            <div className="w-10 m-2 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div>
                            <div className=" text-3xl">
                                {student.Name}
                            </div>
                            <div className="">
                                {student.Bio}
                                I want to live a godly life and be as holy as possible by God's Grace
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Focus */}
            <div>
                <div className="card text-start border-2 border-slate-400 my-4">
                    <p>School</p>
                    <p>{student.Grade} | {student.GPA} | {student.School}</p>
                    <p>Focusing on my grades and want to be a Doctor when i grow up</p>
                </div>
                <div className="card text-start border-2 border-slate-400 my-4">
                    <p>Tirgrinya</p>
                    <p>{student.TigrinyaLevel}</p>
                    <p>Learning letters and slowly understanding how to pronounce them</p>
                </div>
                <div className="card text-start border-2 border-slate-400 my-4">
                    <p>Prayers</p>
                    <p>{student.Prayer}</p>
                    <p>I've been studying at Church and have a book that has all the Prayers.</p>
                </div>
                <div className="card text-start border-2 border-slate-400 my-4">
                    <p>Qidasse</p>
                    <p>{student.Qidasse}</p>
                    <p>I'm just starting out so just need to keep a food schedule to make progress</p>
                </div>
                <div className="card text-start border-2 border-slate-400 my-4">
                    <p>Bible</p>
                    <p>{student.BibleCertificate}</p>
                    <p>I'm just starting out so just need to keep a food schedule to make progress</p>
                </div>
            </div>
        </>
    )
}