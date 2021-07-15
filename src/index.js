import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/';

// class WhoAmI extends Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             years: 26
//         }
//         this.nextYear = this.nextYear.bind(this);
//         this.nextYear = () => {
//             this.setState(state => ({
//                 years: ++state.years
//             }))
//         }
//     }

//     nextYear = () => {
//         this.setState(state => ({
//             years: ++state.years
//         }))
//     }

//     nextYear() {
//         this.setState(state => ({
//             years: ++state.years
//         }))
//     }


//     render() {
//     const {name, surname, link} = this.props;
//     const {years} = this.state;
//         return(
//             <>
//                 <button onClick={this.nextYear}>+++</button>
//                 <h1>My name is {name}, surname - {surname}, {years}</h1>
//                 <a href={link}>My prof</a>
//             </>
//         )
//     }
// }


// const All = () => {
//     return(
//     <>
//         <WhoAmI name="Bob" surname='Smith' link='www.www' />        
//         <WhoAmI name="A" surname='Smith' link='www.www' />        
//         <WhoAmI name="S" surname='Smith' link='www.www' />        
//     </>
//     )
// }


// ReactDOM.render(<All/>, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));


// reportWebVitals();
