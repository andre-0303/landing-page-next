import { WhatsappLogo } from '@phosphor-icons/react';  
import React from 'react';
import MenImg from '../../../public/Img1.png'
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="bg-[#FF0000] text-white relative overflow-hidden"> 

            <div>
                <Image
                src={MenImg}
                fill
                sizes='100vw'
                priority
                className='object-cover opacity-60 lg:hidden'
                />
                <div className='absolute inset-0 bg-black opacity-30 md:hidden'></div>
            </div>

            <div className='container mx-auto px-4 py-15 md:pb-0 relative'>
                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8 relative'>

                    <div className='flex flex-col justify-center space-y-6 pl-4 md:pl-12 lg:pl-20'>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
                            Transforme Seu Corpo e Sua Vida com CrossFit
                        </h1>
                        <p className="lg:text-lg">
                            Treinos intensos, resultados reais – para todos os níveis e objetivos.
                        </p>
                        <div>
                            <a href="#" className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2">
                                <WhatsappLogo className='w-5 h-5'/> 
                                Contato via WhatsApp
                            </a>
                        </div>
                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira mensalidade
                            </p>
                        </div>
                    </div>

                    {/* Coluna de imagem */}
                    <div className='hidden md:block h-full relative'>
                        <Image
                            src={MenImg}
                            alt='foto de um homem treinando crossfit'
                            className='object-contain h-full'
                            sizes='(max-width: 768px) 0vw, 50vw'
                        />
                    </div>

                </article>
            </div>
        </section>
    )
}
