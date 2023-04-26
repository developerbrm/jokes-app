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
import Link from 'next/link'

const Header = () => {
  const navigationDataArr = [
    {
      name: 'options',
      Icon: TuneOutlined,
      path: '/options',
      isActive: false
    },
    {
      name: 'favorite',
      Icon: FavoriteBorder,
      path: '/favorite',
      isActive: false
    },
    {
      name: 'home',
      Icon: HouseOutlined,
      path: '/',
      isActive: true
    },
    {
      name: 'history',
      Icon: History,
      path: '/history',
      isActive: false
    },
    {
      name: 'volume',
      Icon: VolumeUpOutlined,
      path: '/mute',
      isActive: false
    },
    {
      name: 'share',
      Icon: ShareOutlined,
      path: '/share',
      isActive: false
    }
  ]

  const handleNavigationData = ({
    name,
    Icon,
    path,
    isActive = false
  }: {
    name: string
    Icon: any
    path: string
    isActive: boolean
  }) => {
    return (
      <Link href={path} key={uuidV1()}>
        <button className="grid place-content-center" title={name}>
          <div
            className={`aspect-square w-10 rounded-md p-1 ${
              isActive ? 'bg-primary-color-dark' : ''
            }`}
          >
            <Icon
              className={`apply-base-img-css aspect-square w-10 ${
                isActive ? 'text-white' : ''
              }`}
            />
          </div>
        </button>
      </Link>
    )
  }

  return (
    <header className="">
      <nav className="fixed bottom-0 left-0 z-50 w-full text-primary-color-dark">
        <div className="mx-6  my-4 flex items-center justify-center gap-3 border-t-2 border-dashed border-current pt-4 drop-shadow-md">
          {navigationDataArr.map(handleNavigationData)}
        </div>
      </nav>
    </header>
  )
}

export default Header
