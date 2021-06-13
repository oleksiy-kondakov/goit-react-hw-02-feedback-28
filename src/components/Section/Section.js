import PropTypes from 'prop-types';

import './Section.css';

const Section = ({ title, children }) => (
  <section>
    <h1 className="section-title">{title}</h1>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
