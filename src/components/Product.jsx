import React from 'react';
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Product = ({ sport, sports, setSports }) => {
    const { _id, name, quantity, price, details, photo } = sport;

    const handleDelete = id => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/sports/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remaining = sports.filter(sport => sport._id !== id);
                        setSports(remaining);
                    })
            }
        });


    }

    return (
        <div className="card bg-base-100 border border-gray-200">
            <div className="card-body">
                <div className='flex justify-between items-center'>
                    <h2 className="card-title">{name}</h2>
                    <div className='flex gap-2'>
                        <Link to={`/updateProduct/${_id}`}>
                            <button className='btn px-2'>
                                <MdEdit className='w-5 h-5 text-yellow-500'></MdEdit>
                            </button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className='btn px-2'>
                            <MdDelete className='w-5 h-5 text-red-500'></MdDelete>
                        </button>
                    </div>
                </div>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <small>{details}</small>
            </div>
            <figure>
                <img className='w-full h-80 object-cover'
                    src={photo}
                    alt="Shoes" />
            </figure>
        </div>
    );
};

export default Product;