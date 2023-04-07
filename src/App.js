import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementAction, decrementAction} from './actions';
// import example from './example.scss'
import {BrowserRouter,  Route} from 'react-router-dom';
import Common from './pages/Common';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
  
class App extends Component {
	onDecrement() {
		this.props.onDecrement(1);
	}
	onIncrement() {
		this.props.onIncrement(1)
	}
	render() {
		return (
      <BrowserRouter>
        <RouteWrapper exact path="/" component={Common} layout={Common} />
      </BrowserRouter>
		);
	}
}
function RouteWrapper ({component: Component,  layout: Layout,  ...rest}) {
    return (
      <Route
        {...rest}
        render = {(props) => (
          <Layout {...props}>
            <Component {...props}/>
          </Layout>
        )}
      />
    )
  }

const mapStateToProps = (state) => {
	return {
		times: state.counterReducers ? state.counterReducers : 0
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onDecrement: (step) => {
			dispatch(decrementAction(step));
		},
		onIncrement: (step) => {
			dispatch(incrementAction(step));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
