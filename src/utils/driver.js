import { driver } from "driver.js";

const driverObj = driver();

export const driverHandler = ({config: { element, title, description, side = "left", align = "start" }}) => {

    const elementStaringForLocalStorage = `${element}-driver`

  if (!localStorage.getItem(elementStaringForLocalStorage)) {

    localStorage.setItem(elementStaringForLocalStorage, 'true')

    driverObj.highlight({
      element: element,
      popover: {
        title: title,
        description: description,
        side: side,
        align: align,
      },
    });
  }
};
