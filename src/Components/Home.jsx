import React from 'react';

export default function Home() {
  // Assuming data is fetched or passed as props
  const data = {
    name: 'Example',
    imgUrl: 'https://via.placeholder.com/150', // Sample image URL
    paperUrl: 'https://example.com',
    webUrl: 'https://example.com',
    videoUrl: 'https://example.com'
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>{data.name}</h2>
      <img src={data.imgUrl} alt={data.name} style={{ width: '300px', height: 'auto' }} />
      <div>
        <button onClick={() => window.open(data.paperUrl)}>Paper</button>
        <button onClick={() => window.open(data.webUrl)}>Website</button>
        <button onClick={() => window.open(data.videoUrl)}>Video</button>
      </div>
    </div>
  );
}
