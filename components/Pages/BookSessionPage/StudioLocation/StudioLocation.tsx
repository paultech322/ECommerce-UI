import GoogleMapReact from "google-map-react"
import Button from "../../../../shared/Button"
import Media from "../../../../shared/Media"

const StudioLocation = () => (
  <div
    className="w-full
        md:mt-[48px] lg:mt-[64px] xl:mt-[80px]
        md:p-[12px] lg:p-[16px] xl:p-[20px]
        grid grid-cols-12 
        md:gap-x-[24px] lg:gap-x-[32px] xl:gap-x-[40px]
        bg-[#12121166] h-[180px]
        md:rounded-[14.4px] lg:rounded-[19.2px] xl:rounded-[24px]"
  >
    <div
      className="col-span-8 overflow-hidden
            md:rounded-[19.2px] lg:rounded-[25.6px] xl:xl:rounded-[32px]"
    >
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
          language: "en",
          region: "US",
          libraries: ["places"],
        }}
        defaultCenter={{ lat: 51.506, lng: -0.169 }}
        defaultZoom={15}
      />
    </div>
    <div className="col-span-4">
      <p
        className="md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]
                font-urwgeometric_bold text-[#d2d2d2]
                md:pb-[7.2px] lg:pb-[9.6px] xl:pb-[12px]"
      >
        Studio Location
      </p>
      <div className="flex items-center gap-x-[5px]">
        <Media
          type="image"
          link="/images/BookSession/location.svg"
          blurLink="/images/BookSession/location.png"
          containerClasses="w-[7px] aspect-[7/12]"
        />
        <p
          className="text-[#d2d2d2]
                    md:text-[7.2px] lg:text-[9.6px] xl:text-[12px]"
        >
          485 Broadway Floor 3, New York
        </p>
      </div>
      <Button
        id="open-google-map"
        type="submit"
        className="md:w-[144px] lg:w-[192px] xl:w-[240px] aspect-[240/28]
        text-black font-urwgeometric_bold rounded-full
        md:text-[7.2px] lg:text-[9.6px] xl:text-[12px]
        md:mt-[14.4px] lg:mt-[19.2px] xl:mt-[24px]
        shadow-[0px_0px_40px_0px_#a1ea0466]"
        pulseColor="white"
      >
        Open Google Maps
      </Button>
    </div>
  </div>
)

export default StudioLocation
