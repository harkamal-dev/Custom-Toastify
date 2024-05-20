import { SiTicktick } from "react-icons/si";
import { MdErrorOutline } from "react-icons/md";

const VARIANTS = {
	success: "success",
	alert: "alert",
	warning: "warning",
	error: "error",
};

const POSITIONS = {
	topLeft: "top-left",
	topRight: "top-right",
	bottomRight: "bottom-right",
	bottomLeft: "bottom-left",
};

const ANIMATION = {
	pop: "pop",
	slide: "slide",
};

const colorIconMapper = {
	[VARIANTS.success]: {
		bg: "green",
		icon: SiTicktick,
	},
	[VARIANTS.warning]: {
		bg: "rgb(215, 215, 0)",
		icon: SiTicktick,
	},
	[VARIANTS.error]: {
		bg: "red",
		icon: MdErrorOutline,
	},
};

export { VARIANTS, POSITIONS, ANIMATION, colorIconMapper };
