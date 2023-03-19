import React, {useEffect, useState} from 'react';
import './style.css';
import axios from 'axios';
import SideBarNews from './sidebarnews';


/**
 * Main page to display news
 * */
function Main() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    //fetch or get news from api
    axios.get('./news.json').then(response => {
      setNews(response.data['articles']);
    }).catch(err => {
      alert(err);
    });
  }, []);

  return (
    <div className="flex-container">
      {news.length > 0 &&
        <div className="column-container">
          {/*Popular banner news*/}
          <div className="flex-container">
            <div className="block-1">
              <div>
                <p className="title">
                  {news[0].head}
                </p>
                <p className="description">
                  {news[0].teaser}
                </p>
              </div>
              <div>
                <p className="post-author">
                  {news[0].byline['text']}
                </p>
                <div className="horizontal-divider"/>
              </div>
            </div>
            <div className="block-2">
              <img draggable={'false'} className="display-pic" src={`./images/${news[0].image}`} alt="engineer"/>
            </div>
          </div>
          <div className="flex-container">
            <div className="col-3">
              <div className="col-3-1">
                <img draggable={'false'} className="post-pic" src={`./images/${news[1].image}`} alt="pic"/>
                <div className="content-separate">
                  <div>
                    <p className="post-title">
                      {news[1].head}
                    </p>
                    <p className="post-description">
                      {news[1].teaser}
                    </p>
                  </div>
                  <div>
                    <p className="post-author">
                      {news[1].byline['text']}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="vertical-divider">
              <div className="line"/>
            </div>
            <div className="col-3">
              <div className="col-3-1">
                <div className="content-separate">
                  <div>
                    <p className="post-title">
                      {news[2].head}
                    </p>
                    <p className="post-description">
                      {news[2].teaser}
                    </p>
                  </div>
                  <div>
                    <p className="post-author">
                      {news[2].byline['text']}
                    </p>
                  </div>
                </div>
              </div>
              <div className="horizontal-divider"/>
              <div className="col-3-1">
                <div className="content-separate">
                  <div>
                    <p className="post-title-2">
                      {news[3].head}
                    </p>
                    <p className="post-description">
                      {news[3].teaser}
                    </p>
                  </div>
                  <div>
                    <p className="post-author">
                      {news[3].byline['text']}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="vertical-divider">
              <div className="line"/>
            </div>
            <div className="col-3">
              <div className="col-3-1">
                <img draggable={'false'} className="post-pic"
                     src={`./images/${news[4].image}`} alt="pic"/>
                <div className="content-separate">
                  <div>
                    <p className="post-title">
                      {news[4].head}
                    </p>
                    <p className="post-description">
                      {news[4].teaser}
                    </p>
                  </div>
                  <div>
                    <p className="post-author">
                      {news[4].byline['text']}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
      <div className="vertical-divider-2"/>
      {/*Sidebar news component section*/}
      <SideBarNews news={news}/>
    </div>
  );
}

export default Main;
