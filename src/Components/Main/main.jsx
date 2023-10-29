import React from 'react';
import './main.css';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsClipboardCheck } from 'react-icons/bs';
import img from '../../assets/img-01.jpg';
import img2 from '../../assets/img-02.jpg';
import img3 from '../../assets/img-03.jpg';
import img4 from '../../assets/img-04.jpg';
import img5 from '../../assets/img-05.jpg';
import img6 from '../../assets/img-06.jpg';
import img7 from '../../assets/img-07.jpg';
import img8 from '../../assets/img-08.jpg';
import img9 from '../../assets/img-09.jpg';

const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description:
            'The epitome of romance, Bora Bora is one of the best destinations in the World. This place is known for its luxurious adventurous activities.',
    },
    {
        id: 2,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        imgSrc: img2,
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description:
            'Huayna Picchu is a mountain in Peru, rising over Machu Picchu,the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.',
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description:
            'One of the most remarkable Australian natural gifts is the GrBarrier Reef. The hallmark of this place is lavish and beauty. Always interesting to be in this place',
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description:
            'According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities',
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Guanajuato',
        location: 'Mexico',
        grade: 'CULTURAL RELAX ',
        fees: '$1100',
        description:
            'A city in central Mexico, Guanajuato is known for its history silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome.',
    },
    {
        id: 6,
        destTitle: 'Cinque Terre',
        location: 'Italy ',
        imgSrc: img6,
        grade: 'CULTURAL RELAX ',
        fees: '$840',
        description:
            'The vibrant hues of the houses are its benchmark and explai beauty of this place. Also, if you are a foodie and love seafood, you will exhilarated with the choice you are about to get here. Happy exploring gre food! ',
    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Angkor Wat',
        location: 'Cambodia',
        grade: 'CULTURAL RELAX',
        fees: '$790',
        description:
            'Angkot wat represents the entire range of Khmer art from to the 15th century. This temple is considered the heart and soul of This place is known for its luxurious stays and adventurous activities.',
    },
    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Taj Mahal',
        location: 'India',
        grade: 'CULTURAL RELAX ',
        fees: '$900',
        description:
            ' An immense mausoleum of white marble, built-in Agra by emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays adventurous activities',
    },
    {
        id:9,
        imgSrc: img9,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description: 'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.'
    },
];
const Main = () => {
    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title">Most visited destinations</h3>
            </div>

            <div className="secContent grid">
                {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                    return (
                        <div key={id} className="singleDestination">
                            <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle} />
                            </div>

                            <div className="cardInfo">
                                <h4 className="destTitle">{destTitle}</h4>
                                <span className="continent flex">
                                    <HiOutlineLocationMarker className="icon" />
                                    <span className="name">{location}</span>
                                </span>

                                <div className="fees flex">
                                    <div className="grade">
                                        <span>
                                            {grade}
                                            <small>+1</small>
                                        </span>
                                    </div>
                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                </div>

                                <div className="desc">
                                    <p>{description}</p>
                                </div>

                                <button className="btn flex">
                                    DETAILS <BsClipboardCheck className="icon" />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Main;
