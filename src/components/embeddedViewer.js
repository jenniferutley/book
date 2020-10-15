import React, { Component } from "react"


/*global google*/

export default class extends Component {
  shouldComponentUpdate() {
    return false
  }

  componentDidMount() {
    google.books.load();

      function initialize() {
        var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
        viewer.load('ISBN:0738531367');
      }

      google.books.setOnLoadCallback(initialize);

  }

  render() {
    return (
      <div id="viewerCanvas" />
    )
  }
}
