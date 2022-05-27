import './style.css';

const Section = ({ children, ...rest }) => {
  return (
    <div className='section-container' {...rest}>
      <div>{children}</div>
    </div>
  );
};

export default Section;
