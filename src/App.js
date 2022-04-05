import React from "react";
import { marked } from "marked";
import { Placeholder } from "./placeholder"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown : Placeholder
    }
    
    this.onChange = this.onChange.bind(this);
  }

  marked = require('marked')

  onChange(e) {
    this.setState({
      markdown: e.target.value
    })
  }

  createMarkup = () => {
    return {__html: marked(this.state.markdown, { sanitize: true, breaks: true })};
  }

  render() {
    return(
      <div>
        <div style={{display: 'flex'}}>
          <div style={{margin: "0 2%"}}>
            <h1>Editor</h1>
            <textarea id="editor" onChange={this.onChange}>{this.state.markdown}</textarea>
          </div>
          <div style={{margin: "0 2%"}}>
            <h1>Preview</h1>
            <div id="preview" dangerouslySetInnerHTML={this.createMarkup()}></div>
         </div>
        </div>
      </div>
    )
  }
}

export default App;
