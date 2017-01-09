import React from 'react'
import {Link} from 'react-router'
import PickFiles from './PickFiles.js'


export default React.createClass({
  render() {
    return (
      <main>
        <h1 className="list__heading">valentine collage</h1>
        <div>
          <PickFiles/>
        </div>
      </main>
    )
  }
})
