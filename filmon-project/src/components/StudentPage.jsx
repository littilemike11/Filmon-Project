export default function StudentPage(){
    return(
        <>
        {/* navbar */}
        <div className="navbar bg-base-100">
           
            <div className="flex-1 gap-2">
                <div className="flex">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div>
                        <div className="text-xl">
                        Selome Haile
                        </div>
                        <div className="text-xs">
                            I want to live a godly life and be as holy as possible by God's Grace
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
            <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
             <div className="flex-none">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
        </div>

        {/* Focus */}
        <div className="text-xl">FOCUS</div>
        <div>
            <div className="card text-start border-2 border-grey-100">
                <p>School</p>
                <p>8th Grade | 3.8 | East Middle Scchool</p>
                <p>Focusing on my grades and want to be a Dctor when i grow up</p>
            </div>
            <div className="card text-start border-2 border-grey-100">
                <p>Tirgrinya</p>
                <p>level 1</p>
                <p>Learning letters and slowly understanding how to pronouce them</p>
            </div>
            <div className="card text-start border-2 border-grey-100">
                <p>Prayers</p>
                <p>prayer text</p>
                <p>I've been studying at Church and have a book that has all the Prayers.</p>
            </div>
            <div className="card text-start border-2 border-grey-100">
                <p>Qidasse</p>
                <p>Kulu Zegebra</p>
                <p>I'm just starting out so just need to keep a food schedule to make progress</p>
            </div>
        </div>
        </>
    )
}