import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

function Button({
	to,
	href,
	type,
	 backXL,
	sizeXL = false,
	primary = false,
	bold = false,
	outline = false,
	text = false,
	rounded = false,
	disabled = false,
	small = false,
	large = false,
	facebook = false,
	google = false,
	children,
	className,
	leftIcon,
	rightIcon,
	onClick,
	src,
	...passProps
}) {
	let Comp = "button";
	const props = {
		onClick,
		...passProps,
	};

	// Remove event listener when btn is disabled
	if (disabled) {
		Object.keys(props).forEach((key) => {
			if (key.startsWith("on") && typeof props[key] === "function") {
				delete props[key];
			}
		});
	}

	if (to) {
		props.to = to;
		Comp = Link;
	} else if (href) {
		props.href = href;
		Comp = "a";
	}

	const classes = cx("wrapper", {
		[className]: className,
		backXL,
		sizeXL,
		primary,
		facebook,
		google,
		bold,
		outline,
		text,
		disabled,
		rounded,
		small,
		large,
	});

	return (
		<Comp className={classes} {...props}>
			<span className={cx("title")}>{children}</span>
		</Comp>
	);
}

export default Button;
