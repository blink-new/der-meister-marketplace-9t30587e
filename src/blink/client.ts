import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: 'der-meister-marketplace-9t30587e',
  authRequired: true
})

export default blink