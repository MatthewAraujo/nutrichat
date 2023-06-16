import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function Calendar(){
  return (
    <div className="w-96 ">
      <h1 className="text-2xl font-bold leading-relaxed tracking-wide	 text-[#020617]">Junho 2023</h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={7}


      
      >
        <SwiperSlide className="">
          <div className="bg-[#CBD5E1] rounded-b-full rounded-t-full w-10 flex flex-col  text-center">
            <p className="text-[#71717A] pt-3">QUA</p>
            <p className="font-bold pb-2">14</p>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#CBD5E1] rounded-b-full rounded-t-full w-10  flex flex-col  text-center">
            <p className="text-[#71717A] pt-3">QUI</p>
            <p className="font-bold pb-2">15</p>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#CBD5E1] rounded-b-full rounded-t-full w-10  flex flex-col  text-center">
            <p className="text-[#71717A] pt-3">SEX</p>
            <p className="font-bold pb-2">16</p>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#ACE123] rounded-b-full rounded-t-full w-10  flex flex-col  text-center">
            <p className="text-[#71717A] pt-3">SAB</p>
            <p className="font-bold pb-2">17</p>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#CBD5E1] rounded-b-full rounded-t-full w-10  flex flex-col  text-center">
            <p className="text-[#71717A] pt-3">DOM</p>
            <p className="font-bold pb-2">18</p>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#CBD5E1] rounded-b-full rounded-t-full w-10  flex flex-col   text-center">
            <p className="text-[#71717A] pt-3">SEG</p>
            <p className="font-bold pb-2">19</p>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#CBD5E1] rounded-b-full rounded-t-full w-10  flex flex-col  text-center">
            <p className="text-[#71717A] pt-2">TER</p>
            <p className="font-bold pb-2">20</p>
          </div>
          
        </SwiperSlide>
        

       

      </Swiper>
    </div>
  )
}