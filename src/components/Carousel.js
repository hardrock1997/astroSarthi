import ReactSimplyCarousel from 'react-simply-carousel';
import {useState} from 'react';
import {services} from '../utils/services';
import Card from './Card';
import styles from '../components/Carousel.module.css';
export default function Carousel({cards,type}) {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    console.log(type[0]);
    return (
        <div>
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                    style: {
                      alignSelf: 'center',
                      background: 'black',
                      border: 'none',
                      borderRadius: '50%',
                      color: 'white',
                      cursor: 'pointer',
                      fontSize: '20px',
                      height: 30,
                      lineHeight: 1,
                      textAlign: 'center',
                      width: 30,
                    },
                    children: <span>{`>`}</span>,
                  }}
                  backwardBtnProps={{
                    style: {
                      alignSelf: 'center',
                      background: 'black',
                      border: 'none',
                      borderRadius: '50%',
                      color: 'white',
                      cursor: 'pointer',
                      fontSize: '20px',
                      height: 30,
                      lineHeight: 1,
                      textAlign: 'center',
                      width: 30,
                      position:'relative',
                      left:0
                    },
                    children: <span>{`<`}</span>,
                  }}
                  responsiveProps={[
                    {
                      itemsToShow: 3,
                      itemsToScroll: 1,
                      minWidth: 768,
                    },
                  ]}
                  speed={400}
                  easing="linear"
            >
                {
                    type.map((service)=>{
                        return (
                            <div key={service.id} className={styles.card_container}>
                                <Card serviceName={service.title} logoImage={service.logo} description={service.description}/>
                            </div>
                        )
                    })
                }
            </ReactSimplyCarousel>
        </div>
    )
}