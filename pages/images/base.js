import Image from 'next/image';

const BaseImage = () => {
  return (
    <div style={{ position: 'relative', width: '300px', height: '500px' }}>
      Bes
      <Image
        alt="Next.js logo"
        src="https://images.unsplash.com/photo-1623043555134-a67d5a00826e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
        width={1200}
        height={400}
      />
      <Image alt="Mountains" src="/bike.jpg" width={500} height={200} />
    </div>
  );
};

export default BaseImage;
