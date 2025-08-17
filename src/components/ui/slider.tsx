import * as React from 'react'
export const Slider = React.forwardRef<HTMLInputElement, React.ComponentPropsWithoutRef<'input'>>((props, ref) => <input ref={ref} type="range" {...props} />)
Slider.displayName = 'Slider'
