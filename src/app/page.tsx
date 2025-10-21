import ImageCarousel from '@/components/ImageCarousel';
import Image1 from '../../public/assets/image/image1.png';
import Image2 from '../../public/assets/image/image2.png';
import Image3 from '../../public/assets/image/image3.png';
import { title } from 'process';

export default function Home() {
  // Sample images - replace with your actual image URLs
  const carouselItems = [
    {
      image: Image1,
      title: 'Personal Beginnings',
      content:
        'Covenant Care Association, Inc. was founded out of a deeply personal experience — the loss of a loved one. In the midst of grief came the realization that financial burdens often add to the pain families endure. No one should have to face both emotional and financial hardship alone.',
    },
    {
      image: Image2,
      title: 'Purposeful Mission',
      content:
        "What began as a personal journey of loss has evolved into a purposeful mission: to walk with Filipino families through life's most difficult moments, extending care, compassion, and financial assistance when it matters most.",
    },
    {
      image: Image3,
      title: 'Lasting Commitment',
      content:
        'Today, Covenant Care stands as a community built on trust, compassion, and shared responsibility. Guided by our commitment to uphold dignity and provide meaningful support, we ensure that every promise of care is fulfilled with sincerity and respect.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F2ECE5] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-center text-gray-800 text-[24px] md:text-[54px]">
            Our Story
          </h1>
          <p className="font-light text-[14px] md:text-[18px] mb-[36px] md:mb-[53px]">
            The story behind what we do and why we do it
          </p>
        </div>

        <ImageCarousel
          items={carouselItems}
          autoPlay={true}
          autoPlayInterval={4000}
        />

        {/* <div className="mt-8 text-center text-gray-600">
          <p className="mb-2">
            Use the arrow buttons or click the dots to navigate
          </p>
          <p>You can also use keyboard arrow keys for navigation</p>
        </div> */}
      </div>
    </div>
  );
}
