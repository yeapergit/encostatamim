import React from "react";

class UploadPage extends React.Component {
  onChangeHandler = event => {
    console.log(event.target.files[0]);
  };

  render() {
    return (
      <div className="input-file">
        <input type="file" name="file" onChange={this.onChangeHandler} />
      </div>
    );
  }
}

export default UploadPage;
