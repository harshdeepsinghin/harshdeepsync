import * as React from "react"

export type ChartConfig = Record<string, unknown>

// All chart components have been reduced to minimal stubs.
export const ChartContainer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
)
export const ChartTooltip: React.FC = () => null
export const ChartTooltipContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => <div ref={ref} {...props}>{children}</div>
)
ChartTooltipContent.displayName = "ChartTooltipContent"
export const ChartLegend: React.FC = () => null
export const ChartLegendContent: React.FC = () => null
export const ChartStyle: React.FC = () => null

export { ChartContainer as default }
