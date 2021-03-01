const Alert = ({alert}) => {
  return (
    <>
      {alert.success ? <div className="alert alert-success fadeOut">Message sent successfully</div> : ""}
      {alert.warning ? <div className="alert alert-danger fadeOut">Something went wrong</div> : ""}
    </>
  );
};

export default Alert;
