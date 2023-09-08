import { FocusExample } from "./FocusExample";

export const DivContainer = ({ number, scrollPercentage}) => {
  return (

    <div style={{ height: "100vh" }}>
      <h1>Container {number}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A facere
        cumque eveniet quisquam voluptatem distinctio alias ducimus rerum ex.
        Cupiditate quibusdam ex magnam quae nam, quas optio illo ipsum delectus.
      </p>
      <FocusExample/>
      <h2>You have scrolled: {scrollPercentage} %</h2>
    </div>
  );
};
