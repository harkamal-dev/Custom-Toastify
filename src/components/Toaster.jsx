import React from "react";
import { ANIMATION, VARIANTS, colorIconMapper } from "../utils/constants";
import { RxCross2 } from "react-icons/rx";

const Toaster = ({
	variant = VARIANTS.success,
	animation = ANIMATION.pop,
	message = "This is dummy message",
	setToaster,
	id
}) => {
	const Icon = colorIconMapper[variant].icon;
	return (
		<div style={{ background: colorIconMapper[variant].bg }} className={`toaster ${animation}`}>
			<Icon />
			<p>{message}</p>
			<RxCross2 className="cancelBtn" role="button" onClick={() => setToaster(id)} />
		</div>
	);
};

export default Toaster;
