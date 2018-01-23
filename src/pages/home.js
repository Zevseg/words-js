
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="content">
          
<h4>Игра «Составь слова»</h4>

<div className="well well-small">
    <p>
        <span>Введите слово:</span>
    </p>
    <form className="form-inline" method="post" action="/game">
        <div className="form-group">
            <input type="text" className="form-control input-lg" placeholder="" name="word" value="" maxLength="20" />
        </div>
        <button className="btn btn-primary btn-lg" type="submit">Начать игру</button>
    </form>
</div>


<div style={{paddingTop: '10px'}}></div> 
    <h4>Об игре</h4>
      
<p>    
Игра <b>"Составь слова"</b> предлагает игрокам известную головоломку, в которой нужно 
составлять разные слова из одного длинного слова. 
</p>
<p>
Соревнуйтесь с друзьями в количестве сложенных слов и использованных букв, и узнайте кто более смышлёный.
    </p>
        
      </div>
    );
  }
}

export default Home;

