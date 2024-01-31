import Appbar from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users"

export default function Dashboard(){
    return (
        <div className="bg-slate-50">
            <Appbar />
            <Balance />
            <Users />
        </div>
    )
}