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
      input:'',
      box:[]
    }
  }

  onInputChange = (event) => {
    this.setState({input:event.target.value});
  }

  setPlaceHolder = () => {
    this.setState({input:Placeholder});
  }

  calcFaceRegion = (data) => {
    const collectRegions = data.outputs[0].data.regions.map(region => {
      return region.region_info.bounding_box;
    })
    return collectRegions;
  }

  onButtonSubmit = (event) => {
    event.preventDefault();
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => {
      this.setState({box:this.calcFaceRegion(response)});
    }).catch(error => {
      this.setPlaceHolder();
    })
  }

  onImageError = () => {
    this.setPlaceHolder();
  }

  
  render(){
    return(
      <>
        <Navigation/>
        <Rank/>
        <ImageLinkForm
          inputChange = {this.onInputChange}
          buttonSubmit = {this.onButtonSubmit}/>
        <ImageHolder
          imageUrl = {this.state.input}
          imageError = {this.onImageError}
          boundingBox = {this.state.box}/>
      </>

    )
  }
}

export default App;