const Pagination = ({pagesNumbers, changePage, page}) => {
    return (<div className='page-wrapper'>
        {pagesNumbers.map((item) => (
            <span
                className={page !== item ? 'page-button' : 'page-button page-current'}
                key={item}
                onClick={() => changePage(item)}
            >
                {item}
            </span>
        ))}
    </div>)
}
export default Pagination