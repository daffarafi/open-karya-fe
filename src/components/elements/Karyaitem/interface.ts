import { UserInterface } from 'src/components/contexts/AuthContext/interface'

export interface KaryaItemProps {
  karyaId: number
  image?: string
  title: string
  user: UserInterface
  date: string
  creatorImage?: string
}
