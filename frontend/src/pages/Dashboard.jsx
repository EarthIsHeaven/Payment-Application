import { useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users"
import { useEffect } from "react";

export default function Dashboard(){
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem("token")) {
            navigate("/signup");
        }
    })

    return (
        <div className="bg-slate-50">
            <Appbar />
            <Balance />
            <Users />
        </div>
    )
}