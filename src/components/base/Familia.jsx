import React from "react";

export default (props) => {
	return (
		<div>
			{/* {React.cloneElement(props.children, props)} */}

			{props.children.map((child, i) => {
				return React.cloneElement(child, { ...props, key: i });
			})}
		</div>
	);
};
