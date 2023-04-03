import {Header} from './components/Header';
import {Sidebar} from './components/Sidebar';
import {Post, PostType } from './components/Post';

import './global.css';
import styles from './App.module.css';

// Estrutura do post
// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts: PostType[] = [
  {
      id: 1,
      author: {
          avatarUrl: "https://github.com/sullivandcesaris.png",
          name: "Sullivan Dcesaris", 
          role: "Web Developer"
      },
      content: [
          { type: 'paragraph', content:'Fala galeraa 👋'},
          { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          { type: 'link', content:'👉 jane.design/doctorcare'},
          // #novoprojeto
          // #nlw
          // #rocketseat
      ],
      publishedAt: new Date('2022-05-03 20:42:18'),
  },
  {
      id: 2,
      author: {
          avatarUrl: "https://github.com/diego3g.png",
          name: "Diego Fernandes", 
          role: "CTO @ Rocketseat"
      },
      content: [
          { type: 'paragraph', content:'Fala galeraa 👋'},
          { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          { type: 'link', content:'👉 jane.design/doctorcare'},
          // #novoprojeto
          // #nlw
          // #rocketseat
      ],
      publishedAt: new Date('2022-05-07 08:14:57'),
  },
  {
      id: 3,
      author: {
          avatarUrl: "https://github.com/maykbrito.png",
          name: "Mayk Brito", 
          role: "Educator @ Rocketseat"
      },
      content: [
          { type: 'paragraph', content:'Fala galeraa 👋'},
          { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          { type: 'link', content:'👉 jane.design/doctorcare'},
          // #novoprojeto
          // #nlw
          // #rocketseat
      ],
      publishedAt: new Date('2022-05-10 10:18:04'),
  },
]

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </div>
  )
}