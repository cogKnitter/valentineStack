import React from 'react'
import {Link} from 'react-router'
import PickFiles from './PickFiles.js'


export default React.createClass({
  render() {
    return (
      <main className="app__body">
        <h1 className="app__heading">valentine collage</h1>
        <div>
          <PickFiles/>
        </div>
      </main>
    )
  }
})
