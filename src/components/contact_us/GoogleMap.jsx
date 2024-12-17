function GoogleMap() {
  return (
    <div className="w-full h-96 mt-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9135553110664!2d101.67482701204005!3d3.11756815332982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc498eb19ab83d%3A0x564d5053f56991fb!2sMid%20Valley%20Megamall!5e0!3m2!1sen!2smy!4v1734405660984!5m2!1sen!2smy"
        title="Google Map Display"
        className="w-full h-96"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
