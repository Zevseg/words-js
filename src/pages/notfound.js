
import React from 'react';

class NotFound extends React.Component {
    
    constructor() {
        super();
        document.title = "Ошибка 404 - ничего не найдено";
    }      
    
  render() {
    return (
        <div className="content">            
          <h3>Ошибка 404</h3>
          <p>Такой страницы не существует. Ничего не найдено.</p>
        </div>
    );
  }
}

export default NotFound;