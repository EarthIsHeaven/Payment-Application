import { useState } from "react";
import Button from "../components/Button";
import ButtonWarning from "../components/ButtonWarning";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin(){
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    return (
        <div className="bg-slate-200 flex justify-center items-center h-screen ">
            <div className="border bg-white p-5 rounded-lg">
                <Heading label={"Sign In"}/>
                <SubHeading label={"Enter your credential to access your account"}/>
                <InputBox onChange={e => {
                    setUsername(e.target.value);
                }} label={"Email "} placeholder={"thinley78@gmail.com"}/>
                <InputBox placeholder={"867249546"} type={"password"} onChange={e => {
                    setPassword(e.target.value);
                }} label={"Password "}/>
                <Button onPress={async () => {
                    const response = await axios({
                        method: 'post',
                        url: 'http://localhost:3000/api/v1/user/signin',
                        data: {
                            password: password,
                            username: username
                        }
                    })
                    localStorage.setItem("token", response.data.token);
                    navigate("/dashboard?id=" + response.data.id + "&name=" + response.data.firstName + "&balance=" + response.data.balance);
                }} label={"Sign In"}/>
                <ButtonWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}/>
            </div>
        </div>
    )
}