export default class BookingUtil {
  moveRight(
    activeHomeComponent,
    activeCompRef,
    components,
    home,
    dispatch,
    configuration,
  ) {
    const activeComp = activeCompRef.current;
    const nextComponents = home[activeHomeComponent.current]?.components;
    const nextComponentKeys = Object.keys(components);
    const nextElement =
      nextComponentKeys[
        (nextComponentKeys.indexOf(activeComp) + 1) % nextComponentKeys.length
      ];

    activeCompRef.current = nextElement;

    if (activeComp && activeComp != '') {
      components[activeComp].isActive = false;
      document.querySelector(`.${activeComp}`).blur();
    }

    nextComponents[nextElement].isActive = true;
    document.querySelector(`.${nextElement}`).focus();
    const newConfig = JSON.parse(JSON.stringify(configuration));
    dispatch({
      type: 'SET_CONFIG',
      payload: newConfig,
    });
  }

  moveLeft(activeCompRef, components, dispatch, configuration) {
    const activeComp = activeCompRef.current;
    const componentKeys = Object.keys(components);
    const prevEl =
      componentKeys[
        (componentKeys.indexOf(activeComp) - 1 + componentKeys.length) %
          componentKeys.length
      ];
    if (activeComp && activeComp != '') {
      components[activeComp].isActive = false;
      document.querySelector(`.${activeComp}`).blur();
    }

    components[prevEl].isActive = true;
    document.querySelector(`.${prevEl}`).focus();
    dispatch({
      type: 'SET_CONFIG',
      payload: configuration,
    });
    activeCompRef.current = prevEl;
  }

  moveDown(
    currentHomeIndex,
    homeKeys,
    activeHomeComponent,
    components,
    home,
    dispatch,
    configuration,
    activeCompRef,
  ) {
    let activeComp = activeCompRef.current;
    let componentKeys = Object.keys(components);
    let nextActiveComp = componentKeys[componentKeys.indexOf(activeComp) + 1];
    let nextActiveComponentIndex = componentKeys.indexOf(nextActiveComp);
    let activeCompIndex = componentKeys.indexOf(activeComp);

    if (
      currentHomeIndex == homeKeys.length - 1 &&
      activeCompIndex + 1 == componentKeys.length
    ) {
      return;
    }

    if (home[homeKeys[currentHomeIndex]]?.type == 'collection') {
      let index = home[homeKeys[currentHomeIndex]]?.factory?.index;
      const i = home[homeKeys[currentHomeIndex]]?.factory?.sequence(index);
      home[homeKeys[currentHomeIndex]].factory.index = i;
      dispatch({
        type: 'SET_CONFIG',
        payload: configuration,
      });

      const activeComponentDOM = document.getElementById(
        home[homeKeys[currentHomeIndex]]?.components[activeComp]?.className +
          '-' +
          index,
      );

      activeComponentDOM.focus();

      activeComponentDOM.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      return false;
    }

    if (
      nextActiveComponentIndex !== componentKeys.length &&
      nextActiveComponentIndex !== -1 &&
      home[homeKeys[currentHomeIndex]]?.arrangement == 'column'
    ) {
      components[componentKeys[activeCompIndex]].isActive = false;
      document.querySelector(`.${componentKeys[activeCompIndex]}`).blur();
      components[componentKeys[activeCompIndex + 1]].isActive = true;
      const newConfig = JSON.parse(JSON.stringify(configuration));
      dispatch({
        type: 'SET_CONFIG',
        payload: newConfig,
      });
      activeCompRef.current = componentKeys[activeCompIndex + 1];

      const activeComponentDOM = document.querySelector(
        `.${componentKeys[activeCompIndex + 1]}`,
      );

      activeComponentDOM.focus();

      activeComponentDOM.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });

      return;
    }

    if (currentHomeIndex == homeKeys.length - 1) return false;

    const prevComponents = home[homeKeys[currentHomeIndex + 1]]?.components;
    const prevComponentKeys = Object.keys(prevComponents);
    const prevHomeComponent = homeKeys[currentHomeIndex + 1];
    activeHomeComponent.current = prevHomeComponent;
    componentKeys.forEach((item) => {
      components[item].isActive = false;
      document.querySelector(`.${item}`).blur();
    });
    prevComponents[prevComponentKeys[0]].isActive = true;
    const newConfig = JSON.parse(JSON.stringify(configuration));
    dispatch({
      type: 'SET_CONFIG',
      payload: newConfig,
    });
    activeCompRef.current = prevComponentKeys[0];
    const activeComponentDOM = document.querySelector(
      `.${prevComponentKeys[0]}`,
    );
    activeComponentDOM.focus();

    activeComponentDOM.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }

  moveUp(
    currentHomeIndex,
    homeKeys,
    activeHomeComponent,
    home,
    components,
    dispatch,
    configuration,
    activeCompRef,
  ) {
    let activeComp = activeCompRef.current;
    let componentKeys = Object.keys(components);
    let activeCompIndex = componentKeys.indexOf(activeComp);

    if (
      home[homeKeys[currentHomeIndex]]?.type == 'collection' &&
      home[homeKeys[currentHomeIndex]]?.factory?.index > 0
    ) {
      let index = home[homeKeys[currentHomeIndex]]?.factory?.index;
      const i = home[homeKeys[currentHomeIndex]]?.factory?.decrement(index);
      home[homeKeys[currentHomeIndex]].factory.index = i;
      dispatch({
        type: 'SET_CONFIG',
        payload: configuration,
      });

      const activeComponentDOM = document.getElementById(
        home[homeKeys[currentHomeIndex]]?.components[activeComp]?.className +
          '-' +
          index,
      );

      activeComponentDOM.focus();

      activeComponentDOM.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });

      return false;
    }

    if (
      activeCompIndex !== 0 &&
      home[homeKeys[currentHomeIndex]]?.arrangement == 'column'
    ) {
      components[componentKeys[activeCompIndex]].isActive = false;
      components[componentKeys[activeCompIndex - 1]].isActive = true;
      const newConfig = JSON.parse(JSON.stringify(configuration));
      dispatch({
        type: 'SET_CONFIG',
        payload: newConfig,
      });

      activeCompRef.current = componentKeys[activeCompIndex - 1];

      const activeComponentDOM = document.querySelector(
        `.${componentKeys[activeCompIndex - 1]}`,
      );

      activeComponentDOM.focus();

      activeComponentDOM.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });

      return;
    }

    componentKeys.forEach((oneSearch) => {
      components[oneSearch].isActive = false;
    });

    if (currentHomeIndex == 0 && activeCompIndex == 0) return;
    const nextHomeComponent = homeKeys[currentHomeIndex - 1];
    const nextComponents = home[nextHomeComponent]?.components;
    const nextComponentKeys = Object.keys(nextComponents);

    activeHomeComponent.current = nextHomeComponent;
    nextComponents[
      nextComponentKeys[nextComponentKeys.length - 1]
    ].isActive = true;
    dispatch({
      type: 'SET_CONFIG',
      payload: configuration,
    });
    activeCompRef.current = nextComponentKeys[nextComponentKeys.length - 1];

    const activeComponentDOM = document.querySelector(
      `.${nextComponentKeys[nextComponentKeys.length - 1]}`,
    );

    activeComponentDOM.focus();

    activeComponentDOM.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
}
