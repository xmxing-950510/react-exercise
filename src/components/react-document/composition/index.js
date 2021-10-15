/**
 * 组合 vs 继承 （类似vue插槽）
 * @param {*} props 
 * @returns 
 */
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

export default function WelcomeDialog() {
  return (
    <div>
      <h2>WelcomeDialog</h2>
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    </div>
    
  );
}
