import PropTypes from 'prop-types';

export default function Layout ({ children }) {
	
	return (
		<div className='layout bg-slate-100 w-full h-full'>
			{children}
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.element
}