const SearchBox = ({searchValue, setSearchValue}) => {
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
	return (<>
<div className='col col-sm-25 me-1'>

			<input
				className='form-control'
				value={searchValue}
				onChange={handleChange}
				placeholder='영화 검색...'
			/>
      </div>
      <div>
      <button>영화제목</button>
      <button>개봉연도</button>
		</div>
    </>
	);
};
​
export default SearchBox;