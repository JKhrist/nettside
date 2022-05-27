import Section from '@/components/container/Section';
import Title from '@/components/basic/Title';
import Radio from '@/components/basic/Radio';
import Pagination from '@/components/basic/Pagination';
import Lottie from 'lottie-react';
import veryImportant from '@/assets/veryImportant.json';
import important from '@/assets/important.json';
import alert from '@/assets/alert.svg';
import sirens from '@/assets/sirens.svg';
import alertUrgent from '@/assets/alertUrgent.svg';
import screen from '@/assets/screen.svg';
import { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

const Design = () => {
  const radioOptions = [
    {
      id: 1,
      name: 'Lite viktig',
      value: 'Lite viktig',
      numeric: 'A',
    },
    {
      id: 2,
      name: 'Viktig',
      value: 'Viktig',
      numeric: 'B',
    },
    {
      id: 3,
      name: 'Spesielt Viktig',
      value: 'Spesielt Viktig',
      numeric: 'C',
    },
  ];

  const lottie2ndRef = useRef();
  const lottie3rdRef = useRef();
  const [playSecond, setPlaySecond] = useState(false);
  const [playThird, setPlayThird] = useState(false);
  const [currentRadioVal, setCurrentRadioVal] = useState(null);

  const radioChange = (e) => {
    console.log('value:', e.currentTarget.value);
    setCurrentRadioVal(e.currentTarget.value);
    setPlaySecond(false);
    setPlayThird(false);
    const { id } = radioOptions.find(
      (item) => item.value === e.currentTarget.value
    );
    if (id === 2) {
      setPlaySecond(true);
      lottie2ndRef.current.playSegments([0, 151], true);
    } else if (id === 3) {
      setPlayThird(true);
      lottie3rdRef.current.playSegments([0, 151], true);
    }
  };

  const secondAnimationProps = useSpring({
    opacity: playSecond ? 1 : 0,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const thirdAnimationProps = useSpring({
    opacity: playThird ? 1 : 0,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <Section>
      <div className='mb-2 featured-box'>
        <div className='featured-image'>
          <img src={screen} />
          <animated.div
            style={{ opacity: secondAnimationProps.opacity }}
            className='featured-animation second-animation'>
            <Lottie
              lottieRef={lottie2ndRef}
              loop={true}
              autoplay={false}
              animationData={important}
            />
          </animated.div>
          <animated.div
            style={{ opacity: thirdAnimationProps.opacity }}
            className='featured-animation third-animation'>
            <Lottie
              lottieRef={lottie3rdRef}
              loop={true}
              autoplay={false}
              animationData={veryImportant}
            />
          </animated.div>
        </div>
      </div>
      <Title className='primary-title mb-2'>
        Hvor viktig er designet for deg?
      </Title>
      <Radio
        options={radioOptions}
        onChange={radioChange}
        currentRadioVal={currentRadioVal}
      />
      <Pagination />
    </Section>
  );
};

export default Design;
