
import { cva } from "class-variance-authority";
import { Avatar } from "./Avatar";
import moment from "jalali-moment";

const cardMessageVariants = cva(
    "",
    {
        defaultVariants: {
            variant: "agent",
        },
        variants: {
            variant: {
                agent: "bg-primary text-primary-foreground rounded-bl-none  ",
                client: "bg-box border-seprator border rounded-br-none",
            }
        },
    },
);

const convertToPersianTime = (isoTime: string) => {
    return moment(isoTime)
        .locale("fa")
        .utcOffset(3.5)
        .format("hh:mm A");
};

export function CardMessage({
    time = "",
    variant = "agent",
    avatar = false,
    message = "",
}: {
    variant?: "agent" | "client";
    message?: string;
    avatar?: boolean;
    time?: string;
}) {

    return (
        <div className={`w-full flex items-center  gap-2 ${variant === "agent" ? "justify-start flex-row-reverse " : "justify-start flex-row"} `}>
            {avatar && variant !== "agent" && <Avatar className="bg-primary/50 !w-8 !h-8 text-sm  "></Avatar>}
            <div className={"size-fit max-w-[60%] text-sm p-2 rounded-lg box-shadow overflow-x-scroll " + cardMessageVariants({ variant })}>
                {message}
            </div>
         {time !== "" && <label className={`text-xs `}>{convertToPersianTime(time)}</label>} 
        </div>
    );
}
