export default (props) => {
	const elseChildren = props.children.filter((child) => {
		return child.type && child.type.name === "Else";
	})[0];

	const ifChildren = props.children.filter((child) => {
		return child !== elseChildren;
	})[0];

	if (props.test) {
		return ifChildren;
	} else if (elseChildren) {
		return elseChildren;
	} else {
		return false;
	}
};

export const Else = (props) => {
	return props.children;
};
