import { StaticImageData } from 'next/image'
import gallery00 from '../public/images/gallery/botellapapelmanteca.webp'
import gallery01 from '../public/images/gallery/bouquetela.webp'
import gallery02 from '../public/images/gallery/cajaflores.webp'
import gallery03 from '../public/images/gallery/carinosaequisetum.webp'
import gallery04 from '../public/images/gallery/carinosamarron.webp'
import gallery05 from '../public/images/gallery/sombrerofloral.webp'
import gallery06 from '../public/images/gallery/carinosascelerosas.webp'
import gallery07 from '../public/images/gallery/carinosasrosas.webp'
import gallery08 from '../public/images/gallery/celesteyrosa.webp'
import gallery09 from '../public/images/gallery/giganteblanca.webp'
import gallery10 from '../public/images/gallery/jarrontela.webp'
import gallery11 from '../public/images/gallery/peoniaazul.webp'
import gallery12 from '../public/images/gallery/peonias.webp'
import gallery13 from '../public/images/gallery/peoniastela.webp'
import gallery14 from '../public/images/gallery/pimpolloscolgados.webp'
import gallery15 from '../public/images/gallery/pimpollosilla.webp'
import gallery16 from '../public/images/gallery/ramocarinosas.webp'
import gallery17 from '../public/images/gallery/ramocarinosasclaras.webp'
import gallery18 from '../public/images/gallery/ramocolorido.webp'
import gallery19 from '../public/images/gallery/ramograndotas.webp'
import gallery20 from '../public/images/gallery/ramonaranja.webp'
import gallery21 from '../public/images/gallery/ramopapelmanteca.webp'
import gallery22 from '../public/images/gallery/ramopeoniastela.webp'
import gallery23 from '../public/images/gallery/ramopimpollos.webp'
import gallery24 from '../public/images/gallery/ramorosa.webp'
import gallery25 from '../public/images/gallery/ramorosas.webp'
import gallery26 from '../public/images/gallery/ramorositas.webp'
import gallery27 from '../public/images/gallery/ramotela.webp'
import gallery28 from '../public/images/gallery/lirios_valijas.webp'
import gallery29 from '../public/images/gallery/lirios_botella.webp'
import gallery30 from '../public/images/gallery/lirios_closeup.webp'
import gallery31 from '../public/images/gallery/lirios_macro.webp'



import andrea1 from '../public/images/andrea/Andrea1.webp'
import andrea2 from '../public/images/andrea/Andrea2.webp'
import andrea3 from '../public/images/andrea/Andrea3.webp'
import andrea4 from '../public/images/andrea/Andrea4.webp'
import andrea5 from '../public/images/andrea/Andrea5.webp'
import andrea6 from '../public/images/andrea/Andrea6.webp'
import andrea7 from '../public/images/andrea/Andrea7.webp'
import andrea8 from '../public/images/andrea/Andrea8.webp'

const gallery = [
    gallery00,
    gallery01,
    gallery02,
    gallery03,
    gallery04,
    gallery05,
    gallery06,
    gallery07,
    gallery08,
    gallery09,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
    gallery16,
    gallery17,
    gallery18,
    gallery19,
    gallery20,
    gallery21,
    gallery22,
    gallery23,
    gallery24,
    gallery25,
    gallery26,
    gallery27,
    gallery28,
    gallery29,
    gallery30,
    gallery31,
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