import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { arr } = this.props;
    arr.forEach(item => {
      console.log(item)
    })
    return (
      <section className="about-section">
        <div className="about-text">

        </div>
      </section>
    )
  }
}
export default Table
