import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.updateSelection = this.updateSelection.bind(this);
    this.addModel = this.addModel.bind(this);

  }
  
  addModel() {
    this.props.dispatch({
      type: "ADD_MODEL",
      payload: data[this.state.computerSelected]
    });
  }

  updateSelection(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState(
      {
        [name]: value
      }
    );
  }

  render() {
    
    return (
      <div className="App">
    
        <select name="computerSelected" onChange={this.updateSelection}>
          <option value="">-- pick a model --</option>
          <option value="Ivel Z3">Ivel Z3 (1969)</option>
          <option value="Bally Astrocade">Bally Astrocade (1977)</option>
          <option value="Sord M200 Smart Home Computer">
            Sord M200 Smart Home Computer (1971)
          </option>
          <option value="Commodore 64">Commodore 64 (1982)</option>
        </select>
        <button onClick={this.addModel}>add</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state: state
});

export default connect(mapStateToProps)(App);
