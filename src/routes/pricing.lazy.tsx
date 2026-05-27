import { createLazyFileRoute } from '@tanstack/react-router'
import Screen_Pricing from '../components/screens/Screen_Pricing'

export const Route = createLazyFileRoute('/pricing')({
  component: Screen_Pricing
})
