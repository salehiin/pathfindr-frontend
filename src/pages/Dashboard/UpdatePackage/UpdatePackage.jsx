import { useLoaderData } from "react-router-dom";
import SectionHeader from "../../Shared/Components/SectionHeader/SectionHeader";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdatePackage = () => {
    const { _id, tripTitle, tourType, location, duration, groupSize, guideName, cost, image, highlights, details } = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send data to server with img url
            const packageItem = {
                tripTitle: data.tripTitle,
                tourType: data.tourType,
                location: data.location,
                duration: data.duration,
                groupSize: data.groupSize,
                guideName: data.guideName,
                cost: parseFloat(data.cost),
                image: res.data.data.display_url,
                highlights: data.highlights,
                details: data.details
            }
            // 
            const packageRes = await axiosSecure.patch(`/packages/${_id}`, packageItem);
            console.log(packageRes.data)
            if (packageRes.data.modifiedCount > 0) {
                // show success popup
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.tripTitle} is updated to the packages`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('With image url', res.data);
    };


    return (
        <div className="text-center">
            <SectionHeader
                heading="Update A Package"
            ></SectionHeader>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>


                    <div className="flex justify-around">
                        {/* Package Name */}
                        <label className="form-control w-full max-w-xs my-[9px]">
                            <div className="label">
                                <span className="label-text">Package*</span>
                            </div>
                            <input
                                type="text"
                                defaultValue={tripTitle}
                                placeholder="Package name"
                                {...register("tripTitle", { required: true })}
                                className="input input-bordered w-full max-w-xs" />

                        </label>
                        {/* Type of package */}
                        <label className="form-control w-full max-w-xs my-[9px]">
                            <div className="label">
                                <span className="label-text">Package Type*</span>
                            </div>
                            <select defaultValue={tourType} {...register('tourType', { required: true })}
                                className="select select-bordered w-full max-w-xs">
                                <option disabled value="default">Select a category</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Wildlife">Wildlife</option>
                                <option value="Beach">Beach</option>
                                <option value="Cultural">Cultural</option>
                                <option value="Historical">Historical</option>
                            </select>

                        </label>

                    </div>
                    <div className="flex justify-around">
                        {/* location */}
                        <label className="form-control w-full max-w-xs my-[9px]">
                            <div className="label">
                                <span className="label-text">Location*</span>
                            </div>
                            <input
                                type="text"
                                defaultValue={location}
                                placeholder="Location"
                                {...register("location", { required: true })}
                                className="input input-bordered w-full max-w-xs" />

                        </label>
                        {/* duration */}
                        <label className="form-control w-full max-w-xs my-[9px]">
                            <div className="label">
                                <span className="label-text">Duration*</span>
                            </div>
                            <input
                                type="text"
                                defaultValue={duration}
                                placeholder="Duration"
                                {...register("duration", { required: true })}
                                className="input input-bordered w-full max-w-xs" />

                        </label>
                    </div>
                    <div className="flex justify-around">
                        {/* Group Size */}
                        <label className="form-control w-full max-w-xs my-[9px]">
                            <div className="label">
                                <span className="label-text">Group Size*</span>
                            </div>
                            <input
                                type="text"
                                defaultValue={groupSize}
                                placeholder="Group Size"
                                {...register("groupSize", { required: true })}
                                className="input input-bordered w-full max-w-xs" />

                        </label>

                        {/* Guide */}
                        <label className="form-control w-full max-w-xs my-[9px]">
                            <div className="label">
                                <span className="label-text">Guide*</span>
                            </div>
                            <input
                                type="text"
                                defaultValue={guideName}
                                placeholder="Guide"
                                {...register("guideName", { required: true })}
                                className="input input-bordered w-full max-w-xs" />

                        </label>

                    </div>


                    <div className="flex justify-around">



                        {/* cost  */}
                        <label className="form-control w-full max-w-xs my-[9px]">
                            <div className="label">
                                <span className="label-text">Total Cost*</span>
                            </div>
                            <input
                                type="text"
                                defaultValue={cost}
                                placeholder="Total Cost"
                                {...register("cost", { required: true })}
                                className="input input-bordered w-full max-w-xs" />

                        </label>
                        {/* Image */}
                        <div className="form-control w-full max-w-xs my-[9px]">
                            <div className="label">
                                <span className="label-text">Image*</span>
                            </div>
                            <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="flex justify-around">
                        {/* highlights */}
                        <label className="form-control w-full max-w-[83%] my-[9px]">
                            <div className="label">
                                <span className="label-text">Attractions*</span>
                            </div>
                            <div className="flex gap-6">
                                <input
                                    type="text"
                                    defaultValue={highlights[0]}
                                    placeholder="Attraction 1"
                                    {...register("highlights[0]", { required: true })}
                                    className="input input-bordered w-full" />

                                <input
                                    type="text"
                                    defaultValue={highlights[1]}
                                    placeholder="Attraction 2"
                                    {...register("highlights[1]")}
                                    className="input input-bordered w-full"
                                />

                                <input
                                    type="text"
                                    defaultValue={highlights[2]}
                                    placeholder="Attraction 2"
                                    {...register("highlights[2]")}
                                    className="input input-bordered w-full"
                                />
                            </div>

                        </label>

                        {/* image */}
                        {/* <label className="form-control w-full max-w-xs my-[9px]">
                            <div className="label">
                                <span className="label-text">Image*</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Package name"
                                {...register("tripTitle")}
                                className="input input-bordered w-full max-w-xs" />

                        </label> */}

                    </div>
                    <div className="flex justify-around">
                        {/* Package Details */}
                        <label className="form-control w-full max-w-[83%] my-[9px]">
                            <div className="label">
                                <span className="label-text">Package Details*</span>
                            </div>
                            <textarea defaultValue={details} {...register('details', { required: true })} className="textarea textarea-bordered h-24" placeholder="Details"></textarea>

                        </label>

                        {/* cost  */}

                    </div>

                    <button className="btn">

                        Update A Package
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdatePackage;