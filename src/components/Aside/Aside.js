import React, { Component } from 'react';
import './Aside.scss';

class Aside extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleAsideClick } = this.props;

    return (
      <aside id="aside-nav">
        <img id="logo" width="36" height="36" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAC0UlEQVR42u2c63GCQBCAbSEt2EJaoIW0kBaSPxEVZ6QFW0gLtEALaYEWzC3cEYLCnSe7LMvuzE4cx4zwse+7c7NRUVFRUVFRGZDz5/klTY/vaZrl+zQr+grvH3bZx/Hr+LoaIO71YXd6MwAqA+IapqcfgCUaEECBvwZMEg7mv4JViYRjLOAC7lS/3mffsYAaSOlWHBz79BNrQeUzgMDVmviVJU4XG3NswL12AT0DJ9ANq/p7jaUCTHBtdoHePuGyd+EkgEbVQHOuzgoOG0B/11J2s+rscLgBslqwgcMU0JUsNvng9AAVXACRFJ8OjgVUDKmrX6AqZmNFJmiTVMihAQ8yCCcXI4tDYB1grrYoHLCg5wpErJqJAE7dkVfcbj5UkeHEN55cFLUecn3WkhW1l+OUslkCWnLsUQviUCwqoBUEaVRATXGogEbbjKUDQm03YFyggPyBmqW72IF+NTsgLk3ovVgSOD3AtiAemWxovWx2QFwymb2Odk3fzakCBnToLpYwbyUq37o/werpsjMZwdCM37SQG6B8PhdZBCDUYXwhYC6dbjGXZoSsbODEIYKlIhpAGPUQmD+qdVICsiusFcbF48ah04VsA8PU7uD6K5gaYGUz8s2hdgdrOfVAvR6tIATs2XbPwg25/mjK9Ov2J/aWunmuajzas9U3VVuBf4dHzJO1M6B8iikAG2gQtzqW1u6ypxoFb9YqIXMqiJWibhrcwblqV+/FkSArothARVVjjQVjd8zhzv/wzGAYW/xiNmP6Ad2CXZyEtDBDqdqXLUWc+xhyrfbIgdERCypmHbUSAYqOHR5AF7GAHqizqrExioi0HgvIl8VmOauBlN6j+qfRQlFK/TPkYs0gzS0Q3hSNuf9YhAD3wltzE5K9WkATz4DEnZ6eckoprjl9pDMPGcCJ/pECG4Bj59LFan7BoTvuGDtd5D6zGjAqKioqKirB8gvjF/l9kBwHEAAAAABJRU5ErkJggg==" />
        <ul>
          <li>
            <button id="new-note" type="button" title="새 노트" onClick={handleAsideClick}>
              <i className="fa fa-plus fa-lg" />
            </button>
          </li>
        </ul>
        <footer><a href="http://www.codejs.co.kr" target="_blank">@codeJS</a></footer>
      </aside>
    );
  }
}

export default Aside;