const Contact = ({ contact }) => {
  const { name, number, favorite, emergancy } = contact;
  return (
    <div className="contact">
      <h2 id="subheading">{name}</h2>
      <h3>{number}</h3>
      <div id="contact-info">
        {favorite && <h3>Like </h3>}
        {emergancy && <h3>Emergency </h3>}
      </div>
    </div>
  );
};

export default Contact;
