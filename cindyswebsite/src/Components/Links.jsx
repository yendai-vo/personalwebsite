import React from 'react';
import './links.css';

export default function Links() {
  return (
    <div className="links">
      <ul className="iconsUList">
      <li className="iconsList">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/cindy-yen-vo-b7b164108/"><i className="fa fa-linkedin-square"/></a>
        </li>
        <li className="iconsList">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/yendai-vo"><i class="fab fa-github"></i></a>
        </li>
        <li className="iconsList">
          <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@cindyvo_98634"><i class="fab fa-medium"></i></a>
        </li>
        <li className="iconsList">
          <a href="mailto:yendai.vo@hotmail.com?"><i class="fas fa-envelope"></i></a>
        </li>

      </ul>
    </div>
  )
}

