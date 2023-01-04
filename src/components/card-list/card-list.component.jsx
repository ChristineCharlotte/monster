import React, { Component } from 'react';

import Card from '../card/card.component.jsx';
import './card-list.styles.css';

class CardList extends Component {
  render() {
    console.log('component', this.props);
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
