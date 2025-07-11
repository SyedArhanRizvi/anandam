import React from 'react';


const Gmap = () => {
  return (
    <iframe
    title="Dummy Google Map"
    className="w-full h-full"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.089771646499!2d85.3129!3d27.6946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQxJzQwLjYiTiA4NcKwMTgnNDYuNCJF!5e0!3m2!1sen!2snp!4v1617554387460!5m2!1sen!2snp"
  ></iframe>
  );
};

export default Gmap;
