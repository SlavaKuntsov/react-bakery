import classNames from "classnames";
import { Link } from "react-router-dom";


export default function Button ({ isDark, to, children }) {
	
	return (
		<Link
			to={to}
			className={
				classNames(
					'px-6 lg:px-8 py-[10px] rounded-md text-base lg:text-xl hover:shadow-xl transition-all shadow-none duration-300',
					{'bg-brown hover:bg-[#3c1719] text-[#FBEDCD] active:bg-[#4a1d1fd6]' : isDark},
					{'bg-transparent border border-[#4A1D1F]' : !isDark},
				)
			}
		>
			{children}
		</Link>
	)
}

