import PropTypes from 'prop-types';

export default function Layout ({ children }) {
	
	return (
		<div className='layout bg-white w-full h-full overflow-x-hidden overflow-y-auto'>
			{children}
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.element
}