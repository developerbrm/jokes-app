import { useId } from 'react'
import { v1 as uuidV1 } from 'uuid'
import Image from 'next/image'
import {
  Favorite,
  History,
  House,
  Share,
  Tune,
  VolumeUp
} from '@mui/icons-material'

const Header = () => {
  const navigationDataArr = [
    {
      name: 'options',
      Icon: Tune,
      path: '/options'
    },
    {
      name: 'favorite',
      Icon: Favorite,
      path: '/favorite'
    },
    {
      name: 'home',
      Icon: House,
      path: '/'
    },
    {
      name: 'history',
      Icon: History,
      path: '/history'
    },
    {
      name: 'volume',
      Icon: VolumeUp,
      path: '/mute'
    },
    {
      name: 'share',
      Icon: Share,
      path: '/share'
    }
  ]

  const handleNavigationData = ({
    name,
    Icon,
    path
  }: {
    name: string
    Icon: any
    path: string
  }) => {
    return (
      <button className="" title={name} key={uuidV1()}>
        <div className="aspect-square w-10">
          <Icon className="apply-base-img-css aspect-square w-10" />
        </div>
      </button>
    )
  }

  return (
    <header className="">
      <nav className="fixed bottom-0 left-0 z-50 w-full primary-color">
        <div className="m-6 mb-6 flex items-center justify-center gap-2 border-t-2 border-current border-dashed pt-6">
          {navigationDataArr.map(handleNavigationData)}
        </div>
      </nav>
    </header>
  )
}

export default Header
