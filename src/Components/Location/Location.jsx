import React from 'react';

const Location = () => {
  return (
    <div className='container pb-10'>
      <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>Location to Visit</h1>
      <div className='rounded-xl'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d217588.48736953124!2d74.35305619462892!3d31.556551016797627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1710792350155!5m2!1sen!2s"
          title="Google Map Location"
          frameborder="0"
          width="100%"
          height="360"
          allowFullScreen=""
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          style={{ borderRadius: "20px" }}
        >
        </iframe>
      </div>
    </div>
  );
}

export default Location;
