import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slide3 from "../assets/slide1.png";
import slide2 from '../assets/slide2.png'
import slide1 from '../assets/slide3.png'
import slide4 from '../assets/slide4.png'
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  const { isOpenMenu } = useContext(AuthContext);

  return (
    <>
      <div className={isOpenMenu ? "hidden lg:block" : "block bg-blue-800"}>
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
            <div className="min-h-content bg-blue-800 w-full md:p-10 p-4">
              <div className="flex flex-col-reverse lg:flex-row items-center gap-4 max-w-screen-2xl mx-auto px-4 lg:px-14 md:px-8 py-2">
                <div className="w-full text-white">
                  <h1 className="md:text-3xl text-xl font-bold">
                    {" "}
                    Surgical solution{" "}
                    <span className="md:text-3xl text-xl LalSabujNormal">
                      এর যেকোন ইকুইপমেন্ট আপনার প্রয়োজনে পেয়ে যাবেন ঘরে বসেই
                      ক্যাশ অন ডেলিভারিতে !!{" "}
                    </span>
                  </h1>
                  <div className="space-y-2 md:block hidden leading-normal pt-5 text-lg tracking-tight">
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
                  src={slide1}
                  alt=""
                  className="lg:w-6/12 md:w-8/12 w-full h-full rounded-lg object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="min-h-content bg-blue-800 w-full md:p-10 p-4">
              <div className="flex flex-col-reverse lg:flex-row items-center gap-4 max-w-screen-2xl mx-auto px-4 lg:px-14 md:px-8 py-2">
                <div className="w-full text-white">
                  <h1 className="md:text-3xl text-xl font-bold">
                    {" "}
                    Surgical solution{" "}
                    <span className="md:text-3xl text-xl LalSabujNormal">
                      এর যেকোন ইকুইপমেন্ট আপনার প্রয়োজনে পেয়ে যাবেন ঘরে বসেই
                      ক্যাশ অন ডেলিভারিতে !!{" "}
                    </span>
                  </h1>
                  <div className="space-y-2 md:block hidden leading-normal pt-5 text-lg tracking-tight">
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
                  src={slide2}
                  alt=""
                  className="lg:w-6/12 md:w-8/12 w-full h-full rounded-lg object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="min-h-content bg-blue-800 w-full md:p-10 p-4">
              <div className="flex flex-col-reverse lg:flex-row items-center gap-4 max-w-screen-2xl mx-auto px-4 lg:px-14 md:px-8 py-2">
                <div className="w-full text-white">
                  <h1 className="md:text-3xl text-xl font-bold">
                    {" "}
                    Surgical solution{" "}
                    <span className="md:text-3xl text-xl LalSabujNormal">
                      এর যেকোন ইকুইপমেন্ট আপনার প্রয়োজনে পেয়ে যাবেন ঘরে বসেই
                      ক্যাশ অন ডেলিভারিতে !!{" "}
                    </span>
                  </h1>
                  <div className="space-y-2 md:block hidden leading-normal pt-5 text-lg tracking-tight">
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
                  src={slide3}
                  alt=""
                  className="lg:w-6/12 md:w-8/12 w-full h-full rounded-lg object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
         
          <SwiperSlide>
            <div className="min-h-content bg-blue-800 w-full md:p-10 p-4">
              <div className="flex flex-col-reverse lg:flex-row items-center gap-4 max-w-screen-2xl mx-auto px-4 lg:px-14 md:px-8 py-2">
                <div className="w-full text-white">
                  <h1 className="md:text-3xl text-xl font-bold">
                    {" "}
                    Surgical solution{" "}
                    <span className="md:text-3xl text-xl LalSabujNormal">
                      এর যেকোন ইকুইপমেন্ট আপনার প্রয়োজনে পেয়ে যাবেন ঘরে বসেই
                      ক্যাশ অন ডেলিভারিতে !!{" "}
                    </span>
                  </h1>
                  <div className="space-y-2 md:block hidden leading-normal pt-5 text-lg tracking-tight">
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
                  src={slide4}
                  alt=""
                  className="lg:w-6/12 md:w-8/12 w-full h-full rounded-lg object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
