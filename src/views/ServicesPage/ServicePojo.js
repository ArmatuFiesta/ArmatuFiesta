

import React from 'react';
import axios from 'axios';

export default class ServicePojo extends React.Component {
    state = {
        services: []
      }
    
      componentDidMount() {
        axios.get('http://localhost:8000/api/notarias/')
          .then(res => {
            const services = res.data;
            this.setState({ services });
          })
      };

  render() {
    return (
      <ul>
        { this.state.services.map(service => <li>{service.nombre_notaria}</li>)}
      </ul>
    )
  }
}

