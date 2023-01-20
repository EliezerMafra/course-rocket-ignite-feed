import { Header } from "./components/Header"
import { Post, PostProps } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/eliezermafra.png',
      name: 'Eliezer Mafra',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link',content: "👉 jane.design/doctorcare"},
      { type: 'link', content: "#novoprojeto "},
      { type: 'link', content: "#nlw "},
      { type: 'link', content: "#rocketseat"}
    ],
    publishedAt: new Date('2023-01-18 08:21:35')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocket'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link',content: "👉 jane.design/doctorcare"},
      { type: 'link', content: "#novoprojeto "},
      { type: 'link', content: "#nlw "},
      { type: 'link', content: "#rocketseat"}
    ],
    publishedAt: new Date('2023-01-18 08:21:35')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Teacher @ Rocket'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link',content: "👉 jane.design/doctorcare"}
    ],
    publishedAt: new Date('2022-12-28 16:30:35')
  },
  {
    id: 4,
    author: {
      avatarUrl: 'https://www.otempo.com.br/image/contentid/policy:1.2705824:1658860848/293378206-715399016425842-188471525293135954-n-jpg.jpg?f=3x2&w=1224',
      name: 'Paulo Muzy',
      role: 'Doctor'
    },
    content: [
      { type: 'paragraph', content: 'BORA BIRLLLLL 💪💪💪'},
      { type: 'link',content: "👉  jane.design/doctorcare"}
    ],
    publishedAt: new Date('2023-1-17 16:30:35')
  },

] as PostProps[];

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}

export default App

