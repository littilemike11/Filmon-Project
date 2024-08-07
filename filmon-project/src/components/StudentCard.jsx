export default function StudentCard(props){
    return(
        <>
        <div className="card  bg-base-100 shadow-xl ">
            <div className="lg:flex items-center justify-between">
                <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
                </div>
                <div className="shadow-xl ">
                    Selome Halle
                </div>
                <div className="shadow-xl ">
                    GPA
                </div>
                <div className="shadow-xl ">
                    Prayer
                </div>
                <div className="shadow-xl ">
                    Qidasse
                </div>
                <div className="shadow-xl ">
                    Bible Certificate
                </div>
            </div>
            

        </div>
        </>
    )
}