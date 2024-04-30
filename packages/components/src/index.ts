import type { App } from 'vue'

import { ReadyapiButton } from './components/ReadyapiButton'
import { ReadyapiCodeBlock } from './components/ReadyapiCodeBlock'
import { type Icon, ReadyapiIcon } from './components/ReadyapiIcon'
import { ReadyapiIconButton } from './components/ReadyapiIconButton'
import { ReadyapiLoading, useLoadingState } from './components/ReadyapiLoading'
import { ReadyapiModal, useModal } from './components/ReadyapiModal'
import { ReadyapiSearchInput } from './components/ReadyapiSearchInput'
import {
  ReadyapiSearchResultItem,
  ReadyapiSearchResultList,
} from './components/ReadyapiSearchResults'
import { ReadyapiTextField } from './components/ReadyapiTextField'
import './tailwind/tailwind.css'

export default {
  install: (app: App) => {
    app.component('ReadyapiButton', ReadyapiButton)
    app.component('ReadyapiIcon', ReadyapiIcon)
    app.component('ReadyapiIconButton', ReadyapiIconButton)
    app.component('ReadyapiLoading', ReadyapiLoading)
    app.component('ReadyapiModal', ReadyapiModal)
    app.component('ReadyapiSearchInput', ReadyapiSearchInput)
    app.component('ReadyapiSearchResultItem', ReadyapiSearchResultItem)
    app.component('ReadyapiSearchResultList', ReadyapiSearchResultList)
    app.component('ReadyapiTextField', ReadyapiTextField)
  },
}

export {
  ReadyapiButton,
  ReadyapiCodeBlock,
  ReadyapiIcon,
  ReadyapiIconButton,
  ReadyapiLoading,
  ReadyapiModal,
  ReadyapiSearchInput,
  ReadyapiSearchResultItem,
  ReadyapiSearchResultList,
  ReadyapiTextField,
  type Icon,
  useLoadingState,
  useModal,
}
