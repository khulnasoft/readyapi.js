<script setup lang="ts">
import { computed } from 'vue'

import { getRequestFromAuthentication } from '../../../helpers'
import {
  useAuthenticationStore,
  useOpenApiStore,
  useRequestStore,
} from '../../../stores'
import { RequestAuthentication } from './RequestAuthentication'
import RequestBody from './RequestBody.vue'
import RequestCookies from './RequestCookies.vue'
import RequestHeaders from './RequestHeaders.vue'
import RequestQuery from './RequestQuery.vue'
import RequestVariables from './RequestVariables.vue'

const { activeRequest } = useRequestStore()
const { authentication } = useAuthenticationStore()
const {
  openApi: { operation, globalSecurity },
} = useOpenApiStore()

const authenticationRequest = computed(() =>
  getRequestFromAuthentication(
    authentication,
    operation?.information?.security ?? globalSecurity,
  ),
)

const showRequestBody = computed(() => {
  const requestType = activeRequest.type.toLowerCase()
  return (
    requestType === 'put' || requestType === 'post' || requestType === 'patch'
  )
})

/**
 * TODO: This is a workaround to make the address bar editable, but not the rest. If we’d really like to have an
 * API client where everything can be edited, we need to invest more time.
 */
const readOnly = true
</script>
<template>
  <div class="readyapi-api-client__main__left custom-scroll">
    <div class="readyapi-api-client__main__content">
      <div class="readyapi-api-client__main__content__header">
        <label>Request</label>
        <div class="meta">
          <div class="meta-item meta-item__input">
            <input
              v-model="activeRequest.name"
              class="readyapi-api-client__request-name"
              :disabled="readOnly"
              placeholder="Request Name"
              type="text" />
          </div>
        </div>
      </div>
      <div class="readyapi-api-client__main__content__body">
        <RequestVariables :variables="activeRequest.variables" />
        <RequestAuthentication />
        <RequestCookies
          :cookies="activeRequest.cookies"
          :generatedCookies="authenticationRequest.cookies" />
        <RequestHeaders
          :generatedHeaders="authenticationRequest.headers"
          :headers="activeRequest.headers" />
        <RequestQuery
          :generatedQueries="authenticationRequest.queryString"
          :queries="activeRequest.query" />
        <RequestBody
          v-if="showRequestBody"
          :body="activeRequest.body"
          :formData="activeRequest.formData"
          :requestBody="activeRequest.body" />
        <div class="readyapi-api-client__main__scroll-container" />
      </div>
    </div>
  </div>
</template>
<style>
.readyapi-api-client__main__left {
  width: 50%;
  border-right: 1px solid var(--readyapi-border-color);
}
@media screen and (max-width: 820px) {
  .readyapi-api-client__main__left {
    width: 100%;
    border-right: none;
  }
}
.readyapi-api-client__item__content {
  flex-flow: wrap;
  color: var(--readyapi-color-3);
  font-size: var(--readyapi-micro);
  margin-bottom: 12px;
  justify-content: space-between;
  overflow: auto;
  padding: 0 9px 0 0;
  z-index: 2;
  position: relative;
}
.readyapi-api-client__item__content:empty {
  display: none;
}
.readyapi-api-client__item__content .readyapi-api-client__codemirror__wrapper {
  width: 100%;
  min-height: 63px;
}
.readyapi-api-client__item__content .readyapi-codeblock-pre,
.readyapi-api-client__item__content .cm-s-default {
  border: 1px solid var(--readyapi-border-color);
  border-radius: 0 0 var(--readyapi-radius) var(--readyapi-radius);
  background: transparent;
}
.readyapi-api-client__item__content .readyapi-codeblock-pre * {
  font-size: var(--readyapi-micro);
}
.readyapi-api-client__item__content .readyapi-codeblock-pre,
.readyapi-api-client__item__content .codemirror-container {
  width: 100%;
  max-height: calc(100vh - 300px);
  overflow: auto;
}
.readyapi-api-client__item__content .cm-scroller {
  border: 1px solid var(--readyapi-border-color);
  border-radius: 0 0 var(--readyapi-radius) var(--readyapi-radius);
  background-color: var(--readyapi-background-1);
}
.readyapi-api-client__item__content .cm-editor {
  outline: none !important;
}
.readyapi-api-client__item__content .cm-editor .cm-gutters {
  background: transparent;
}
.readyapi-api-client__item__content .cm-scroll {
  background: transparent;
}
.readyapi-api-client__item__content .cm-editor * {
  font-size: var(--readyapi-micro);
}
.readyapi-api-client__item__content .cm-editor .cm-line {
  color: var(--readyapi-color-1);
}
.readyapi-api-client__item__content .card-form {
  border-radius: 0 0 var(--readyapi-radius) var(--readyapi-radius);
}
.readyapi-api-client__item__content-button {
  appearance: none;
  border: none;
  outline: none;
  font-size: var(--readyapi-micro);
  background: var(--readyapi-api-client-color) !important;
  text-align: center;
  font-weight: var(--readyapi-semibold);
  font-family: var(--readyapi-font);
  padding: 6px;
  width: fit-content;
  margin: 3px 3px 3px auto;
  text-transform: uppercase;
  border-radius: var(--readyapi-radius);
  color: white;
  cursor: pointer;
  text-align: center !important;
  position: relative;
}
.readyapi-api-client__item__content-button span {
  position: relative;
}
.readyapi-api-client__item__content-button:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  cursor: pointer;
  border-radius: var(--readyapi-radius);
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
}
.readyapi-api-client__item__content-button:hover:before {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));
}
.readyapi-api-client__item__content__split {
  justify-content: space-between;
}
.readyapi-collapsible-section-flex {
  width: 100%;
}
.input {
  background: transparent;
  position: relative;
  width: 100%;
  text-align: left;
  display: flex;
  box-shadow: 0 1px 0 var(--readyapi-border-color);
}
.input:focus-within {
  box-shadow: 0 0 0 1px var(--readyapi-color-1) !important;
  z-index: 10;
}
.input:first-of-type {
  border-radius: var(--readyapi-radius) var(--readyapi-radius) 0 0;
}
.input:first-child:last-child {
  border-radius: var(--readyapi-radius);
}
.input:last-child {
  box-shadow: none;
  border-radius: 0 0 var(--readyapi-radius) var(--readyapi-radius);
}
.input__half:first-of-type {
  border-radius: var(--readyapi-radius) 0 0 0;
}
.input__half:nth-of-type(2) {
  border-radius: 0 var(--readyapi-radius) 0 0;
}
.authentication-form {
  box-shadow: 0 0 0 1px var(--readyapi-border-color);
  border-radius: var(--readyapi-radius);
  width: 100%;
  display: flex;
  flex-flow: wrap;
}
.input__half {
  width: 50%;
}
.input__half + .input__half {
  border-left: 1px solid var(--readyapi-border-color);
}
.input__half:focus-within {
  border-color: transparent;
}
.input label,
.input input {
  padding: 9px;
  border: 0;
  outline: none;
  font-size: var(--readyapi-micro);
  color: var(--readyapi-color-2);
  width: 100%;
  background: transparent;
  appearance: none;
  -webkit-appearance: none;
  left: 0;
}
.input label {
  color: var(--readyapi-color-1);
  width: fit-content;
  padding-right: 0;
  white-space: nowrap;
  cursor: text;
}
.input input {
  position: relative;
  z-index: 99;
}
.input input:not(:placeholder-shown) + label {
  color: var(--readyapi-color-2);
}
.select {
  background: var(--readyapi-background-1);
  border-radius: var(--readyapi-radius-lg);
  font-size: var(--readyapi-micro);
  border: 1px solid var(--readyapi-border-color);
  width: 100%;
  position: relative;
  margin-bottom: 6px;
}
.select:focus-within {
  background: var(--readyapi-background-3);
}
.select:hover {
  background: var(--readyapi-background-3);
}
.select svg {
  position: absolute;
  right: 9px;
  pointer-events: none;
  color: var(--readyapi-color-2);
  width: 6px;
  top: 10px;
}
.select label {
  display: block;
  font-size: 10px;
  color: var(--readyapi-color-2);
  position: absolute;
  left: 9px;
  top: 6px;
}
.select select {
  background: transparent;
  outline: none;
  border: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  font-size: var(--readyapi-micro);
  color: var(--readyapi-color-1);
  width: 100%;
  padding: 14px 9px 4px 9px;
  top: 0;
  position: relative;
  cursor: pointer;
}

.check {
  display: flex;
  position: relative;
  cursor: pointer;
  align-items: center;
  font-size: var(--readyapi-micro);
  padding: 6px 9px;
  border-radius: 0 0 var(--readyapi-radius) var(--readyapi-radius);
  user-select: none;
  width: 100%;
  outline: none;
}
.check:focus-within {
  box-shadow: 0 0 0 1px var(--readyapi-color-1);
}
.checkmark:hover {
  background: var(--readyapi-background-3);
}
.check:focus-within {
  border-color: var(--readyapi-color-1);
}
.check p {
  color: var(--readyapi-color-3);
}
.check input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  height: 17px;
  width: 17px;
  background: var(--readyapi-background-3);
  margin-right: 10px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.check input:checked ~ p {
  color: var(--readyapi-color-1);
}
.check .checkmark:after {
  content: '';
  display: none;
  width: 5px;
  height: 8px;
  border: solid var(--readyapi-color-1);
  border-width: 0 1.5px 1.5px 0;
  transform: rotate(45deg) translate3d(0, -1px, 0);
}
.check input:checked ~ .checkmark:after {
  display: block;
}
.readyapi-api-client__main__scroll-container {
  height: calc(100vh - 320px);
}
.readyapi-api-client__request-name {
  outline: none;
  border: none;
  appearance: none;
  -webkit-appearance: none;
  color: var(--readyapi-color-3);
  font-size: var(--readyapi-mini);
  font-weight: var(--readyapi-semibold);
  color: var(--readyapi-color-3);
  width: 100%;
  padding: 0;
  background: transparent;
  font-family: var(--readyapi-font);
}
.readyapi-api-client__request-name::-webkit-input-placeholder {
  font-weight: var(--readyapi-semibold);
}
.readyapi-api-client__request-name:-ms-input-placeholder {
  font-weight: var(--readyapi-semibold);
}
.readyapi-api-client__request-name::placeholder {
  font-weight: var(--readyapi-semibold);
}
</style>
