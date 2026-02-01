import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem',
          backgroundColor: '#0a0a0a',
          color: '#f5f0e8',
          minHeight: '100vh',
          fontFamily: 'Georgia, serif'
        }}>
          <h1 style={{ marginBottom: '1rem' }}>something went wrong</h1>
          <p style={{ color: '#b8b0a0', marginBottom: '1rem' }}>
            {this.state.error && this.state.error.toString()}
          </p>
          <details style={{ color: '#6b6560' }}>
            <summary>details</summary>
            <pre style={{ whiteSpace: 'pre-wrap', fontSize: '0.8rem' }}>
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </pre>
          </details>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '2rem',
              padding: '0.5rem 1rem',
              backgroundColor: 'transparent',
              border: '1px solid #f5f0e8',
              color: '#f5f0e8',
              cursor: 'pointer'
            }}
          >
            reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
