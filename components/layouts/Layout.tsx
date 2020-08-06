import Head from "next/head"
import Link from 'next/link'

const Layout = (props: any) => (
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
            <Link href='/'><button className="nav-item">Home</button></Link>
            <button className="nav-item" onClick={ () => window.open("https://github.com/JMPJNS/weird", "_blank")}>Source Code</button>
            <Link href='/FreeRobux'><button className="nav-item">Robux Generator</button></Link>
            <Link href='/RealScribble'><button className="nav-item">Real Scribble</button></Link>
            <Link href='/NovelReader'><button className="nav-item">Novel Reader</button></Link>
          </nav>

        <div className="do-center">
            {props.children}
        </div>
        
    </div>
)

export default Layout