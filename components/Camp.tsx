import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

type CampSiteProps = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoinded: string;
};

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoinded,
}: CampSiteProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image
              src="/folded-map.svg"
              alt="map"
              height={28}
              width={28}
              style={{ width: 28, height: 28 }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                key={url}
                src={url}
                alt="Personnes"
                width={52}
                height={52}
                style={{ width: 52, height: 52 }}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoinded}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className=" 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-10 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Kala Pattar"
          subtitle="Népal"
          peopleJoinded="50 inscrits"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Le Nil en felouque"
          subtitle="Egypte"
          peopleJoinded="32 inscrits"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Voyagez</strong> à pied comme un retour à l'essentiel
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Depuis plus de 30 ans, nous créons pour vous des voyages en petit
            groupe dans le monde entier. Hilink est le spécialiste du voyage
            d'aventure à pied. Que vous soyez randonneur occasionnel ou trekkeur
            aguerri, découvrez des milieux naturels préservés et rares qui
            nourrissent votre sensation de liberté. Un vrai retour à l'essentiel
            !
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
            style={{ width: 186, height: 219 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
