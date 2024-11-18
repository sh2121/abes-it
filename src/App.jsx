import MovieList from "./MovieList.jsx";
const App = () => {
  return (
    <div>
      <h1 style={
        {backgroundColor: "black",
        color:"white",
        fontsize:"20px",
        textAlign:"center"
        }}>Netflix Clone App</h1>
        <MovieList />

    </div>
  )
}

export default App
