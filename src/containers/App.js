import * as Clarifai from 'clarifai';
import React, {Component, Fragment} from "react";
import './App.css';
import 'tachyons';
import Navigation from "../components/Navigation/Navigation";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import Rank from "../components/Rank/Rank";
import ImageHolder from '../components/ImageHolder/ImageHolder';
import Placeholder from '../media/placeholder.png';


//AKO SLEDE NE RADI STAVI OVO U INDEX.HTML
{/* <script>
var global = global || window;
var Buffer = Buffer || [];
var process = process || {
  env: { DEBUG: undefined },
  version: []
};
</script> */}

const app = new Clarifai.App({
  apiKey: 'cf9755a7e2804ce0a568bdeea0da4393'
 });

class App extends Component{
  constructor(){
    super();
    this.state = {
      input:''
    }
  }

  onInputChange = (event) => {
    this.setState({input:event.target.value});
  }

  setPlaceHolder = () => {
    this.setState({input:Placeholder});
  }

  onButtonSubmit = (event) => {
    event.preventDefault();
    app.models.predict(Clarifai.CELEBRITY_MODEL, this.state.input)
    .then(data => {
      console.log(data)
    }).catch(error => {
      this.setPlaceHolder();
    })
  }

  onImageError = () => {
    this.setPlaceHolder();
  }

  
  render(){
    console.log(this.state.input)
    return(
      <>
        <Navigation/>
        <Rank/>
        <ImageLinkForm inputChange = {this.onInputChange} buttonSubmit = {this.onButtonSubmit}/>
        <ImageHolder imageUrl = {this.state.input} imageError = {this.onImageError}/>
      </>

    )
  }
}

export default App;