import { StaticImageData } from 'next/image'
import gallery1 from '../public/images/gallery/Gallery1.webp'
import gallery2 from '../public/images/gallery/Gallery2.webp'
import gallery3 from '../public/images/gallery/Gallery3.webp'
import gallery4 from '../public/images/gallery/Gallery4.webp'
import gallery5 from '../public/images/gallery/Gallery5.webp'
import gallery6 from '../public/images/gallery/Gallery6.webp'
import gallery7 from '../public/images/gallery/Gallery7.webp'
import gallery8 from '../public/images/gallery/Gallery8.webp'

import andrea1 from '../public/images/andrea/Andrea1.webp'
import andrea2 from '../public/images/andrea/Andrea2.webp'
import andrea3 from '../public/images/andrea/Andrea3.webp'
import andrea4 from '../public/images/andrea/Andrea4.webp'
import andrea5 from '../public/images/andrea/Andrea5.webp'
import andrea6 from '../public/images/andrea/Andrea6.webp'
import andrea7 from '../public/images/andrea/Andrea7.webp'
import andrea8 from '../public/images/andrea/Andrea8.webp'

const gallery = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8
]

const andrea = [
    andrea1,
    andrea2,
    andrea3,
    andrea4,
    andrea5,
    andrea6,
    andrea7,
    andrea8
]

export const getImgs = async (): Promise<StaticImageData[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return gallery;
}

export const getImgs2 = async (): Promise<StaticImageData[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return andrea;
}