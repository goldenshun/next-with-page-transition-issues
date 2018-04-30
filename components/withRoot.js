const withRoot = Page => {
  const WithRoot = props => <Page {...props} />

  WithRoot.getInitialProps = async context => {
    return Page.getInitialProps ? Page.getInitialProps(context) : {};
  }

  return WithRoot
}

export default withRoot;
