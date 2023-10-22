import classNames from "classnames";

export default function Title({ children, isMenuTitle = false }) {
	return (
		<h2 className={
			classNames(
				'title font-semibold inline sm:block w-full sm:w-auto text-brown',
				{ 'text-2xl sm:text-xl md:text-2xl 2xl:text-3xl text-start': isMenuTitle},
				{ 'text-2xl md:text-3xl 2xl:text-4xl text-center': !isMenuTitle},
			)
		}>
			{children}
		</h2>
	)
}
