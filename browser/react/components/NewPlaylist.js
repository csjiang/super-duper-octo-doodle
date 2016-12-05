import React from 'react';

const NewPlaylist = (props) => {
  return (
    <div className="well">
      <form className="form-horizontal" onSubmit={props.handleSubmit}>
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input className="form-control" type="text" onChange={props.handleChange} value={props.value} />
              <div className="alert alert-warning" style={!props.tooShort ? {display: "none"} : null}>Please enter a name</div>
              <div className="alert alert-warning" style={!props.tooLong ? {display: "none"} : null}>That is way too long for a playlist name. Please be more realistic.</div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success" disabled={props.tooLong || props.tooShort}>Create Playlist</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
)};

export default NewPlaylist;
