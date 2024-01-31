import BLOG from '@/blog.config'
import Link from 'next/link'
import ContactMe from './ContactMe'

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
    <footer>
      <div className="mt-16 pt-6 pb-2 flex flex-col items-center bg-black text-sm text-gray-400 border-t">
        <div className="mb-3 flex space-x-4">
          <ContactMe />
        </div>
        <div className="mb-2 flex space-x-2 flex-wrap justify-center">
          {BLOG.FOOTER_PRODUCT.map((product, index) => {
            return (
              <>
                <Link key={product.url} href={product.url} target="_blank">
                  {product.name}
                </Link>
                {/* eslint-disable-next-line multiline-ternary */}
                {index !== BLOG.FOOTER_PRODUCT.length - 1 ? (
                  <>
                    <div>{' • '}</div>
                  </>
                ) : (
                  <></>
                )}
              </>
            )
          })}
        </div>
        <div className="mb-2 flex space-x-2">
          <Link href={BLOG.LINK}>{BLOG.AUTHOR}</Link>
          <div>{' • '}</div>
          <div>{`© ${copyrightDate}`}</div>
          <div>{' • '}</div>
          <Link href="https://beian.miit.gov.cn/" target="_blank">
            <i className="fas fa-shield-alt" /> {BLOG.BEI_AN}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
