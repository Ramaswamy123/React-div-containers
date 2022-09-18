const Notification = (props) => {
  const { name, box, image } = props;
  return (
    <div className={`boxes ${box}`}>
      <img src={image} className="icon" />
      <p className="text">{name}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div>
      <Notification
        name="Informational Message"
        box="information-box"
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        name="Success Message"
        box="success-box"
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        name="Warning Message"
        box="warning-box"
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        name="Error Message"
        box="error-box"
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
