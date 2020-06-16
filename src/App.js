import React from 'react';
import './App.css';

var Airtable = require('airtable');

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'keySXM63if2KAGMln'
});

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  async componentWillMount() {
    var arr = [];
    await this.loadATBase(Airtable.base('appL2LeTuuz9C5L0n'), 'Implementation', 'Grid view', arr);
    this.setState({
      arr
    })
  }

  loadATBase(base, tableName, viewName, destArray) {

    var that = this;

    var sectionPromise = new Promise(function (fulfill, reject) {
      base(tableName).select({

        view: viewName
      }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function (record) {
          destArray.push(record.fields);
        });

        fetchNextPage();

      }, function done(err) {
        if (err) {
          console.error(err);
          reject();

        }

        fulfill(destArray);
      });
    });
    return sectionPromise;
  }

  render() {
    const { arr } = this.state;
    console.log(arr && arr[0]['Due Date'].split('-')[1])
    return (
      <div className="App">
        <table>
          <tr>
            <th>Action</th>
            <th>June</th>
            <th>July</th>
            <th>Aug</th>
            <th>Sept</th>
            <th>Oct</th>
            <th>Nov</th>
            <th>Dec</th>
          </tr>
          {arr && arr.map(
            (item, i) =>
          <tr>
            <td>{item['Action(s)']}</td>
            <td style={{textAlign: 'center', background: item['Start Date'].split('-')[1] === '06' || item['Due Date'].split('-')[1] === '06' ? '#03e8fc' : ''}}></td>
            <td style={{textAlign: 'center', background: item['Start Date'].split('-')[1] === '07' || item['Due Date'].split('-')[1] === '07' ? '#03e8fc' : ''}}></td>
            <td style={{textAlign: 'center', background: item['Start Date'].split('-')[1] === '08' || item['Due Date'].split('-')[1] === '08' ? '#03e8fc' : ''}}></td>
            <td style={{textAlign: 'center', background: item['Start Date'].split('-')[1] === '09' || item['Due Date'].split('-')[1] === '09' ? '#03e8fc' : ''}}></td>
            <td style={{textAlign: 'center', background: item['Start Date'].split('-')[1] === '10' || item['Due Date'].split('-')[1] === '10' ? '#03e8fc' : ''}}></td>
            <td style={{textAlign: 'center', background: item['Start Date'].split('-')[1] === '11' || item['Due Date'].split('-')[1] === '11' ? '#03e8fc' : ''}}></td>
            <td style={{textAlign: 'center', background: item['Start Date'].split('-')[1] === '12' || item['Due Date'].split('-')[1] === '12' ? '#03e8fc' : ''}}></td>
          </tr>
          )}
        </table>
      </div>
    );
  }
}

export default App;
