export default class BookingUtil {
  moveRight(
    activeHomeComponent,
    activeCompRef,
    home,
    dispatch,
    configuration,
    _,
  ) {
    if (!activeHomeComponent.current) return;
    const activeComp = activeCompRef.current;
    const coomponents = home[activeHomeComponent.current]?.components;
    const componentKeys = Object.keys(coomponents);
    const nextElement =
      componentKeys[
        (componentKeys.indexOf(activeComp) + 1) % componentKeys.length
      ];

    if (
      componentKeys.indexOf(activeComp) == componentKeys.length - 1 &&
      coomponents[activeComp]?.type != 'collection'
    ) {
      return;
    }

    if (activeComp && activeComp != '') {
      if (coomponents[activeComp].type == 'collection') {
        let index = coomponents[activeComp]?.factory?.index;
        const i = coomponents[activeComp]?.factory?.sequence(index);
        coomponents[activeComp].factory.index = i;
        const newConfig = _.cloneDeep(configuration);
        dispatch({
          type: 'SET_CONFIG',
          payload: newConfig,
        });

        const activeComponentDOM = document.getElementById(
          coomponents[activeComp]?.className + '-' + index,
        );

        activeComponentDOM.focus();

        return false;
      }

      coomponents[activeComp].isActive = false;
      document.querySelector(`.${activeComp}`)
        ? document.querySelector(`.${activeComp}`).blur()
        : null;
    }

    coomponents[nextElement].isActive = true;
    activeCompRef.current = nextElement;
    document.querySelector(`.${nextElement}`).focus();

    const newConfig = _.cloneDeep(configuration);

    dispatch({
      type: 'SET_CONFIG',
      payload: newConfig,
    });
  }

  moveLeft(
    activeCompRef,
    activeHomeComponent,
    home,
    dispatch,
    configuration,
    _,
    setAsideActive,
  ) {
    const activeComp = activeCompRef.current;
    const components = home[activeHomeComponent.current]?.components;
    const componentKeys = Object.keys(components);
    const prevEl =
      componentKeys[
        (componentKeys.indexOf(activeComp) - 1 + componentKeys.length) %
          componentKeys.length
      ];

    if (componentKeys.indexOf(activeComp) == 0) {
      components[activeComp].isActive = false;
      document.querySelector(`.${activeComp}`).blur();
      activeCompRef.current = null;
      activeHomeComponent.current = null;
      setAsideActive(true);
      return;
    }

    if (activeComp && activeComp != '') {
      if (
        components[activeComp].type == 'collection' &&
        components[activeComp]?.factory?.index > 1
      ) {
        let index = components[activeComp]?.factory?.index;
        const i = components[activeComp]?.factory?.decrement(index);
        components[activeComp].factory.index = i;
        const newConfig = _.cloneDeep(configuration);
        dispatch({
          type: 'SET_CONFIG',
          payload: newConfig,
        });

        const activeComponentDOM = document.getElementById(
          components[activeComp]?.className + '-' + index,
        );

        activeComponentDOM.focus();

        return false;
      }
      components[activeComp].isActive = false;
      document.querySelector(`.${activeComp}`).blur();
    }

    components[prevEl].isActive = true;
    document.querySelector(`.${prevEl}`).focus();
    const newConfig = _.cloneDeep(configuration);
    dispatch({
      type: 'SET_CONFIG',
      payload: newConfig,
    });
    activeCompRef.current = prevEl;
  }

  moveDown(
    currentHomeIndex,
    homeKeys,
    activeHomeComponent,
    home,
    dispatch,
    configuration,
    activeCompRef,
    _,
    showFilterBox,
  ) {
    let activeComp = activeCompRef.current;
    let components = home[activeHomeComponent.current]?.components;
    let componentKeys = Object.keys(components);
    let nextActiveComp = componentKeys[componentKeys.indexOf(activeComp) + 1];
    let nextActiveComponentIndex = componentKeys.indexOf(nextActiveComp);
    let activeCompIndex = componentKeys.indexOf(activeComp);

    if (
      home[homeKeys[currentHomeIndex + 1]]?.display == false &&
      !showFilterBox
    ) {
      return;
    }

    if (
      currentHomeIndex == homeKeys.length &&
      activeCompIndex == componentKeys.length
    ) {
      return;
    }

    if (home[homeKeys[currentHomeIndex]]?.type == 'collection') {
      let index = home[homeKeys[currentHomeIndex]]?.factory?.index;
      const i = home[homeKeys[currentHomeIndex]]?.factory?.sequence(index);
      home[homeKeys[currentHomeIndex]].factory.index = i;
      const newConfig = _.cloneDeep(configuration);
      dispatch({
        type: 'SET_CONFIG',
        payload: newConfig,
      });

      const activeComponentDOM = document.getElementById(
        home[homeKeys[currentHomeIndex]]?.components[activeComp]?.className +
          '-' +
          i,
      );

      activeComponentDOM.focus();

      activeComponentDOM.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
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
      const newConfig = _.cloneDeep(configuration);
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
      components[item].isActive && (components[item].isActive = false);
      document.querySelector(`.${item}`) &&
        document.querySelector(`.${item}`).blur();
    });
    prevComponents[prevComponentKeys[0]].isActive = true;
    const newConfig = _.cloneDeep(configuration);
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
    dispatch,
    configuration,
    activeCompRef,
    _,
  ) {
    let activeComp = activeCompRef.current;
    let components = home[activeHomeComponent.current]?.components;
    let componentKeys = Object.keys(components);
    let activeCompIndex = componentKeys.indexOf(activeComp);

    if (currentHomeIndex == 0) return;

    if (
      home[homeKeys[currentHomeIndex]]?.type == 'collection' &&
      home[homeKeys[currentHomeIndex]]?.factory?.index > 0
    ) {
      let index = home[homeKeys[currentHomeIndex]]?.factory?.index;
      const i = home[homeKeys[currentHomeIndex]]?.factory?.decrement(index);
      home[homeKeys[currentHomeIndex]].factory.index = i;
      const newConfig = _.cloneDeep(configuration);
      dispatch({
        type: 'SET_CONFIG',
        payload: newConfig,
      });

      const activeComponentDOM = document.getElementById(
        home[homeKeys[currentHomeIndex]]?.components[activeComp]?.className +
          '-' +
          i,
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
      const newConfig = _.cloneDeep(configuration);
      dispatch({
        type: 'SET_CONFIG',
        payload: newConfig,
      });

      activeCompRef.current = componentKeys[activeCompIndex - 1];

      const activeComponentDOM = document.querySelector(
        `.${componentKeys[activeCompIndex - 1]}`,
      );
      if (activeComponentDOM) {
        activeComponentDOM.focus();

        activeComponentDOM.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      } else {
        const activeComponentDOM = document.querySelector(
          `.${componentKeys[0]}`,
        );
        activeCompRef.current = componentKeys[0];
        activeComponentDOM.focus();

        activeComponentDOM.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }

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
    const newConfig = _.cloneDeep(configuration);
    dispatch({
      type: 'SET_CONFIG',
      payload: newConfig,
    });
    activeCompRef.current = nextComponentKeys[nextComponentKeys.length - 1];

    const activeComponentDOM = document.querySelector(
      `.${nextComponentKeys[nextComponentKeys.length - 1]}`,
    );

    if (activeComponentDOM) {
      activeComponentDOM.focus();

      activeComponentDOM.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    } else {
      const activeComponentDOM = document.querySelector(
        `.${homeKeys[currentHomeIndex - 1]}`,
      );
      const component = home[homeKeys[currentHomeIndex - 1]].components;
      const componentKeys = Object.keys(component);

      home[homeKeys[currentHomeIndex - 1]].components[
        componentKeys[0]
      ].isActive = true;

      document.querySelector(`.${componentKeys[0]}`).focus();

      const newConfig = _.cloneDeep(configuration);
      dispatch({
        type: 'SET_CONFIG',
        payload: newConfig,
      });

      activeComponentDOM.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }
}
