
import React from 'react';

class Game extends React.Component {
  render() {
    return (
      <div className="content">

<h4>Игра «Составь слова»</h4>
        
<div>
    <form className="form-inline" method="post" action="/game">
        <span>Ваш ответ:</span>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="" name="answer" value="" maxLength="20"/>
        </div>
        <button className="btn btn-primary" type="submit">Проверить</button>
    </form>
</div>        
        
      </div>
    );
  }
}

export default Game;

