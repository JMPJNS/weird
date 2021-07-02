import Head from "next/head"
import Link from 'next/link'
import {PartialUser} from "../../models/user";
import {NextPageContext} from "next";
import getCurrentUser from "../../helpers/getCurrentUser";

const Layout = (props: {user?: PartialUser, children: any}) => {
  console.log(props.user)
  return (
    <div>
        <Head>
          <title>Weird Flex</title>
          <meta property="og:title" content="JMP's Weird Stuff"/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://weird.jmp.blue"/>
          <meta name='theme-color' content="#ff00ff"/>
          <meta property="og:image" content="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.catster.com%2Fwp-content%2Fuploads%2F2018%2F04%2FAngry-cat-sound-and-body-language.jpg&f=1&nofb=1"/>
          <meta property="og:description" content="Random Projects"/>
        </Head>
        <nav>
          <ul className="nav-list">
            <li>
              <Link href='/'><button className="nav-item">Home</button></Link>
            </li>
            <li><button className="nav-item" onClick={ () => window.open("https://github.com/JMPJNS/weird", "_blank")}>Source Code</button></li>
            <li>
              <Link href='/free-robux'><button className="nav-item">Robux Generator</button></Link>
            </li>
            <li>
              <Link href='/real-scribble'><button className="nav-item">Real Scribble</button></Link>
            </li>
            <li>
              <Link href='/novel-reader'><button className="nav-item">Novel Reader</button></Link>
            </li>
            <li>
              <Link href='/genshin/artifact-rater'><button className="nav-item">Genshin Artifact Rater</button></Link>
            </li>
          </ul>
        </nav>

        <div className="do-center">
            {props.children}
        </div>
        
    </div>
)}

export async function getServerSideProps(ctx: NextPageContext) {
  const user = getCurrentUser(ctx)
  return({props: {user}})
}

export default Layout