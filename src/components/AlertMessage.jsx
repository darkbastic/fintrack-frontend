
const AlertMessage = ({ type = "success", children }) => {
  if (!children) return null;

  return (
    <div className={`alert alert-${type} mt-3 alert-animated`}>
      {children}
    </div>
  );
};

export default AlertMessage;
