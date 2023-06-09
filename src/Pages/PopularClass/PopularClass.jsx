

const PopularClass = ({ item }) => {
    const { image, name, available_seat, enrolled_student } = item;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Class" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Available Seats: {available_seat}</p>
        <p>Enrolled Students: {enrolled_student}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    );
};

export default PopularClass;