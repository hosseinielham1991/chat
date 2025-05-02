
export const getFirstLetter = (word: string) => {
	return word ? word[0].toUpperCase() : "A";
};


export function Avatar({
    name = "No Name",
    className,
}: {
    name?: string;
    className?: string;
}) {
    const [firstname, lastname] = name.split(" ");

    return (
		<div className={"w-11 h-11 rounded-full flex justify-center items-center "+className}>
            {getFirstLetter(firstname)}{getFirstLetter(lastname)}
        </div>
	);
}
