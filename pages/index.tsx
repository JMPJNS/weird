import Layout from "../components/layouts/layout"

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Welcome to JMP's Website</h1>
        <h2>Contact Me</h2>
        <p>
          <ul className="no-list-style">
            <li>Discord: JMP#7777</li>
            <li>Github: <a href="https://github.com/JMPJNS">JMPJNS</a></li>
            <li>Telegram: <a href="https://t.me/JMPJNS">JMPJNS</a></li>
          </ul>
        </p>
      </div>
    </Layout>
  )
}
