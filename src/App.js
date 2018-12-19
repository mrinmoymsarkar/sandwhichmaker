import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout'

import SandwhichMaker from './containers/SandwhichMaker/SandwhichMaker'


class App extends Component {
  render() {
    return (
        <div>
          <Layout>
              <SandwhichMaker />
          </Layout>

      </div>
    );
  }
}

export default App;
