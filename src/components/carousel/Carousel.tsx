import React from "react";
import AliceCarousel from "react-alice-carousel";
import "./../../index.css";
import Modal from "react-modal";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { carouselObject, countryProps } from "../../types/types";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    borderRadius: "35px",
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgba(255,255,255, 0.5)",
  },
};

const handleDragStart = (e: any) => e.preventDefault();

const Carousel = (props: countryProps) => {
  const [previewArr, setPreviewArr] = React.useState([]);
  const [cardsImageArr, setCardsImageArr] = React.useState(previewArr);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [modalCardID, setModalCardID] = React.useState(0);
  

  const previewGetter = async () => {
    const response =  await ((await fetch("/api/cards/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `ctn=${props.code}`,
    })).json());

    for (let i = 0; i < response.length; i++) {
      let imgRes = await fetch("/api/image/", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `id=${response[i].preview}`,
      });
      const imageBlob = await imgRes.blob();
      let imageBlobURL = URL.createObjectURL(imageBlob);
      response[i].preview = imageBlobURL; 
    }
    return response;
  }

  const cardsImageGetter = async () => {
    const response =  await ((await fetch("/api/cards/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `ctn=${props.code}`,
    })).json());
    
    response.forEach((obj: carouselObject) => {
      let imgGetter = async (index: number) => {
        let imgId = obj.images[index];
        let imgRes = await fetch("/api/image/", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `id=${imgId}`,
        });
        const imageBlob = await imgRes.blob();
        let imageBlobURL = await URL.createObjectURL(imageBlob);
        obj.images.splice(index, 1, imageBlobURL);
        setTimeout(() => {
          setCardsImageArr(response);
        }, 300);
      }
      for (let i = 0; i < obj.images.length; i++) {
        imgGetter(i);
        setCardsImageArr(response);
      }
    })
    
  }


  React.useEffect(() => {
    previewGetter().then((response) => setPreviewArr(response));
    cardsImageGetter();
  }, []);

  const modalMove = () => {
    setModalIsOpen(!modalIsOpen);
  }

  const objects: Array<carouselObject> = previewArr;
  
  

  const placesItems = objects.map((block: carouselObject) => (
    <div className="mx-5 text-center duration-300 hover:translate-y-1.5 flex flex-col items-center hover:text-regal-blue">
      <img src={block.preview} onDragStart={handleDragStart} role="presentation" />
      <div className="card-title-wrap px-2 pt-7 text-xl font-bold" dangerouslySetInnerHTML={{ __html: block.title }}></div>
      <div className="card-desc-wrap px-2 py-5" dangerouslySetInnerHTML={{ __html: block.desc }}></div>
      <button 
        onClick={() => {modalMove(); setModalCardID(block.id);
        }}
        className="my-5 px-6 py-3 border border-regal-blue hover:px-12 duration-300 hover:bg-regal-blue hover:text-white text-regal-blue"
      >
        מידע נוסף
      </button>
    </div>
  ));

  
  const CarouselMContent = () => {
    return(
      <div>
      {cardsImageArr.map((block: carouselObject, index: number) => {
        if (modalCardID === block.id) {

          const images = block.images.map((src: string, i: number) => {
            return(
              <img
                className="px-2.5"
                src={src}
                onDragStart={handleDragStart}
                role="presentation"
              />
            )
          })
          
          return(
            <div key={index}>
              <section className="flex flex-col xl:w-[1036px] lg:w-[780px] max-h-screen w-screen items-center p-10">
                <div className="text-center font-bold text-2xl md:text-3xl pb-7" dangerouslySetInnerHTML={{ __html: block.title }}></div>
                <AliceCarousel
                  mouseTracking
                  //@ts-ignore
                  items={images}
                  autoPlay={true}
                  responsive={{
                    0: { items: 1 },
                    1280: { items: 2 },
                  }}
                  infinite={true}
                  disableDotsControls={true}
                  autoPlayInterval={5000}
                />
                <div dangerouslySetInnerHTML={{ __html: block.desc_main }} className="text-center md:text-base text-sm"></div>
                <a
                  href="#feedback"
                  onClick={() => modalMove()}
                  className="mt-10 px-6 py-3 border border-regal-blue hover:px-12 duration-300 hover:bg-regal-blue hover:text-white text-regal-blue"
                >
                  צור קשר
                </a>
              </section>
              <button
                className="absolute z-20 right-5 top-5"
                onClick={modalMove}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-2xl hover:text-regal-red"
                />
              </button>
            </div>
          )
        }
      })}
      </div> 
    )
  }
  

  return (
    <section className="px-10 relative pt-5 pb-5">
      <div id="objects" className="absolute -top-28"></div>
      <div className="container mx-auto w-full">
        <div className="flex flex-col items-center py-8">
          <h1 className="text-center w-full md:text-4xl text-3xl text-regal-blue pb-4">
            איזה נדל"ן אתם מחפשים?
          </h1>
          <p className="md:w-2/3 w-full text-center">
            וזכרו שהתזמון הטוב ביותר לרכישת נדל"ן הוא "לפני חמש שנים", וכך יהיה
            תמיד רכשו את הטוב ביותר, המחיר נשכח והאיכות נשארת
          </p>
        </div>
        <AliceCarousel
          mouseTracking
          items={placesItems}
          autoPlay
          responsive={{
            640: { items: 1 },
            1024: { items: 2 },
            1280: { items: 4 },
          }}
          infinite
          disableDotsControls
          autoPlayInterval={5000}
        />

          <Modal
            //@ts-ignore
            isOpen={modalIsOpen}
            onRequestClose={modalMove}
            ariaHideApp={false}
            style={customStyles}
            contentLabel="Modal"
          >
            <CarouselMContent/>
          </Modal>

      </div>
    </section>
  );
};

export default Carousel;
