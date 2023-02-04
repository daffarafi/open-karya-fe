import { UserInterface } from 'src/components/contexts/AuthContext/interface'

export interface KaryaInterace {
  id: number | null
  title: string
  description: string
  user: UserInterface | null
  tags: Array<string>
  created_at: string
  updated_at: string
}
