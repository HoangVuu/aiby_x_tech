import { useEffect, useRef, useState } from 'react';
import './Accordion.css';

interface AccordionProps {
  title: string;
  subtitle: string;
  details: Array<{ title: string; content: string }>;
}

const Accordion = (props: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (detailsRef.current) {
      if (isOpen) {
        detailsRef.current.style.maxHeight =
          detailsRef.current.scrollHeight + 'px';
      } else {
        detailsRef.current.style.maxHeight = '0';
      }
    }
  }, [isOpen]);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Accordion_accordion">
      <div className="Accordion_summary" onClick={handleOnClick}>
        <div className="Accordion_summary__container">
          <h3 className="Accordion_title Accordion_title--reversed">
            <span className="Accordion_title__title">{props.title}</span>
            <span className="Accordion_title__subtitle">{props.subtitle}</span>
          </h3>

          <div
            className={`Accordion_icon ${isOpen ? 'Accordion_icon_open' : ''}`}
          >
            <svg
              fill="none"
              viewBox="0 0 12 8"
              xmlns="http://www.w3.org/2000/svg"
              className="Accordion_icon__icon"
            >
              <path
                d="m11 1.95-4.949 4.88-4.95-4.88"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        ref={detailsRef}
        className="Accordion_details"
        style={{
          maxHeight: isOpen ? 'auto' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease-in-out',
        }}
      >
        <div className="Accordion_details__container">
          <div className="Accordion_details__content-container">
            <div className="OrderedCardList_ordered-card-list">
              {props.details.map((item) => (
                <div key={item.title} className="OrderedCardList_ordered-card OrderedCardList_ordered-card--light">
                  <div className="OrderedCardList_index">
                    <div>{item.title}</div>
                    <svg
                      fill="none"
                      height="10"
                      viewBox="0 0 6 10"
                      width="6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m1 9 4-4-4-4"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                  </div>
                  <div className="OrderedCardList_content">
                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
