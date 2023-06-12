

const FamousInstractor = ({famous}) => {

    const {name, img} = famous;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-80" src={img} alt="Class" />
      </figure>
      
      <div className="card-body">
      <h2 className="card-title text-blue-950">{name}</h2>
        
      </div>
      
    </div>
    );
};

export default FamousInstractor;