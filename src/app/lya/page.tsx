import React from "react";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";

import LayoutQuote from '../../components/commons/layout_quote.common';
import PuisiPertamaLya from "@/assets/images/lya/puisi_pertama.jpg";
import LyaPicture from "@/assets/images/lya/lya.jpg";

export default function Lya({ }) {
    return (
        <main>
            <LayoutQuote>
                <h1 className="text-4xl font-sevillana">Linda Amelia Putri</h1>

                <article className="mt-5 text-justify flex items-center justify-center flex-col gap-y-4 indent-9">
                    <p>
                        Sebelum lebih jauh cerita tentang Liaa aku ingin kasih tau bahwa gula itu manis dan ada banyak hal manis di dunia ini entah itu bisa dirasakan oleh lidah atau dirasakan lewat visual mata. Aku yakin Liaa itu termasuk pemanis alami ciptaan langsung dari Tuhannnya dan orang tuanya mengambil peran banyak atas Lia yang cantik dan manis.
                    </p>
                    
                    <Image src={LyaPicture} alt="Linda Amelia Putri" height={500} width={500} className="sm:h-60 sm:w-60 w-40 h-40 rounded-full object-cover my-7 shadow-md shadow-amber-600" />

                    <p>
                        <b>LINDA AMELIA PUTRI</b> itu nama lengkapnya, nyatanya kadang aku manggil dia dengan  <b>&quot;Lia&quot;</b> atau <b>&quot;Sei&quot;</b>, untuk Sei itu khusus aku dan Lia aja yang tau. Ada beberapa pertanyaan yang sering aku dapetin ketika aku bersama Lia, &quot;Kamu dapetin darimana?&quot;, &quot;Ketemu dimana?&quot; jawabanku akan selalu sama, yaitu <b>dapet dari jalur langit</b>.
                    </p>
                    <p>
                        Percayalah Lia itu mahkluk idup dia bernapas dengan paru-paru layaknya manusia pada umumnya dan dia mencintai pekerjaanya saat ini, yaitu kuliah. Ya walaupun dia kadang agak brutal juga ketika menghadapi banyak tantangan seperti tugas. Hari ini tanggal 13 Januari 2024 Lia masih sibuk ngerjain skripsi dan sekarang seperti yang aku ketahui Lia sedang ngerjain BAB 5 dan fokus mencari jurnal buat referensi. Kadang aku mendengar dia <i>misuh-misuh</i>, mungkin faktor kesel ato capek seh. Yahh... derita mahasiswa kebanyakan ketika mengerjakan skripsi.
                    </p>
                    <p>
                        Zodiak kita sama, sama-sama singa. Kalau marahan juga layaknya singa pada umumnya. <i>Jujurly</i> Lia kalo marah nyeremin, aku engga bisa menahan kekuatan Lia ketika marah. Mirip preman pasar menurutku, preman pasar yang versi cantiknya. 
                    </p>
                    <p>
                        Karena Lia aku sampe menghafal siklus dia PMS ya walaupun sering lupanya juga. Bukanya gimana-gimana seperti rutinan tiap bulan Lia suka tantrum ketika menjelang PMS. Itu agak menyakitkan seh. Tapi Lia baik kok habis itu dia minta maap. Hal yang bikin aku ngerasa engga terima ketika dia selalu mengait-ngaitkan bahwa Liaa terkena penyakit mental. Masa seh secantik itu kalau dia terkena penyakit mental, hehe. Ya walaupun penyakit mental engga ada kaitanya dengan kecantikan atau kemanisan Lia.
                    </p>

                    <p className="">
                        <i>&quot;Lia aku akan menyembuhkanmu.&quot;</i>
                    </p>

                    <p>Itu yang bisa aku katakan ke Lia pertama kali.</p>

                    <p>
                        <i>&quot;Kaakaaaa.&quot;</i>
                    </p>

                    <p>Itu suara termeduh yang sudah pernah aku dengar untuk saat ini.</p>

                    <p>
                        Kamu tauu Liaa aku menulis ini dengan sadar diri, ditemani segelas aer putih, ditemani suara tokek yang kadang-kadang bunyi tanpa aku suruh, dan tentu ditemani Lia biarpun tidak secara langsung itu lebih dari cukup, biarpun sangat berharap Lia ada disini, duduk disampingku. Menemani aku menulis. Walau aku tau akhirnya pasti berantem dan ribut tidak jelas. Hehe Liaaa aku kangen, bener-bener kangen saat aku menulis ini.
                    </p>

                    <Image src={PuisiPertamaLya} alt="Puisi pertama vor Lya" className="my-10" />

                    <p>Ini puisi pertama yang aku bikin buat Lia. Aku sadar ini termasuk hal yang brutal dan berani karena saat itu aku baru kenal Lia. Maap Lia aku harus bersikap serius ketika berkaitan denganmu.</p>
                </article>
            </LayoutQuote>
        </main>
    )
}


export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params


    const titleMeta: string = 'Linda Amelia Putri';
    const descMeta: string = 'Sebelum lebih jauh cerita tentang Liaa aku ingin kasih tau bahwa gula itu manis dan ada banyak hal manis di dunia ini entah itu bisa dirasakan oleh lidah atau dirasakan lewat visual mata. Aku yakin Liaa itu termasuk pemanis alami ciptaan langsung dari Tuhannnya dan orang tuanya mengambil peran banyak atas Lia yang cantik dan manis.'

    return {
        title: titleMeta,
        description: descMeta,
        alternates: {
            canonical: '/tema',
        },
        openGraph: {
            title: titleMeta,
            url: '/tema',
            siteName: 'Dinanti',
            //   images: ['/some-specific-page-image.jpg'],
        },
        twitter: {
            title: titleMeta,
            creator: 'Dinanti Creator',
            // images: ['https://nextjs.org/og.png'],
        },
    }
}

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}