import { ImageResponse } from 'next/og';

export const alt = 'Contadora Larissa Viana';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1A365D',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: 400,
            fontWeight: 'bolder',
            fontFamily: 'sans-serif',
            color: '#D69E2E',
            letterSpacing: '-10px',
          }}
        >
          LV
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
