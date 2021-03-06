import htmlescape from "htmlescape";
import React from "react";

export default class Html extends React.Component {
  render() {
    return(
      <html>
        <head>
          {
            this.props.headChildren.map((child, index) => {
              return React.cloneElement(child, { key: index });
            })
          }
        </head>
        <body>
          <div id="container" dangerouslySetInnerHTML={{ __html: this.props.innerHtml }}/>
          <script dangerouslySetInnerHTML={{ __html: `window.katatemaData = ${htmlescape(this.props.katatemaData)}` }}/>
          {this.renderClientScript()}
        </body>
      </html>
    );
  }

  renderClientScript() {
    if (this.props.hotReloadable) {
      return <script src="javascripts/katatema-hot-reloadable-client.js"/>;
    } else {
      return <script src="javascripts/katatema-client.js"/>;
    }
  }
}
