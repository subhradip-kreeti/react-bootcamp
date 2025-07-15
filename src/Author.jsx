import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';

const Author = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setImageUrl(data.message))
      .catch(err => console.log(`error, reason: ${err}`));
  }, [isClicked]);

  return (
    <>
      <div>
        <h2 className="text-center text-2xl mt-5 font-bold text-cyan-700 mb-10">
          Author
        </h2>
        <div className="flex gap-10 justify-around">
          <div className="p-10 border-2 border-cyan-900"> Author 1</div>
          <div className="p-10 border-2 border-cyan-900"> Author 2</div>
          <div className="p-10 border-2 border-cyan-900"> Author 3</div>
        </div>
      </div>

      {imageUrl && (
        <div className="flex flex-col gap-10 justify-center items-center m-10">
          <img
            src={imageUrl}
            alt="Random Dog"
            className="w-100 h-100 rounded-full border border-amber-300"
          />
          <Button className="w-fit" onClick={() => setIsClicked(!isClicked)}>
            Change The Picture
          </Button>
        </div>
      )}
    </>
  );
};

export default Author;
