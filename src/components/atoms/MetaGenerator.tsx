import Head from 'next/head'
import React from 'react'

interface MetaParams {
    readonly title: string
    readonly description? : string
  }

function MetaGenerator({ title, description } : MetaParams) {
  return (
    <>
        <title>{title}</title>
        <meta name='description'>{description}</meta>
    </>
  )
}

export default MetaGenerator