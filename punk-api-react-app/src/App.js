import React from 'react'

import Beers from './components/Beers'


import './App.css';

let PUNK_API = 'https://api.punkapi.com/v2/beers'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      beers: []
}
  }
  //promises
  //there was an error in this
  //res was undefined
  // componentDidMount() {
  //   fetch(PUNK_API)
  //   .then((res)= res.json())
  //   .then((data) => this.setState{
  //     beers: data
  //   })
  // }

  async componentDidMount() {
    let response = await fetch(PUNK_API);
    let beers = await response.json()
    console.log(beers)
    this.setState({
      beers
    })
  }

    render() {
      return (
        <div className="App">
        <header className="App-header">
          PUNK API
          <Beers beers={this.state.beers}/>
        </header>
      </div>
    );
  }
}

export default App;
