export const ColorMessage = (props) => {
  const contentStryle = {
    color: props.color,
    fontSize: "20px",
  };

  return <p style={contentStryle}>{props.children}</p>;
};
