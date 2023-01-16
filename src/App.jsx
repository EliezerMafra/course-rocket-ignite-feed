import { Header } from "./components/Header"
import { Post } from "./Post"

import './styles.css'

function App() {

  return (
    <div>
      <Header />
      <Post 
        author='Eliezer'
        content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam consequuntur, sunt fuga doloribus dolor corrupti explicabo non magnam fugiat pariatur laudantium, eaque eos blanditiis voluptates tempora similique asperiores molestiae sapiente!'
      />
      <Post 
        author='Paulo Muzi'
        content='Bora BIIIIRRRRLLLL'
      />
    </div>
  )
}

export default App

