import React from "react";

import axios from "axios";

export default class Cars extends React.Component {
  state = {
    cars: [],
  };

  componentDidMount() {
    axios.get(`https://bcw-sandbox.herokuapp.com/api/cars`).then((res) => {
      console.log(res.data.data);
      const cars = res.data.data;
      this.setState({ cars });
    });
  }

  render() {
    return (
      <div className="row">
        {this.state.cars.map((cars) => (
          <div className="col-4" key={cars._id}>
            <div className="card">
              <img className="card-img-top" src={cars.imgUrl} alt="" />
              <div className="card-body">
                <h4 className="card-title">{cars.make}</h4>
                <p className="card-text">{cars.description.substr(0, 10)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
