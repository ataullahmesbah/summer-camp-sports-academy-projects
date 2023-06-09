
const AllClasses = ({ allClass }) => {
    const { image, name, instructor_name, available_seat, price, } = allClass;
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{instructor_name}</p>
                <p>{available_seat}</p>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Enroll Now</button>
                </div>
            </div>
        </div>



    );
};

export default AllClasses;