import React from 'react';

function MyMap() {
  const blackAndWhiteSrc = "https://yandex.ru/map-widget/v1/?um=constructor%3Af26eaf1831592f444e3050a3e20983fa12c313ddd965e77bfd5a540b1d31c655&amp;source=constructor&mode=gray";

  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', marginBottom:"150px" }}>
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0
        }}
        src={blackAndWhiteSrc}
        allowFullScreen
      />
    </div>
  );
}

export default MyMap;