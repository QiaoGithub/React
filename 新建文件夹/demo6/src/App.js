import React, { Component } from 'react';

import image_1 from './images/11.jpg'
import image_2 from './images/22.jpg'
import image_3 from './images/33.jpg'

import './demo.css'

var images = [image_1, image_2, image_3]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }
  _goNext() {
    var { index } = this.state
    if (index === images.length - 1) {
      index = 0
    } else {
      index++
    }
    this.setState ( {
      index: index
    })
  }
  _goPrev() {
    var { index } = this.state
    if (index === 0) {
      index = images.length - 1
    } else {
      index--
    }
    this.setState ( {
      index: index
    })
  }
  render() {
    var { index } = this.state
    return (
      <div className="wrap">
        <ul className="list">
          {images.map((item, i) => (
            <li className={`item ${index === i ? 'active' : ''}`} key={i}><img src={item} alt="" /></li>
          ))}
        </ul>
        <button className="btn left" onClick={() => this._goPrev()}>{'<'}</button>
        <button className="btn right" onClick={() => this._goNext()}> > </button>
      </div>
    );
  }
}

export default App;
