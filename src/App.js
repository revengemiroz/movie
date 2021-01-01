import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import Discover from './Containers/Discover';
import Genre from './Containers/Genres/Genre';
import Search from './Containers/Search/Search';
import TopRated from './Containers/TopRated/TopRated';
import Upcoming from './Containers/Upcoming/Upcoming';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/discover" exact component={Discover} />
					<Route
						path={process.env.PUBLIC_URL + '/genres/:name'}
						exact
						component={Genre}
					/>
					<Route
						path={process.env.PUBLIC_URL + '/search/:searchName'}
						exact
						component={Search}
					/>
					<Route
						path={process.env.PUBLIC_URL + '/topRated'}
						exact
						component={TopRated}
					/>
					<Route
						path={process.env.PUBLIC_URL + '/upcoming'}
						exact
						component={Upcoming}
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
