import * as React from 'react'
export const Switch = React.forwardRef<HTMLInputElement, React.ComponentPropsWithoutRef<'input'>>((props, ref) => <input ref={ref} type="checkbox" role="switch" {...props} />)
Switch.displayName = 'Switch'
