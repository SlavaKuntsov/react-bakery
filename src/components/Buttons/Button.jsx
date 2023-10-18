import classNames from "classnames";
import { Link } from "react-router-dom";


export default function Button ({ isDark = 'true', to = '/', position, children }) {
	
	return (
		<Link
			to={to}
			className={
				classNames(
					'px-6 lg:px-8 py-[10px] rounded-md text-lg lg:text-xl hover:shadow-xl transition-all shadow-none duration-300 ml-auto sm:ml-0',
					{'bg-[#4e2224] hover:bg-[#4a1d1fcf] sm:bg-[#4a1d1fcf] sm:hover:bg-brown text-white active:bg-[#4a1d1fd6] shadow-2xl' : isDark},
					{'bg-transparent border border-[#4A1D1F]' : !isDark},
					{'ml-auto' : position === 'right'},
					{'mr-auto' : position === 'left'},
					{'mx-auto' : position === 'center'},
				)
			}
		>
			{children}
		</Link>
	)
}

