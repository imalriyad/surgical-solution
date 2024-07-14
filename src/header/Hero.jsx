import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import heroimg from "../assets/heroimg.png";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  const { isOpenMenu } = useContext(AuthContext);

  return (
    <>
      <div className={isOpenMenu ? "hidden lg:block" : "block"}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-[83vh] bg-blue-800 w-full p-10">
              <div className="flex items-center gap-4 max-w-screen-2xl mx-auto px-4 lg:px-14 md:px-8 py-2">
                <div className="w-full text-white">
                  <h1 className="text-3xl font-bold">
                    {" "}
                    Surgical solution{" "}
                    <span className="text-3xl LalSabujNormal">
                      এর যেকোন ইকুইপমেন্ট আপনার প্রয়োজনে পেয়ে যাবেন ঘরে বসেই
                      ক্যাশ অন ডেলিভারিতে !!{" "}
                    </span>
                  </h1>
                  <div className="space-y-2 pt-5 text-lg tracking-tight">
                    <li className="LalSabujNormal">
                      ✅ একমাত্র আমরাই সারাদেশ ব্যাপী দিচ্ছি মেডিকেল,
                      অথোপেডিক্স, স্পোর্টস ফিজিওথেরাপি, ফিজিওথেরাপি, সায়ন্টেফিক,
                      ডায়াগনস্টিক সহ সকল ইকুইপমেন্ট হাতে পাওয়ার সেরা মানের
                      নিশ্চয়তা
                    </li>
                    <li className="LalSabujNormal">
                      ✅ <span className="">Surgical solution</span> আপনার
                      প্রয়োজনীয় সকল ইকুইপমেন্ট সেরা মান এবং দামের মধ্যে সরবরাহ
                      করতে সব সময় প্রস্তুত !!
                    </li>
                    <li className="LalSabujNormal">
                      ✅ আমরা-ই সরাসরি ইম্পোর্ট করে থাকি আলহামদুলিল্লাহ।
                    </li>

                    <li className="LalSabujNormal">
                      ✅ এছাড়া আমরা গ্যারান্টি এবং ওয়ারেন্টির ব্যাপারে খুবই ভালো
                      সার্ভিস দিয়ে যাচ্ছি।
                    </li>
                  </div>
                </div>
                <img
                  src={heroimg}
                  alt=""
                  className="w-6/12 h-full rounded-lg object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[80vh]">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                alt=""
                className="h-full w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[80vh]">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                alt=""
                className="h-full w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[80vh]">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                alt=""
                className="h-full w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[80vh]">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                alt=""
                className="h-full w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[80vh]">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                alt=""
                className="h-full w-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
