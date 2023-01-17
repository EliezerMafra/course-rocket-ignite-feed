import { Header } from "./components/Header"
import { Post } from "./Post"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Eliezer'
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam consequuntur, sunt fuga doloribus dolor corrupti explicabo non magnam fugiat pariatur laudantium, eaque eos blanditiis voluptates tempora similique asperiores molestiae sapiente!'
          />
          <Post
            author='Paulo Muzi'
            content='Bora BIIIIRRRRLLLL'
          />
        </main>
      </div>
    </div>
  )
}

export default App

