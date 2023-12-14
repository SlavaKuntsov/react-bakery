import NoOffers from 'components/Typography/NoOffers'

export default function CatalogGrid({ children, array }) {
	return array.length ? (
		<div className='catalogGrid grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 mt-20 mb-10 mx-12 sm:mx-20 md:mx-32 gap-12 sm:gap-10 md:gap-12 xl:gap-24'>
			{children}
		</div>
	) : (
		<NoOffers />
	)
}
