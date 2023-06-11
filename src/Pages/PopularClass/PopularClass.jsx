

const PopularClass = ({ item }) => {
    const { image, name, available_seat, enrolled_student } = item;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-80" src={image} alt="Class" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-blue-950">{name}</h2>
      </div>
      <div className="lg:flex md:space-y-3 sm:space-y-3 items-center  pb-6 font-semibold justify-between px-5">
        <p>Available Seats: {available_seat}</p>
        <p className="">Enrolled Students: {enrolled_student}</p>
        </div>
    </div>
    );
};

export default PopularClass;