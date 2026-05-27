import { createLazyFileRoute } from '@tanstack/react-router'
import Screen_Onboarding from '../components/screens/Screen_Onboarding'

export const Route = createLazyFileRoute('/anunciar')({
  component: Screen_Onboarding,
})
