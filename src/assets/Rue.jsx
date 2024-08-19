import * as React from 'react'

const Rue = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={300}
    height={300}
    viewBox='0 0 124 124'
    fill='none'
    {...props}
  >
    <rect width={124} height={114} rx={10} fill='#5c99d6' />
    <rect width={116} height={106} x={4} rx={8} y={4} fill='#0067d0' />
    <rect width={108} height={98} x={8} rx={6} y={8} fill='#007bff' />
    <text
      fill='#fff'
      fontFamily='Helvetica, sans-serif'
      fontSize={40}
      fontWeight={600}
      letterSpacing={5}
      textAnchor='middle'
      x='50%'
      y='50%'
    >
      {'Rue'}
    </text>
    <text
      x='50%'
      y='65%'
      fontWeight='bold'
      fontFamily='Helvetica-Bold, Helvetica, sans-serif'
      fontSize={7}
      fill='#fff'
      letterSpacing={1}
      textAnchor='middle'
    >
      {'REACT UI ESSENTIALS'}
    </text>
  </svg>
)
export default Rue
