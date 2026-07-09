'use client'

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          backgroundColor: '#ffffff',
          color: '#0f172a',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '480px' }}>
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#ef4444',
              marginBottom: '1rem',
            }}
          >
            Critical Error
          </p>
          <h1
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}
          >
            The application could not load.
          </h1>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.6,
              color: '#475569',
              marginBottom: '2rem',
            }}
          >
            A critical error prevented ToolVault from rendering. Please try
            reloading. If the problem persists, contact support.
          </p>
          <button
            onClick={reset}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#ffffff',
              backgroundColor: '#4f54e5',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
            }}
          >
            Reload Application
          </button>
          {process.env.NODE_ENV !== 'production' && error.digest && (
            <p
              style={{
                marginTop: '2rem',
                fontSize: '0.75rem',
                color: '#94a3b8',
                fontFamily: 'monospace',
              }}
            >
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  )
}
