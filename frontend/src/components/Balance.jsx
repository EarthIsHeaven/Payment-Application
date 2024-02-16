import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import axios from "axios";

export const Balance = () => {
    const location = useLocation();
    const [balance, setBalance] = useState("")

    const navigate = useNavigate();

    useEffect( () => {
        const headers = {
            "authorization": `Bearer ${localStorage.getItem("token")}`
        }

        axios.get("http://localhost:3000/api/v1/account/balance", {
            params: {
                userId: location.state.id
            },
            headers: headers
        }).then(response => {
            setBalance(response.data.balance);
          })
    }, [])

    return (
        <div className="flex justify-between">
            <div className="flex h-14">
                <div className="ml-7 flex flex-col justify-center">
                    Your balance:
                </div>
                <div className="text-xl font-bold text-blue-600 ml-3 flex flex-col justify-center">
                    Rs {parseFloat(balance).toFixed(2)}
                </div>
            </div>

            <div className="mr-3 flex flex-col justify-center">
                <button onClick={() => {
                    localStorage.clear();
                    navigate("/");
                }} type="button" className="mb-2 text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Logout</button>
            </div>
        </div>
    )
}