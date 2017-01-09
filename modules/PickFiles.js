import React from 'react'
import {Link} from 'react-router'



export default React.createClass({
getInitialState() {
  return {
  collageImages: []
  }
},
uploadImg() {
  filepicker.pickMultiple(
    {
      mimetype: 'image/*',
      maxFiles: 9,
      services: ['COMPUTER', 'IMAGE_SEARCH', 'URL', 'FACEBOOK', 'INSTAGRAM', 'PICASA', 'DROPBOX', 'BOX', 'CONVERT']
    },
    function(Blobs){
      console.log(JSON.stringify(Blobs));
      let newBlobs= [];
      
    },
    function(FPError){
      console.log(FPError.toString());
    });
  },
  render () {
    return (
      <section>
      <div>
            <button id="button-upload" type="button" className="btn btn-default filepicker" onClick={() => this.uploadImg()}>
            Upload Files
          </button>
      </div>
      <div>
      </div>
      </section>
    )
  }
  })
