import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import Swal from 'sweetalert2';

const Users = () => {
    const loadUsers = useLoaderData();
    const [users, setUsers] = useState(loadUsers)

    // const { name, email, address, photo, creationTime } = users;

    const handleUserDelete = id => {
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
                fetch(`http://localhost:3000/users/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    return (
        <div className='my-24'>
            <h2 className='text-center text-2xl md:text-5xl font-semibold'>Users Count : {loadUsers.length}</h2>
            <p className='text-center my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore provident culpa, cum labore, veritatis quisquam.</p>
            <div className="overflow-x-auto my-12">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Creation Date</th>
                            <th>Last Sign In</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {
                        users.map(user => <tbody key={user._id}>
                            {/* row 1 */}
                            <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm opacity-50">{user.address}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.email}
                                    <br />
                                    <span className="badge badge-ghost badge-sm mt-2"><small>Desktop Support Technician</small></span>
                                </td>
                                <td>{user.creationTime}</td>
                                <th>
                                    <p className='font-normal'>Hello</p>
                                </th>
                                <th>
                                    <button className='btn px-2'>
                                        <MdModeEditOutline className='w-5 h-5 text-yellow-500'></MdModeEditOutline>
                                    </button>
                                </th>
                                <th>
                                    <button onClick={() => handleUserDelete(user._id)} className='btn px-2'>
                                        <MdDeleteForever className='w-5 h-5 text-red-500'></MdDeleteForever>
                                    </button>
                                </th>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Users;