import { createLazyFileRoute } from '@tanstack/react-router'
import Screen_Login from '../components/screens/Screen_Login'

export const Route = createLazyFileRoute('/login')({
  component: Screen_Login,
})
