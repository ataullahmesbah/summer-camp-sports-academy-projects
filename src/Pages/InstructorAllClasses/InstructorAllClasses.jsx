

const InstructorAllClasses = ({ instructorClass, index, handleDelete }) => {
    const { _id, email, image, name, price, available_seat, category } = instructorClass;
    return (
        <tr>
            <td>{index + 1}</td>
            <td><img className="w-20 h-10 rounded-full" src={image} alt="" /></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{price}</td>
            <td>{available_seat}</td>
            <td>{category}</td>





            <td><button onClick={() => handleDelete(_id)} className="btn btn-error btn-sm ">Delete</button>
            </td>
            <td><button className="btn btn-primary btn-sm ">Update</button></td>

        </tr>
    );
};

export default InstructorAllClasses;