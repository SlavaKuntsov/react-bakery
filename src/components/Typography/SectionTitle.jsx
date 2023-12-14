import classNames from "classnames";

export default function SectionTitle ({ children }) {
	return (
		<h2 className={
			classNames(
				`title font-semibold block w-full sm:w-auto text-brown
				text-3xl sm:text-3xl md:text-4xl 2xl:text-6xl text-center mt-5`,
			)
		}>
			{children}
		</h2>
	)
}

