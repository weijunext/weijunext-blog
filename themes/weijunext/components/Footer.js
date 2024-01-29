import BLOG from '@/blog.config'
import Image from 'next/image'
import Link from 'next/link'
import CONFIG from '../config'
// import DarkModeButton from '@/components/DarkModeButton'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const copyrightDate = (function () {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear
    }
    return currentYear
  })()

  return (
    <footer className="w-full border-t mt-10 flex sm:flex-row flex-col justify-between px-12 py-10 sm:mb-0 mb-3 text-sm bg-black text-gray-100">
      <div className="">
        <Link
          href="/"
          aria-current="page"
          className="inline-flex items-center gap-2 text-lg text-secondary-700  md:text-xl"
        >
          <Image
            src="/avatar.png"
            alt="logo"
            width={30}
            height={30}
            className="h-6 w-6"
          />
          J实验室
        </Link>
        <p className="mt-2">{CONFIG.DESCRIPTION}</p>
        <p className="mt-2">
          <i className="fas fa-copyright" /> {`${copyrightDate}`}{' '}
          <span>
            <a
              href={BLOG.LINK}
              className="underline font-bold  dark:text-gray-300 "
            >
              {BLOG.AUTHOR}
            </a>
          </span>
        </p>
        <p className="mt-2">
          <span className="hidden busuanzi_container_site_pv">
            <i className="fas fa-eye" />
            <span className="px-1 busuanzi_value_site_pv"> </span>{' '}
          </span>
          <span className="pl-2 hidden busuanzi_container_site_uv">
            <i className="fas fa-users" />{' '}
            <span className="px-1 busuanzi_value_site_uv"> </span>{' '}
          </span>
        </p>
        <p className="mt-2">
          {BLOG.BEI_AN && (
            <>
              <i className="fas fa-shield-alt" />{' '}
              <a href="https://beian.miit.gov.cn/" className="mr-2">
                {BLOG.BEI_AN}
              </a>
              <br />
            </>
          )}
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-10 text-left md:mt-0 md:flex md:gap-24">
        <div>
          <h3 className="font-semibold text-secondary-700">Follow Me</h3>{' '}
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="mailto:weijunext@gmail.com"
                className="hover:text-primary-500 hover:underline"
              >
                Email
              </a>
            </li>{' '}
            <li>
              <Link
                href="https://twitter.com/weijunext"
                target="_black"
                rel="noopener norefferer nofollow"
                className="hover:text-primary-500 hover:underline"
              >
                Twitter / X
              </Link>
            </li>{' '}
            <li>
              <Link
                href="https://github.com/weijunext"
                target="_black"
                rel="noopener norefferer nofollow"
                className="hover:text-primary-500 hover:underline"
              >
                Github
              </Link>
            </li>{' '}
            <li>
              <Link
                href="https://mp.weixin.qq.com/s/RXpu-Ck13zoHyLP1OOUZ-g"
                target="_black"
                rel="noopener norefferer nofollow"
                className="hover:text-primary-500 hover:underline"
              >
                公众号
              </Link>
            </li>{' '}
            <li>
              <Link
                href="https://juejin.cn/user/26044008768029"
                target="_black"
                rel="noopener norefferer nofollow"
                className="hover:text-primary-500 hover:underline"
              >
                掘金
              </Link>
            </li>{' '}
            <li>
              <Link
                href="https://m.okjike.com/users/13EF1128-B51B-4D22-8B95-16BB406529F0"
                target="_black"
                rel="noopener norefferer nofollow"
                className="hover:text-primary-500 hover:underline"
              >
                即刻
              </Link>
            </li>{' '}
          </ul>
        </div>{' '}
        <div>
          <h3 className="font-semibold text-secondary-700">Links</h3>{' '}
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="https://weijunext.com/"
                title="Wei Jun's blog, share knowledge about front-end, fullstack and AI"
                target="_blank"
                className="hover:text-primary-500 hover:underline"
              >
                J 实验室
              </Link>
            </li>{' '}
            <li>
              <Link
                href="https://smartexcel.cc/"
                title="Your Smart Excel formula bot, generating formulas instantly."
                target="_black"
                className="hover:text-primary-500 hover:underline"
              >
                Smart Excel（开源）
              </Link>
            </li>{' '}
            <li>
              <Link
                href="https://nextjs.weijunext.com/"
                title="Sharing Technologies in the Next.js Ecosystem"
                target="_black"
                className="hover:text-primary-500 hover:underline"
              >
                Next.js 实战分享
              </Link>
            </li>
            <li>
              <Link
                href="https://weijunext.com/make-a-friend"
                title="Make a friend"
                target="_blank"
                className="hover:text-primary-500 hover:underline"
              >
                关于我
              </Link>
            </li>{' '}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
