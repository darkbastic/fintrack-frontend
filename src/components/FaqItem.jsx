const FaqItem = ({ id, question, answer, isOpen }) => {
  return (
    <div className="accordion-item">
      <h3 className="accordion-header">
        <button
          className={`accordion-button${!isOpen ? ' collapsed' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded={isOpen}
          aria-controls={id}
        >
          {question}
        </button>
      </h3>

      <div
        id={id}
        className={`accordion-collapse collapse${isOpen ? ' show' : ''}`}
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;