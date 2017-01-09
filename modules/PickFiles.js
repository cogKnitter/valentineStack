import React from 'react'
import {Link} from 'react-router'



export default React.createClass({

uploadImg() {
  filepicker.pickMultiple(
    {
      mimetype: 'image/*',
      maxFiles: 9
    },
    function(Blobs){
      console.log(JSON.stringify(Blobs));
    },
    function(FPError){
      console.log(FPError.toString());
    });
  },
  render () {
    return (
      <div>
            <button id="button-upload" type="button" className="btn btn-default filepicker" onClick={() => this.uploadImg()}>
            Upload Files
          </button>
      </div>
    )
  }
  })
