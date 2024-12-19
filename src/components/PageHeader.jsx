import PropTypes from "prop-types";

function PageHeader({ title }) {
  return (
    <div className="relative w-max">
      <h1 className="font-extrabold pb-3 text-4xl bottom_text_line">{title}</h1>
    </div>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string,
};

export default PageHeader;
