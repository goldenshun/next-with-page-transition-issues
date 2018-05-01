import React from 'react';

function enhance(WrappedComponent) {
  /* This works */
  class WithRoot extends React.Component {
    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }

  /* This breaks */
  // const WithRoot = (props) => {
  //   return <WrappedComponent {...props} />;
  // }

  WithRoot.displayName = `WithRoot(${getDisplayName(WrappedComponent)})`;

  return WithRoot;
}

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}

export default enhance;
