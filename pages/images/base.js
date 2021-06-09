import Image from 'next/image';

const BaseImage = () => {
  return (
    <div>
      <Image
        src="/me.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
};

export default BaseImage;
