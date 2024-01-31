import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useSearchParams } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const balance = searchParams.get("balance");
    const name = searchParams.get("name");

    //Add debouncing in real world
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
         .then(response => {
            const allUsers = response.data.user;
            const otherUsers = allUsers.filter((allUser) => allUser._id != id);
            setUsers(otherUsers);
         })
    }, [filter])

    return (
        <div className="mx-7 mt-4">
            <div className="h-10 text-center mb-3 text-green-900 font-bold text-3xl">
                Send Money to
            </div>
            <div>
                <input onChange={e => {
                    setFilter(e.target.value)
                }} className="p-2 rounded-md border w-full" placeholder="Search . . ."></input>
            </div>
            <div className="bg-white mx-10 rounded-xl p-11 grid grid-cols-4 gap-2 text-center my-10">
                { users.map(user => <User name={name} balance={balance} id={id} user={user}/>) }
            </div>
        </div>
    )
}

function User({user, id, balance, name}) {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <div className="flex justify-center">
                    <div className="rounded-full h-12 w-12 text-white bg-blue-900 flex justify-center mt-1 mr-2">
                        {/* Center code */}
                        <div className="flex flex-col justify-center h-full text-xl"> 
                            {user.firstName[0].toUpperCase()}
                        </div>
                    </div>
                </div>

                <div className="mt-2 flex flex-col justify-center mr-2 text-gray-700">
                    {user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1) +" "}
                    {user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)} 
                </div>
            </div>
            <div className="mt-2">
                <button 
                    onClick={(e) => {
                        navigate("/sendMoney?toId=" + user._id + "&toName=" + user.firstName + "&id=" + id +"&balance=" + balance +"&name=" + name);
                    }} 
                    type="button" 
                    className=" mb-2 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Send Money
                </button>
            </div>
        </div>
    )
}