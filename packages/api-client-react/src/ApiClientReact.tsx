import { type ClientRequestConfig, useRequestStore } from '@readyapi/api-client'
import React, { useEffect, useState } from 'react'

import { ApiClientReactBase } from './ApiClientReactBase'
import './style.css'

type Props = {
  // Function to close the modal
  close: () => void
  // Controls whether the modal is open or closed
  isOpen: boolean
  // optional proxy url for requests
  proxy?: string
  // TheOpenApi request object
  request: ClientRequestConfig | null
}

const { resetActiveResponse, setActiveRequest } = useRequestStore()

/**
 * Api Client React
 */
export const ApiClientReact = ({
  proxy = '',
  close,
  isOpen = false,
  request,
}: Props) => {
  useEffect(() => {
    resetActiveResponse()
    if (request) setActiveRequest(request)
  }, [isOpen, request])

  const [host, setHost] = useState('')
  useEffect(() => setHost(window.location.host), [])

  return (
    <div
      className="readyapi"
      style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="readyapi-container">
        <div className="readyapi-app">
          <div className="readyapi-app-header">
            <span>API Client</span>
            <a
              href={`https://www.ready-api.khulnasoft.com?utm_campaign=${host}`}
              target="_blank">
              Powered by ready-api.khulnasoft.com
            </a>
          </div>
          <ApiClientReactBase proxy={proxy} />
        </div>
        <div
          onClick={close}
          className="readyapi-app-exit"></div>
      </div>
    </div>
  )
}
