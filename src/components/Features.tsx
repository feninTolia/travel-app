import { FEATURES } from '@/constants';
import Image from 'next/image';

interface IFeature {
  title: string;
  icon: string;
  variant: string;
  description: string;
}

interface IFeatureProps {
  feature: IFeature;
}

const Features = () => {
  return (
    <section className=" flexCenter flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className=" max-container padding-container relative  w-full flex justify-end">
        <div className=" flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className=" feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem key={feature.title} feature={feature} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ feature }: IFeatureProps) => {
  return (
    <li className="flex w-full flex-1 items-start flex-col ">
      <div className="bg-green-50 rounded-full p-4 lg:p-7 ">
        <Image src={feature.icon} alt="feature" width={28} height={28} />
      </div>
      <h3 className="bold-20 lg:bold-32 mt-5 capitalize">{feature.title}</h3>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {feature.description}
      </p>
    </li>
  );
};

export default Features;
