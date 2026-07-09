import { ImageResponse } from 'next/og'

export const alt = 'ToolVault — Engineering Infrastructure for Innovators'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        background:
          'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #2f3482 100%)',
        padding: '80px',
        color: 'white',
      }}
    >
      <div
        style={{
          fontSize: 24,
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#8193f8',
          marginBottom: 32,
        }}
      >
        ToolVault
      </div>

      <div
        style={{
          fontSize: 88,
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          marginBottom: 32,
          maxWidth: 900,
        }}
      >
        Engineering Infrastructure for Innovators
      </div>

      <div
        style={{
          fontSize: 28,
          fontWeight: 400,
          lineHeight: 1.4,
          color: '#94a3b8',
          maxWidth: 800,
        }}
      >
        Professional tools, collaborative workspaces, and expert guidance under
        one roof.
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 60,
          right: 80,
          width: 96,
          height: 96,
          background: '#4f54e5',
          borderRadius: 22,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 48,
          fontWeight: 700,
          letterSpacing: '-0.05em',
        }}
      >
        TV
      </div>
    </div>,
    { ...size }
  )
}
