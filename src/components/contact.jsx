const Contact = (props) => {
  const { name, number } = props.contact;
  console.log(name, number);
  return (
    <div className="contact">
      <h2 id="subheading">{name}</h2>
      <h3>{number}</h3>
    </div>
  );
};

export default Contact;
