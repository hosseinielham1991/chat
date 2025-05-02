
import React, { useContext } from "react";
import AppIcon from "../../../components/AppIcon";

import { cva } from "class-variance-authority";
import { SendMessageAgent } from "../../../services/SendMessageService";
import { WebappContext } from "../Webapp";
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

    const [value, setValue] = React.useState("");
    const { selectedClient } = useContext(WebappContext);

    const clickSend = () => {
        if (selectedClient !== null && selectedClient !== "") {
            SendMessageAgent({ clientId: selectedClient, message: value });
            setValue("");
        }
    
    }

    return <div className="gap-2 flex flex-row">
        <div className="h-16 flex-1">
            <div className="border border-seprator shadow-box items-center rounded-xl flex flex-row h-full px-2 gap-2 ">
                <div className="border-l border-seprator h-full items-center justify-center flex flex-row text-primary w-[40px] ">
                    <AppIcon icon="mdi:bookmark-minus" fontSize={20}></AppIcon>
                </div>
                <div className="flex-1 flex flex-row h-full items-center gap-1 ">
                    <input type="text" className="bg-transparent text-xs placeholder:text-black-50 focus:outline-none w-full h-full px-2" placeholder="اینجا بنویسید!" onChange={(e) => setValue(e.target.value)} value={value}></input>
                </div>
                <div onClick={clickSend} className={buttonVariants({ variant: value === "" ? "disabled" : "default" }) + " gap-1 flex flex-row shadow-box text-primary-foreground flex flex-col border text-xs rounded-full justify-center border-mutebtn-seperator justify-between bg items-center h-8 px-2"}>
                    <label>ارسال پیام</label>
                    <AppIcon icon="iconamoon:send-fill" className="rotate-180" fontSize={20}></AppIcon>
                </div>
            </div>
        </div>

    </div>

}

export default TextBox;