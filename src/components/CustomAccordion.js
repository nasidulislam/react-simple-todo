import React from 'react';

// third party code imports
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

// other imports
import CompletedTask from './CompletedTask';
import { isEmptyObject } from '../util/helpers';
import Message from './blocks/Message';

// css import
import '../stylesheets/CustomAccordion.css';

class CustomAccordion extends React.Component {
  renderAccordionBody = (obj) => {
    // if completed task object is not empty, then render list of completed tasks
    if(!isEmptyObject(obj)) {
      return (
        Object.keys(obj).map(key => (
          <CompletedTask
            key={key}
            index={key}
            taskName={obj[key]}
          />
      )))
    } else {
      // if completed task object is empty, render message
      return <Message
                messageClass="completed-unavailable-message"
                message="No completed tasks"
              />
    }
  }

  render() {
    return (
      <div className="accordion-container">
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              <span className="forms-header">{this.props.title}</span>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ul>{this.renderAccordionBody(this.props.completedTasks)}</ul>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </div>
    )
  }
}

export default CustomAccordion;
