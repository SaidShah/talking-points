import React, { Component } from 'react';
import posed from 'react-pose';
import data from './data';
import Rotate from 'react-reveal/Rotate';

const Content = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' }
});

class MyContainer extends Component {
state = { open: false }

  render() {
    return (

      <div>

        {data.map(({ title, content }, i) => (
          <div key={content}>
          <Rotate top right>
            <h1
              className=" h1-container"
              onClick={() => this.setState({ open: this.state.open === i ? false : i })}
            >
              {this.state.open === i ? '🤯 ' : '🙂 '}
              {title}
              </h1>

              <h3 className="h3-content">
            <Content className="content" pose={this.state.open === i ? 'open' : 'closed'} key={title}>
              <div className="content-wrapper">{this.state.open === i ? content: ""}</div>
            </Content>
            </h3>

            </Rotate>
          </div>
        ))}
      </div>


    );
  }

}

export default MyContainer;
