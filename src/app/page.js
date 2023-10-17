import FilmList from "./components/FilmList";

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)

  const anime = await response.json()

  return (
   <div>
      <h1>topanime</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
        {anime.data.map(data => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <FilmList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Home
