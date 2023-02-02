import { Karyaitem } from '@elements'
import React from 'react'

export const KaryaList: React.FC = () => (
    <section className="container">
        <h2 className="mb-4">Karya Terbaik Minggu Ini</h2>
        <div className="flex gap-4">
            <Karyaitem
                karyaId={1}
                creator="Alfariz Sutanto"
                title="Mobil Terbang TDR3000"
                image="https://content.icarcdn.com/styles/article_cover/s3/field/article/cover/2021/mobil-terbang-konsep-xpeng-2.gif?itok=uh2nB0SN"
                creatorImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvAAH6GiguvqE26hQpvWeRu2vDiU0U6uowOA&usqp=CAU"
            />
            <Karyaitem
                karyaId={2}
                creator="Kinuy Bergidil Gidil Gandaria Tralala Trilili Sumalaka"
                title="Pesawat Darat dan Laut Tok Dalang Ranggi"
                image="https://content.icarcdn.com/styles/article_cover/s3/field/article/cover/2021/mobil-terbang-konsep-xpeng-2.gif?itok=uh2nB0SN"
                creatorImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvAAH6GiguvqE26hQpvWeRu2vDiU0U6uowOA&usqp=CAU"
            />
            <Karyaitem
                karyaId={3}
                creator="Mi Ai Wo Wo Wo Ai Ni Mixue Rasa Pisang Bakar dan Susu Kedelai Dengan Toping Kecap Manis"
                title="Helikopter Baling-baling Satu Roda Empat Buntut Dua Amfibi"
                image="https://content.icarcdn.com/styles/article_cover/s3/field/article/cover/2021/mobil-terbang-konsep-xpeng-2.gif?itok=uh2nB0SN"
                creatorImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvAAH6GiguvqE26hQpvWeRu2vDiU0U6uowOA&usqp=CAU"
            />
            <Karyaitem
                karyaId={4}
                creator="Iniadalahtulisanpanjangtanpaspasidanenteratauwhitespacelainnyaapakahandadapatmembacanya"
                title="inijugamerupakantulisanyangsangatamatpanjangdantanpaspasisayayakinandatidakdapatmembacanya"
                image="https://content.icarcdn.com/styles/article_cover/s3/field/article/cover/2021/mobil-terbang-konsep-xpeng-2.gif?itok=uh2nB0SN"
                creatorImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvAAH6GiguvqE26hQpvWeRu2vDiU0U6uowOA&usqp=CAU"
            />
            <Karyaitem
                karyaId={5}
                creator="Mi Ai Wo Wo Wo Ai Ni Mixue Rasa Pisang Bakar dan Susu Kedelai Dengan Toping Kecap Manis"
                title="Helikopter Baling-baling Satu Roda Empat Buntut Dua Amfibi"
                image="https://content.icarcdn.com/styles/article_cover/s3/field/article/cover/2021/mobil-terbang-konsep-xpeng-2.gif?itok=uh2nB0SN"
                creatorImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvAAH6GiguvqE26hQpvWeRu2vDiU0U6uowOA&usqp=CAU"
            />
        </div>
    </section>
)
