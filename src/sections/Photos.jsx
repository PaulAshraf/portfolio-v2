import Image from 'next/future/image'

import image1 from '@/images/photos/feynman.jpeg'
import image2 from '@/images/photos/godfatherbw.jpeg'
import image3 from '@/images/photos/paul2023bnw.jpeg'
import image4 from '@/images/photos/steve2.jpeg'
import image5 from '@/images/photos/bcs2.jpeg'

import clsx from 'clsx'

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Photos
