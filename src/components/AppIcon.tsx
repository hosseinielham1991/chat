import { Icon, type IconProps } from "@iconify/react";

interface AppIconProps extends IconProps {
	tooltip?: string; // A new prop for the tooltip text
}

function AppIcon({ tooltip, ...props }: AppIconProps) {
	return (
		<abbr className="leading-[0]" title={tooltip}>
			{" "}
			{/* Using abbr tag with title attribute */}
			<Icon {...props} />
		</abbr>
	);
}

export default AppIcon;
