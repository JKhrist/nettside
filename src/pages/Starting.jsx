import Section from '@/components/container/Section';
import Title from '@/components/basic/Title';
import Radio from '@/components/basic/Radio';
import websiteQuestion from '@/assets/website-question.svg';
import webshop from '@/assets/webshop.svg';
import website from '@/assets/website.svg';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Starting = () => {
  const radioOptions = [
    {
      id: 1,
      name: 'Nettbutikk',
      value: 'nettbutikk',
    },
    {
      id: 2,
      name: 'Vanlig nettside',
      value: 'nettside',
    },
  ];

  const [flipped, set] = useState(false);
  const [nettside, setNettside] = useState(false);
  const [chosen, setChosen] = useState(false);

  const radioChange = (value) => {
    console.log('value:', value);
    setChosen(true);
    set((state) => !state);
    value === 'nettside' ? setNettside(true) : setNettside(false);
  };

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 360 : 0}deg) scaleX(1)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const websiteProps = useSpring({
    opacity: chosen ? 1 : 0,
    transform: `perspective(600px) rotateX(${
      flipped ? 360 : 0
    }deg) scaleX(1) translate(-50%, -50%)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <Section>
      <div className='mb-2'>
        <animated.div style={{ transform }}>
          <img src={websiteQuestion} />
        </animated.div>
        <animated.div
          style={{
            opacity: websiteProps.opacity,
            transform: websiteProps.transform,
          }}
          className='websiteQ-img'>
          <img
            src={webshop}
            className='webshop'
            style={{ opacity: nettside ? 1 : 0 }}
          />
          <img
            src={website}
            className='webshop'
            style={{ opacity: nettside ? 0 : 1 }}
          />
        </animated.div>
      </div>
      <Title className='primary-title mb-2'>
        Hva slags nettside er du ute etter?
      </Title>
      <Radio options={radioOptions} onChange={radioChange} />
    </Section>
  );
};

export default Starting;
