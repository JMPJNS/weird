import React from "react"
import styles from "../styles/FreeRobux.module.css"
import Layout from "../components/layouts/layout"

export default class FreeRobux extends React.Component{
       
  constructor(props: {}) {
      super(props);
      this.state = {name: "", count: 0, log: []}
      this.handleChange = this.handleChange.bind(this);
  }
  
  state: {name: string, count: number, log: string[]}
  
  doTheThing = async () => {
      const name = this.state.name
      const anzahl = this.state.count
      if (alreadyran) {
          this.setState({log: []})
      }
      if (name == "" || anzahl == 0) {
          this.wr("Username und Anzahl eingeben")
          return
      }

      const db = Math.floor((Math.random() * 100) + 1)

      this.wr(`Willkommen ${name}!`)
      this.wr("Verbindung zur Roblox API aufbauen (mit einem speziellen hack)..."); await sleep(2000)
      this.wr("Cracking SHA-256 keys..."); await sleep(1000)
      this.wr(`Verbundung zur US_East#${db} Datenbank aufbauen (no-logging mode)...`); await sleep(1000)
      this.wr(`Datenbank ausführung: UPDATE accounts SET Robux = '${anzahl}' WHERE username == '${name}'`); await sleep(500)
      this.wr("Änderungen übernehmen..."); await sleep(1000)
      this.wr(`Verbindung zur US_East#${db} Datenbank abbrechen (no-logging mode)...`); await sleep(200)
      this.wr("Herzlichen Glückwunsch!, in Rund 24 stunden werden die Robux auf deinem account im spiel auftauchen.")
      alreadyran = true
  }
  
  printLog() {
    const items = []
    
    for(const t of this.state.log) {
      items.push(<div className={styles.green}>{t}<br/></div>)
    }
    
    return (
      <div>
        {items}
      </div>
    )
  }

  wr(text: string) {
    const newLog = this.state.log
    newLog.push(text)
    this.setState({log: newLog})
  }

  handleChange(event: any) {   
      console.log(event.target)
  }
  
  render() {
    return (
      <Layout>
        <h1>Welcome to <span className={styles.rainbow}>FREE ROBUX GENERATOR</span></h1>
        <label>
            Name:
            <input value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} type="text"/>
        </label>
        <label>
            Robux Anzahl:
            <input value={this.state.count} onChange={(event) => this.setState({count: event.target.value})} min="0" type="number"/>
        </label>
        <button onClick={this.doTheThing}>Run!</button>
        <hr/>
        <div className={styles.log} id="log">{this.printLog()}</div>
      </Layout>
    )
  }
}


let alreadyran = false

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



