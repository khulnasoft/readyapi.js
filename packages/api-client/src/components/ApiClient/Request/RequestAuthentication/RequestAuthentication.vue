<script setup lang="ts">
import { ReadyapiButton } from '@readyapi/components'
import type { OpenAPIV3_1 } from '@readyapi/openapi-parser'
import { ref } from 'vue'

import { clickGeneratedParameter } from '../../../../clientBus'
import { useAuthenticationStore } from '../../../../stores'
import { CollapsibleSection } from '../../../CollapsibleSection'
import SecurityScheme from './SecurityScheme.vue'
import SecuritySchemeSelector from './SecuritySchemeSelector.vue'

const requestAuthenticationRef = ref<typeof HTMLDivElement | null>(null)

clickGeneratedParameter.on(() => {
  if (!requestAuthenticationRef.value) {
    return
  }

  const element = requestAuthenticationRef.value as unknown as HTMLDivElement

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  })
})

const { authentication, setAuthentication } = useAuthenticationStore()

// When there are no security schemes in the spec, we add blank ones
const setIntialScheme = (
  preferredSecurityScheme: 'apiKey' | 'httpBasic' | 'httpBearer' | 'oauth2',
) => {
  setAuthentication({
    customSecurity: true,
    preferredSecurityScheme,
    securitySchemes: {
      apiKey: { type: 'apiKey', name: 'apiKey', in: 'header' },
      httpBasic: { type: 'http', scheme: 'basic' },
      httpBearer: { type: 'http', scheme: 'bearer' },
      // TODO oauth2
    },
  })
}
</script>
<template>
  <div ref="requestAuthenticationRef">
    <CollapsibleSection title="Authentication">
      <template #options>
        <SecuritySchemeSelector
          :value="authentication.securitySchemes"></SecuritySchemeSelector>
      </template>

      <div
        v-if="authentication.preferredSecurityScheme"
        class="preferred-security-scheme">
        <SecurityScheme
          :value="
            authentication.securitySchemes?.[
              authentication.preferredSecurityScheme
            ] as OpenAPIV3_1.SecuritySchemeObject
          " />
      </div>

      <div
        v-if="!authentication.securitySchemes"
        class="security-scheme-empty-state">
        <div
          class="readyapi-api-client-add"
          variant="outlined"
          @click="setIntialScheme('apiKey')">
          ApiKey
        </div>
        <div
          class="readyapi-api-client-add"
          variant="outlined"
          @click="setIntialScheme('httpBasic')">
          Basic
        </div>
        <div
          class="readyapi-api-client-add"
          variant="outlined"
          @click="setIntialScheme('httpBearer')">
          Bearer
        </div>
        <!-- TODO implement -->
        <!-- <div
          class="readyapi-api-client-add"
          variant="outlined"
          @click="setIntialScheme('oauth2')">
          oAuth2
        </div> -->
      </div>
    </CollapsibleSection>
  </div>
</template>

<style scoped>
.preferred-security-scheme {
  display: flex;
  width: 100%;
}

.security-scheme-empty-state {
  border: 1px dashed var(--readyapi-border-color);
  width: 100%;
  text-align: center;
  border-radius: var(--readyapi-radius);
  font-size: var(--readyapi-small);
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.readyapi-api-client-add {
  color: var(--readyapi-color-2);
  padding: 3px 9px;
  width: fit-content;
  cursor: pointer;
  font-size: var(--readyapi-micro);
  font-weight: var(--readyapi-semibold);
  text-decoration: none;
  margin: 0 6px;
  border: none;
  font-family: var(--readyapi-font);
  appearance: none;
  display: flex;
  align-items: center;
  border: 1px solid var(--readyapi-border-color);
  border-radius: 30px;
}
.readyapi-api-client-add svg {
  width: 12px;
  height: 12px;
  margin-right: 6px;
}
.readyapi-api-client-add:hover {
  color: var(--readyapi-color-1);
}
.readyapi-api-client-add:focus-within {
  background: var(--readyapi-background-3);
}
</style>
