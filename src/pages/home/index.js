import './index.scss';


export default function HomePage () {
    return(
        <div className="Box_Principal">


            <header className="head">

                    <div className='div_img'>
                        
                    <img className="img_1" src='/assets/images/img_icon_1.png' alt='Logo' />
                    
                    </div>

                    <div className='div_logo'>

                    <img className="img_1" src='/assets/images/logo192.png' alt='Logo' />
                    
                    </div>


            </header>


\\pesquisa
            <nav>

            <img src='/assets/images/Bambu_pesquisa.png' alt='Logo' />
            <input type="search"></input>

            </nav>


\\entremeio
            <div>

            <img src="/assets/images/img-icon_2.png" />
            <h1>Cuidando de você,
                respeitando a natureza.</h1>

            </div>


\\meio
            <div classname='meio'>
                
                <div classname='Selos'>
                    <img src="/assets/images/Selo_1.png" />
                    <img src="/assets/images/Selo_2.png" />
                    <img src="/assets/images/Selo_3.png" />
                    <img src="/assets/images/Selo_4.png" />
                    <img src="/assets/images/Selo_5.png" />
                    <img src="/assets/images/Selo_6.png" />
                </div>
                
                <div className="Box_Meio">


            <div classname="eclipse">
                <img src="/assets/images/eclipse.png" />
                <img src="/assets/images/eclipse.png" />
                <img src="/assets/images/eclipse.png" />
                <img src="/assets/images/eclipse.png" />
            </div>
            

                <p>Acreditamos na importância de cuidar do nosso corpo e do meio ambiente de forma consciente e sustentável. É por isso que apresentamos nossa proposta para uma empresa de cosméticos vegana, que busca oferecer produtos de beleza livres de ingredientes de origem animal, e que não são testados em animais. Nossa empresa tem como objetivo principal promover a beleza natural, saudável e ética, proporcionando produtos de alta qualidade que atendam às necessidades dos consumidores conscientes.</p>

                </div>


//comentarios
                <div classname="coments">

                <div classname="coment_1"><img src="/assets/images/Usuario.png" />
                <p>A qualidade dos produtos são impossíveis de não se apaixonar.</p>
                </div>

                <div className="coment_2"> <h1>FeedBacks</h1> <img src="/assets/images/Usuario.png" />
                <p>A NaturalMente tem produtos ótimos e incrivelmente Lindos  :D</p>
                </div>

                <div classname="coment_3"><img src="/assets/images/Usuario.png" />
                <p>O fato desses produtos serem veganos é incrível! A eficiência e sua composição são espetaculares!</p>
                </div>

                <div>

                <img src="/assets/images/dobradiça_linah.png" />

                <h1>Linha com Ácido Hialurônico </h1>

                <div>

                    <img src="/assets/images/img_referencia_linah.png" />

                    <h3> A proposta de um sérum de ácido hiaulurônico é ser adequado para todos os tipos de pele, incluindo pele seca, oleosa, mista e sensível. A fórmula é projetada para não obstruir os poros, minimizando o risco de acne ou irritação. Além disso, um bom sérum de ácido hiaulurônico pode ser usado em conjunto com outros produtos de cuidados com a pele, como hidratantes e protetores solares, para obter resultados ainda melhores. </h3>

                    <img src="/assets/images/img_cosmeticos_linah.png" />

                </div>


                </div>

                </div>

        </div>
    </div>    
    );
}

