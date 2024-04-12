import React, { useState, useEffect } from 'react';
import './igpostStyle.css';

function Content(props) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);
  
  return (
    <div>
      <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="https://www.apple.com/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      </div>
       <div className='content'>
      {data.map((item) => (
        <div key={item.id}>
          <div className='post-container'>
            <div>
              <img className='image' src={`https://picsum.photos/200/300?random=${item.id}`} alt='random' />
            </div>
            <div className='icons'>
              <img className='likebtn' src={process.env.PUBLIC_URL + '/heart.svg'} alt='random' />
              <img className='msgbtn' src={process.env.PUBLIC_URL + '/msg-writing.svg'} alt='random' />
              <img className='sharebtn' src={process.env.PUBLIC_URL + '/paper-plane-2.svg'} alt='random' />
            </div>
            <p>@{item.title}</p>
            <p>{item.body}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
   
  );
}

export default Content;


