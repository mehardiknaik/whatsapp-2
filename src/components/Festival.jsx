import React, { Suspense, lazy } from "react";
const FestivalInfo = lazy(() => import("remote_app/App"));

const Festival = () => {
  return (
    <ErrorBoundary fallback={null}>
      <Suspense>
        <FestivalInfo />
      </Suspense>
    </ErrorBoundary>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // we can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default Festival;
