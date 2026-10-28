import { useState } from 'react'
import './App.css'

const skills = [
  { name: 'Git', done: true },
  { name: 'GitHub', done: true },
  { name: 'React (Vite)', done: true },
  { name: 'Cloudflare Deploy', done: true },
  { name: 'CI/CD', done: false },
  { name: 'Eigene Domain', done: false },
]

function Skill({ name, done }) {
  return (
    <li className={done ? 'skill done' : 'skill'}>
      {done ? '✅' : '⏳'} {name}
    </li>
  )
}

function App() {
  const [likes, setLikes] = useState(0)

  return (
    <main className="page">
      <header className="hero">
        <h1>Hallo, ich bin Minh 👋</h1>
        <p>Ich lerne Webentwicklung mit Git, React und Cloudflare.</p>
      </header>

      <section className="card">
        <h2>Über mich</h2>
        <p>Hier schreibe ich ein paar Sätze über mich.</p>
      </section>

      <section className="card">
        <h2>Was ich lerne</h2>
        <ul className="skills">
          {skills.map((s) => (
            <Skill key={s.name} name={s.name} done={s.done} />
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>Projekte</h2>
        <ul>
          <li>
            <a href="https://github.com/minhphuongpham615-sketch/my-react-app">
              my-react-app auf GitHub
            </a>
          </li>
        </ul>
      </section>

      <footer className="footer">
        <button onClick={() => setLikes(likes + 1)}>❤️ {likes}</button>
        <p>Gebaut mit React und Cloudflare</p>
      </footer>
    </main>
  )
}

export default App