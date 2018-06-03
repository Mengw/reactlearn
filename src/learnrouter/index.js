/**
 * Created by Administrator on 2018/6/3.
 */

import { HashRouter,BrowserRouter, Route } from 'react-router-dom'
import {Switch, Link} from  'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom'

const PlayerAPI ={
    players:[
        { number: 1, name: "Ben Blocker", position: "G" },
        { number: 2, name: "Dave Defender", position: "D" },
        { number: 3, name: "Sam Sweeper", position: "D" },
        { number: 4, name: "Matt Midfielder", position: "M" },
        { number: 5, name: "William Winger", position: "M" },
        { number: 6, name: "Fillipe Forward", position: "F" }
        ],
    all:function () {
        return this.players;
    },
    get:function (id) {
        const isPlay = p => p.number === id;
        return this.players.find(isPlay);
    }
}


// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/roster'>Roster</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
            </ul>
        </nav>
    </header>
)


const Home = () => (
    <div>
        <h1>Welcome to the Tornadoes Website!</h1>
    </div>
)

const Schedule = () => (
    <div>
        <ul>
            <li>6/5 @ Evergreens</li>
            <li>6/8 vs Kickers</li>
            <li>6/14 @ United</li>
        </ul>
    </div>
)

const Roster = () => (
    <Switch>
        <Route exact path='/roster' component={FullRoster}/>
        <Route path='/roster/:number' component={Player}/>
    </Switch>
)

const FullRoster = () =>
    <div>
        <ul>
            {
                PlayerAPI.all().map(
                    p =>
                        <li key={p.number}>
                            <Link to={`/roster/${p.number}`}>{p.name}</Link>
                        </li>

                )
            }
        </ul>
    </div>


const Player = (props) => {
    let id = parseInt(props.match.params.number, 10);
    console.log("player props id" + id);

    const player = PlayerAPI.get(
        id
    );

    console.log("player number" + player);

    if(!player){
        return <div>Sorry,but the player was not found</div>
    }

    return (<div>
        <h1>
            <h1>{player.name} (#{player.number})</h1>
            <h2>Position: {player.position}</h2>
            <Link to='/roster'>Back</Link>
        </h1>
    </div>
    )
}

const Main = () =>
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path="/roster" component={Roster}/>
            <Route path="/schedule" component={Schedule} />
        </Switch>
    </main>


export const App1 = () => (
    <div>
        <Header />
        <Main />
    </div>
)
/*
<Route path='/page' component={Page} />
        const extraProps = { color : 'red'}
<Route path='/page' render={(props) => (
    <Page {...props} data={extraProps}/>
)}/>
<Route path='/page' children={(props) => (
    props.match
        ? <Page {...props}/>
        : <EmptyPage {...props}/>
)}/>*/



// ReactDOM.render((
//     <HashRouter>
//         <App1 />
//     </HashRouter>
// ), document.getElementById('root'))