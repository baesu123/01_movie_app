const SearchBox = ({
  searchValue,
  setSearchValue,
  searchType,
  setSearchType,
}) => {
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div className="col col-sm-4 me-1">
        <input
          className="form-control"
          value={searchValue}
          onChange={handleChange}
          // 현재 검색 모드에 따라 힌트 메시지 변경
          placeholder={
            searchType === "title"
              ? "영화제목 검색..."
              : "개봉연도 검색 (예: 2024)..."
          }
        />
      </div>
      <div className="col">
        {/* 영화제목 버튼 클릭 시 'title'로 변경 */}
        <button
          className={`btn ${searchType === "title" ? "btn-primary" : "btn-secondary"} me-2`}
          onClick={() => setSearchType("title")}
        >
          영화제목
        </button>
        {/* 개봉연도 버튼 클릭 시 'year'로 변경 */}
        <button
          className={`btn ${searchType === "year" ? "btn-primary" : "btn-secondary"}`}
          onClick={() => setSearchType("year")}
        >
          개봉연도
        </button>
      </div>
    </>
  );
};

export default SearchBox;
