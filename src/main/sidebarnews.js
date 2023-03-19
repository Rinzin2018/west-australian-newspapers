import React from 'react';
import './style.css';

function SideBarNews({news}) {
  return (
    <div className="block-3">
      {news && news.map((item, index) => (
        index > 4 &&
        <div key={item.id}>
          {index === 5 ?
            <div className="ads-display">
              <div>
                <img draggable={'false'} style={{width: '100%', height: 189, objectFit: 'cover'}}
                     src={`./images/${item['image']}`} alt="pic"/>
                <p className="ads-title">
                  {item['head']}
                </p>
                <p className="post-author">
                  {item['byline']['text']}
                </p>
              </div>
              <div className="horizontal-divider"/>
            </div> :
            <div>
              <div className="mt-16">
                <p className="ads-title">
                  {item['head']}
                </p>
              </div>
              <div className="horizontal-divider"/>
            </div>
          }
        </div>
      ))}
    </div>
  );
}

export default SideBarNews;
