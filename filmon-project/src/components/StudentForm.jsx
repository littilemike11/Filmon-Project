export default function StudentForm() {
    return (
        <>
            <div>Student Enrollment</div>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">First Name</span>
                </div>
                <input type="text" placeholder="First Name" className="input input-bordered w-full max-w-xs" />
                <div className="label">
                    <span className="label-text">Last Name</span>
                </div>
                <input type="text" placeholder="Last Name" className="input input-bordered w-full max-w-xs" />
                <div className="label">
                    <span className="label-text">GPA</span>
                </div>
                <input type="Number" max={4.0} min={0} step={.1} placeholder="GPA" className="input input-bordered w-full max-w-xs" />

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Prayers</span>
                    </div>
                    <select className="select select-bordered">
                        <option disabled selected>Pick one</option>
                        <option>Star Wars</option>
                        <option>Harry Potter</option>
                        <option>Lord of the Rings</option>
                        <option>Planet of the Apes</option>
                        <option>Star Trek</option>
                    </select>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Certificate</span>
                    </div>
                    <select className="select select-bordered">
                        <option disabled selected>Pick one</option>
                        <option>Certificate 1</option>
                        <option>Certificate 2</option>
                        <option>Certificate 3</option>
                        <option>Certificate 4</option>
                        <option>Certificate 5</option>
                    </select>
                </label>
            </label>
        </>
    )
}