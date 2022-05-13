import './App.css'

const vertical = 'https://images.pexels.com/photos/8640506/pexels-photo-8640506.jpeg'
const horizontal = 'https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg'

function App() {
  return (
    <div className="App">
      <div>
        <h1>Imagem Vertical</h1>
        <section>
          <h2>object-fit: fill</h2>
          <img className="fill" src={vertical} />

          <img className="fill narrow" src={vertical} />

          <h2>object-fit: contain</h2>
          <img className="contain" src={vertical} />

          <img className="contain narrow" src={vertical} />

          <h2>object-fit: cover</h2>
          <img className="cover" src={vertical} />

          <img className="cover narrow" src={vertical} />

          <h2>object-fit: none</h2>
          <img className="none" src={vertical} />

          <img className="none narrow" src={vertical} />

          <h2>object-fit: scale-down</h2>
          <img className="scale-down" src={vertical} />

          <img className="scale-down narrow" src={vertical} />
        </section>
      </div>

      <div>
        <h1>Imagem Horizontal</h1>
        <section>
          <h2>object-fit: fill</h2>
          <img className="fill" src={horizontal} />

          <img className="fill narrow" src={horizontal} />

          <h2>object-fit: contain</h2>
          <img className="contain" src={horizontal} />

          <img className="contain narrow" src={horizontal} />

          <h2>object-fit: cover</h2>
          <img className="cover" src={horizontal} />

          <img className="cover narrow" src={horizontal} />

          <h2>object-fit: none</h2>
          <img className="none" src={horizontal} />

          <img className="none narrow" src={horizontal} />

          <h2>object-fit: scale-down</h2>
          <img className="scale-down" src={horizontal} />

          <img className="scale-down narrow" src={horizontal} />
        </section>
      </div>
    </div>
  )
}

export default App
