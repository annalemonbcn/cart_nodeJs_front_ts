import { Fragment } from 'react'

const withLineBreaks = (text: string) =>
  text.split('\n').map((line, idx) => (
    <Fragment key={idx}>
      {line}
      <br />
    </Fragment>
  ))

export { withLineBreaks }
