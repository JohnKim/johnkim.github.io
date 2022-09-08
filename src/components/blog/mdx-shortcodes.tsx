/** @jsx jsx */
import { Divider, jsx } from 'theme-ui'
import React from 'react'

type CollapsibleProps = {
  summary: string
  children: React.ReactNode
}

export const Collapsible = ({ summary, children }: CollapsibleProps) => (
  <details
    sx={{
      px: [2, 4],
    }}
  >
    <summary
      sx={{
        color: 'secondary',
        fontWeight: `medium`,
        fontSize: ['13px', '14px'],
        cursor: `pointer`,
        '>:firstOfType': {
          display: `inline`,
        },
      }}
    >
      {summary}
    </summary>
    <Divider />
    {children}
    <Divider />
  </details>
)

const MdxShortCodes = {
  Collapsible,
}

export default MdxShortCodes
