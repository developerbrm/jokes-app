import { useId } from 'react'
import { v1 as uuidV1 } from 'uuid'
import Image from 'next/image'
import {
  FavoriteBorder,
  History,
  HouseOutlined,
  ShareOutlined,
  TuneOutlined,
  VolumeUpOutlined
} from '@mui/icons-material'

const Header = () => {
  const navigationDataArr = [
    {
      name: 'options',
      Icon: TuneOutlined,
      path: '/options'
    },
    {
      name: 'favorite',
      Icon: FavoriteBorder,
      path: '/favorite'
    },
    {
      name: 'home',
      Icon: HouseOutlined,
      path: '/'
    },
    {
      name: 'history',
      Icon: History,
      path: '/history'
    },
    {
      name: 'volume',
      Icon: VolumeUpOutlined,
      path: '/mute'
    },
    {
      name: 'share',
      Icon: ShareOutlined,
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
      <nav className="primary-color fixed bottom-0 left-0 z-50 w-full">
        <div className="m-6 mb-6 flex items-center justify-center gap-2 border-t-2 border-dashed border-current pt-6 drop-shadow-lg">
          {navigationDataArr.map(handleNavigationData)}
        </div>
      </nav>
    </header>
  )
}

export default Header
