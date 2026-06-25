import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
// 부트스트랩 CSS 사용하고 커스텀은 App.css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchBox from "./components/SearchBox";
import MovieListHeading from "./components/MovieListHeading";
import ScrollContainer from "react-indiana-drag-scroll";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("title");
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || [],
  );

  //선호작을 로컬스토리지에 저장
  const saveToLocalStorage = (items) => {
    localStorage.setItem("favourites", JSON.stringify(items));
  };

  //선호작을 추가하기
  const addFavouriteMovie = (movie) => {
    if (favourites.some((f) => f.imdbID == movie.imdbID)) {
      alert("이미 등록되어있습니다");
      return;
    }
    const newList = [...favourites, movie];
    setFavourites(newList); //선호작 업데이트
    saveToLocalStorage(newList); //로컬스토리지에 저장
  };

  //선호작 제거하기
  const removeMovie = (movie) => {
    const newList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID,
    );
    setFavourites(newList);
    saveToLocalStorage(newList);
  };

  const getMovieRequest = async (searchValue) => {
    let url = "";
    if (searchType === "title") {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=2302757e`;
    } else if (searchType === "year") {
      url = `http://www.omdbapi.com/?s=movie&y=${searchValue}&apikey=2302757e`;
    }
    const response = await fetch(url);
    //console.log(response); //서버로 요청후 http 통신으로 받는 데이터
    const data = await response.json(); //자바스크립트 객체로 변환
    if (data.Search) setMovies(data.Search);
  };

  //getMovieRequest(); //리렌더링 될때마다 실행됨
  useEffect(() => {
    if (searchValue.length >= 2) {
      // 연도는 4자리이므로 기준을 조금 낮추거나 맞춰 조절
      getMovieRequest(searchValue);
    }
  }, [searchValue, searchType]);

  return (
    <div className="container-fluid movie-app">
      <div className="row align-items-center my-4">
        <MovieListHeading heading="영화 검색" />
        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchType={searchType}
          setSearchType={setSearchType}
        />
      </div>
      {/*       
  useEffect(() => {
    if (searchValue.length > 3) getMovieRequest(searchValue);
  }, [searchValue]); //검색어가 바뀔때마다 요청
  return (
    <div className="container-fluid movie-app">
      <div className="row align-items-center my-4">
        <MovieListHeading heading="영화 검색" />
        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchType={searchType}
          setSearchType={setSearchType}
        />
      </div> */}

      <MovieListHeading
        heading={`'${searchValue}' 검색결과 : ${movies.length}개`}
      />
      <ScrollContainer className="row scroll-cotainer">
        <MovieList
          movies={movies}
          handleClick={addFavouriteMovie}
          addMovie={true}
        />
      </ScrollContainer>

      <MovieListHeading heading={`나의 선호작 : ${favourites.length}개`} />
      <ScrollContainer className="row scroll-cotainer">
        <MovieList
          movies={favourites}
          handleClick={removeMovie}
          addMovie={false}
        />
      </ScrollContainer>
    </div>
  );
}
