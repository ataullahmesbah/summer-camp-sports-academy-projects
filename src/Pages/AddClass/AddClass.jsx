import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const img_hosting_token = import.meta.env.VITE_Image;


const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const hosting_img_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(hosting_img_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;

                    const { name, price, category, available_seat, instructor_name, email } = data;
                    const newClass = { name, price: parseFloat(price), category, available_seat: parseFloat(available_seat), image: imgURL, email, instructor_name }

                    console.log(newClass);
                    axiosSecure.post('/classes', newClass)
                        .then(data => {
                            console.log('after posting new classes', data.data);
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-4">

                    {/* class name */}
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name*</span>

                        </label>
                        <input type="text" placeholder="Class Name"
                            {...register("name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />

                    </div>

                    {/* instructor name */}
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name*</span>

                        </label>
                        <input type="text" placeholder="Instructor Name"
                            {...register("instructor_name", { required: true, maxLength: 120 })}
                            defaultValue={user?.displayName}
                            className="input input-bordered w-full " />

                    </div>
                </div>
                <div className="flex gap-4 my-4">

                    {/* available seats */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seats*</span>

                        </label>
                        <input type="number" {...register("available_seat", { required: true })} placeholder="Available Seats" className="input input-bordered w-full " />


                    </div>

                    {/* price */}

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>

                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />

                    </div>
                </div>

                <div className="flex gap-4">

                    {/* instructor email  */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">E-mail*</span>

                        </label>
                        <input type="text" placeholder="Instructor E-mail"
                            {...register("email", { required: true, maxLength: 120 })}
                            defaultValue={user?.email}
                            className="input input-bordered w-full " />

                    </div>

                    {/* category name */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Category*</span>

                        </label>
                        <input type="text" placeholder="Sports Category"
                            {...register("category", { required: true, maxLength: 120 })}

                            className="input input-bordered w-full " />

                    </div>
                </div>


                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text font-semibold">Classes Image*</span>

                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />

                </div>
                <input className="btn btn-sm btn-secondary mt-2" type="submit" value="Add New Class" />
            </form>
        </div>
    );
};

export default AddClass;