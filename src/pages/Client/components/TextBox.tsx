
import React from "react";
import AppIcon from "../../../components/AppIcon";
import { SendMessageClient } from "../../../services/SendMessageService";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
    "",
    {
        defaultVariants: {
            variant: "default",
        },
        variants: {
            variant: {
                default: "bg-primary",
                disabled: "bg-mutebtn",
            }
        },
    },
);

const TextBox = () => {


    const [value, setValue] = React.useState("")
    const clickSend = () => {
        SendMessageClient({ message: value });
        setValue("");
    }

    return <div className="gap-2 flex flex-row">
        <div className="h-11 flex-1">
            <div className="border border-seprator shadow-box rounded-xl  h-full ">
                <div className="flex flex-row h-full items-center gap-1 px-2 py-2 ">
                    <AppIcon icon="raphael:mic" fontSize={20}></AppIcon>
                    <input type="text" className="bg-transparent text-xs placeholder:text-black-50 focus:outline-none w-full h-full px-2" placeholder="اینجا بنویسید..." onChange={(e) => setValue(e.target.value)} value={value}></input>
                    <AppIcon icon="fa-regular:smile" fontSize={20}></AppIcon>
                    <AppIcon icon="akar-icons:attach" fontSize={20}></AppIcon>
                </div>
            </div>
        </div>
        <div onClick={clickSend} className={buttonVariants({ variant: value === "" ? "disabled" : "default" }) + " shadow-box text-primary-foreground flex flex-col border rounded-full justify-center border-mutebtn-seperator justify-between bg items-center rotate-180 w-11 h-11"}>
            <AppIcon icon="iconamoon:send-fill" fontSize={24}></AppIcon>
        </div>
    </div>

}

export default TextBox;