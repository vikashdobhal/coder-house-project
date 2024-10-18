import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '../../../../public/images/coderhouse.png'
function Page() {
  return (
    <div className="leftnav col-md-3">
       <Image
        src={logo}
        alt="coder house logo"
        height="50"
        />
      <ul className="p-0 m-0">
        <li>
          <Link href="/">About Coder House</Link>
        </li>
        <li>
          <Link href="/">Code Area</Link>
        </li>
        <li>
          <Link href="/">Link</Link>
        </li>
        <li>
          <Link href="/">About Coder House</Link>
        </li>
        <li>
          <Link href="/">About Coder House</Link>
        </li>
        <li>
          <Link href="/">About Coder House</Link>
        </li>
      </ul>
    </div>
  )
}

export default Page