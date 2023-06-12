

const AdminAllClassDetails = ({ allClasses, index }) => {
  const { _id, available_seat, price, name, image, instructor_name } = allClasses;
  return (
    <tr>
      <td>{index + 1}</td>
      <td><img className="w-20 h-10 rounded-full" src={image} alt="" /></td>
      <td>{name}</td>
      <td>{instructor_name}</td>
      <td>{available_seat}</td>
      <td>{price}</td>
      <td>
        <div className="flex gap-2">
          <button className="btn btn-outline btn-primary btn-sm">Pending</button>
          <button className="btn btn-outline btn-secondary btn-sm">Approved</button>
          <button className="btn btn-outline btn-accent btn-sm">Denied</button>

        </div>
      </td>




    </tr>
  );
};

export default AdminAllClassDetails;